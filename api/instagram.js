// api/instagram.js

const IG_API   = "https://graph.instagram.com/v21.0";
const TOKEN    = process.env.INSTAGRAM_TOKEN;
const USER_ID  = process.env.INSTAGRAM_USER_ID;

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
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!TOKEN || !USER_ID) {
    return res.status(500).json({ error: "Instagram não configurado" });
  }

  try {
    const [postsRes, storiesRes] = await Promise.allSettled([
      fetch(`${IG_API}/${USER_ID}/media?fields=${POST_FIELDS}&limit=20&access_token=${TOKEN}`),
      fetch(`${IG_API}/${USER_ID}/stories?fields=${STORY_FIELDS}&access_token=${TOKEN}`),
    ]);

    let posts = [];
    if (postsRes.status === "fulfilled" && postsRes.value.ok) {
      const data = await postsRes.value.json();
      posts = (data.data ?? []).map((p) => ({
        id:             `ig-${p.id}`,
        network:        "instagram",
        type:           "post",
        media_type:     p.media_type,
        image:          p.media_url ?? p.thumbnail_url ?? null,
        text:           p.caption ?? null,
        date:           p.timestamp,
        likes:          p.like_count ?? 0,
        comments:       p.comments_count ?? 0,
        url:            p.permalink,
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
    console.error("Instagram API error:", error);
    return res.status(500).json({ error: "Erro ao buscar posts do Instagram" });
  }
}
