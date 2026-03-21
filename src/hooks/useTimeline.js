import { useState, useEffect, useMemo } from "react";
import linkedinPosts from "../data/linkedin-posts.json";

function applyFilter(posts, filter) {
  if (filter === "all") return posts;
  return posts.filter((p) => p.network === filter);
}

export function useTimeline() {
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchInstagram() {
      try {
        setLoading(true);
        const res = await fetch("/api/instagram");

        if (!res.ok) throw new Error("Instagram indisponivel");

        const data = await res.json();
        setInstagramPosts(data.posts ?? []);
      } catch (err) {
        console.warn("Instagram feed:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchInstagram();
  }, []);

  const allPosts = useMemo(() => {
    const merged = [...instagramPosts, ...linkedinPosts];
    return merged.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [instagramPosts]);

  const filteredPosts = useMemo(
    () => applyFilter(allPosts, filter),
    [allPosts, filter]
  );

  const counts = useMemo(
    () => ({
      all: allPosts.length,
      instagram: allPosts.filter((p) => p.network === "instagram").length,
      linkedin: allPosts.filter((p) => p.network === "linkedin").length,
    }),
    [allPosts]
  );

  return {
    posts: filteredPosts,
    loading,
    error,
    filter,
    setFilter,
    counts,
  };
}
