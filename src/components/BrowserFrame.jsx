import Shot from './Shot.jsx';

/** A quiet, minimal browser chrome around a website screenshot. */
export default function BrowserFrame({ src, alt, url, eager = false, className = '' }) {
  const host = url ? url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : '';
  return (
    <div
      className={`overflow-hidden rounded-[10px] border border-ink/10 bg-paper shadow-[0_40px_80px_-40px_rgba(28,20,38,0.35)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-ink/[0.07] bg-sand/60 px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2 w-2 rounded-full bg-ink/15" />
          <i className="h-2 w-2 rounded-full bg-ink/15" />
          <i className="h-2 w-2 rounded-full bg-ink/15" />
        </span>
        <span className="mx-auto truncate rounded-full bg-paper px-4 py-0.5 text-[0.68rem] tracking-wide text-muted">{host}</span>
        <span className="w-8" aria-hidden="true" />
      </div>
      <div className="overflow-hidden">
        <Shot src={src} alt={alt} eager={eager} ratio="16 / 10" />
      </div>
    </div>
  );
}
