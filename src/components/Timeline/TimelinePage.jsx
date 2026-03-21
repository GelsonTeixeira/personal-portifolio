import { useTimeline } from "../../hooks/useTimeline";
import TimelineCard from "./TimelineCard";
import TimelineSkeleton from "./TimelineSkeleton";
import "./timeline.css";

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LiIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FILTERS = [
  { key: "all", label: "Todos", icon: null },
  { key: "instagram", label: "Instagram", icon: <IgIcon /> },
  { key: "linkedin", label: "LinkedIn", icon: <LiIcon /> },
];

export default function TimelinePage() {
  const { posts, loading, error, filter, setFilter, counts } = useTimeline();

  return (
    <div className="timeline-page">
      <div className="timeline-header">
        <h1 className="timeline-title">
          Time<span className="gradient-text">line</span>
        </h1>
        <p className="timeline-subtitle">
          Acompanhe minhas publicacoes e atividade nas redes sociais
        </p>

        <div className="timeline-filters">
          {FILTERS.map(({ key, label, icon }) => (
            <button
              key={key}
              className={`timeline-pill ${filter === key ? "timeline-pill-active" : ""} timeline-pill-${key}`}
              onClick={() => setFilter(key)}
            >
              {icon && <span className="timeline-pill-icon">{icon}</span>}
              {label}
              {counts[key] > 0 && (
                <span
                  className={`timeline-badge ${filter === key ? "timeline-badge-active" : ""}`}
                >
                  {counts[key]}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="timeline-content">
        {loading && (
          <div className="timeline-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <TimelineSkeleton key={i} />
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="timeline-empty">
            <div className="timeline-empty-icon">&#128237;</div>
            <p>Nenhuma publicacao encontrada.</p>
          </div>
        )}

        {!loading && posts.length > 0 && (
          <div className="timeline-grid">
            {posts.map((post) => (
              <TimelineCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {error && !loading && filter !== "linkedin" && (
          <div className="timeline-error">
            Posts do Instagram temporariamente indisponiveis.
          </div>
        )}
      </div>
    </div>
  );
}
