const IG_API = "https://graph.instagram.com/v21.0";

const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 30;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.start > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { start: now, count: 1 });
    return false;
  }

  entry.count++;
  if (entry.count > MAX_REQUESTS) return true;
  return false;
}

const POST_FIELDS = [
  "id",
  "media_type",
  "media_url",
  "thumbnail_url",
  "caption",
  "timestamp",
  "permalink",
  "like_count",
  "comments_count",
].join(",");

const STORY_FIELDS = [
  "id",
  "media_type",
  "media_url",
  "timestamp",
  "permalink",
].join(",");

export default async function handler(req, res) {
  // Security headers
  const allowedOrigins = [
    "https://personal-portifolio-phi-eight.vercel.app",
    "https://gelsontn.github.io",
  ];
  const origin = req.headers.origin || "";
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const TOKEN = process.env.INSTAGRAM_TOKEN;
  const USER_ID = process.env.INSTAGRAM_USER_ID;

  if (!TOKEN || !USER_ID) {
    return res.status(500).json({ error: "Instagram não configurado" });
  }

  // Rate limiting
  const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Muitas requisições. Tente novamente em 1 minuto." });
  }

  try {
    const headers = { Authorization: `Bearer ${TOKEN}` };

    const [postsRes, storiesRes] = await Promise.allSettled([
      fetch(`${IG_API}/${USER_ID}/media?fields=${POST_FIELDS}&limit=20`, { headers }),
      fetch(`${IG_API}/${USER_ID}/stories?fields=${STORY_FIELDS}`, { headers }),
    ]);

    let posts = [];
    if (postsRes.status === "fulfilled" && postsRes.value.ok) {
      const data = await postsRes.value.json();
      posts = (data.data ?? []).map((p) => ({
        id:         `ig-${p.id}`,
        network:    "instagram",
        type:       "post",
        media_type: p.media_type,
        image:      p.media_url ?? p.thumbnail_url ?? null,
        text:       p.caption ?? null,
        date:       p.timestamp,
        likes:      p.like_count ?? 0,
        comments:   p.comments_count ?? 0,
        url:        p.permalink,
      }));
    }

    let stories = [];
    if (storiesRes.status === "fulfilled" && storiesRes.value.ok) {
      const data = await storiesRes.value.json();
      stories = (data.data ?? []).map((s) => ({
        id:         `ig-story-${s.id}`,
        network:    "instagram",
        type:       "story",
        media_type: s.media_type,
        image:      s.media_url ?? null,
        text:       null,
        date:       s.timestamp,
        likes:      0,
        comments:   0,
        url:        s.permalink ?? "https://instagram.com",
      }));
    }

    res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=1800");

    return res.status(200).json({
      posts: [...stories, ...posts],
      total: stories.length + posts.length,
    });

  } catch (error) {
    console.error("Instagram API error:", error.message);
    return res.status(500).json({ error: "Erro ao buscar posts do Instagram" });
  }
}
