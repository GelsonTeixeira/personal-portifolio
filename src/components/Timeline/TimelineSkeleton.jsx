export default function TimelineSkeleton() {
  return (
    <div className="timeline-card timeline-skeleton">
      <div className="timeline-skeleton-body">
        <div className="timeline-skeleton-meta">
          <span className="timeline-skeleton-bar skeleton-sm" />
          <span className="timeline-skeleton-bar skeleton-sm" />
        </div>
        <div className="timeline-skeleton-bar skeleton-lg" />
        <div className="timeline-skeleton-bar skeleton-lg" />
        <div className="timeline-skeleton-bar skeleton-md" />
        <div className="timeline-skeleton-tags">
          <span className="timeline-skeleton-bar skeleton-tag" />
          <span className="timeline-skeleton-bar skeleton-tag" />
          <span className="timeline-skeleton-bar skeleton-tag" />
        </div>
      </div>
    </div>
  );
}
