import BrowserFrame from './BrowserFrame.jsx';
import PhoneFrame from './PhoneFrame.jsx';
import Shot from './Shot.jsx';
import { Arrow } from './Hero.jsx';

const SPAN = {
  feature: 'md:col-span-12',
  wide: 'md:col-span-7',
  narrow: 'md:col-span-5 md:mt-40',
  'narrow-left': 'md:col-span-5',
  third: 'md:col-span-6 lg:col-span-4',
};

const host = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
const num = (n) => String(n).padStart(2, '0');

function Meta({ project, index }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-serif text-sm italic text-violet tabular-nums">{num(index)}</span>
      <span className="h-px w-6 bg-line" aria-hidden="true" />
      <span className="eyebrow">{project.category}</span>
      {project.year && <span className="eyebrow ml-auto">{project.year}</span>}
    </div>
  );
}

/** Caption quoting the live site's own headline — always real content, never filler. */
function Caption({ project }) {
  if (!project.caption) return null;
  return (
    <p className="mt-3 flex gap-2 text-[0.78rem] leading-snug text-muted">
      <span className="shrink-0 font-medium text-ink/70">On the homepage —</span>
      <span className="italic">“{project.caption}”</span>
    </p>
  );
}

function Tech({ tech }) {
  if (!tech?.length) return null;
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
      {tech.map((t) => (
        <li key={t} className="rounded-full border border-violet/15 bg-lilac/70 px-2.5 py-1 text-[0.68rem] font-medium tracking-wide text-violet-deep">
          {t}
        </li>
      ))}
    </ul>
  );
}

function VisitLink({ project, large = false }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className={`group/link mt-6 inline-flex items-center gap-3 whitespace-nowrap border-b border-ink pb-1.5 font-medium text-ink transition-colors hover:border-violet hover:text-violet ${
        large ? 'text-base' : 'text-sm'
      }`}
      aria-label={`Visit ${project.name} live website (opens in a new tab)`}
    >
      Visit live website
      <Arrow className="transition-transform duration-500 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
      <span className={`hidden font-normal text-muted ${large ? 'sm:inline' : 'xl:inline'}`}>— {host(project.url)}</span>
    </a>
  );
}

/** Clickable screenshot with category label and a violet hover veil. */
function ImageLink({ project, index, children, className = '', label = true }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      tabIndex={-1}
      aria-hidden="true"
      className={`shot group/img relative block ${className}`}
    >
      {children}
      {label && (
        <span className="pointer-events-none absolute bottom-3 left-3 z-10 sm:bottom-4 flex items-center gap-2 rounded-full bg-ink/85 px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-ivory backdrop-blur-sm sm:left-4">
          <span className="font-serif text-[0.75rem] normal-case italic tracking-normal text-[#c9b3ff]">{num(index)}</span>
          {project.category}
        </span>
      )}
      <span className="pointer-events-none absolute inset-0 z-10 grid place-items-center rounded-[10px] bg-[radial-gradient(circle_at_center,rgba(74,34,153,0.55),rgba(20,14,30,0.35))] opacity-0 transition-opacity duration-700 group-hover/img:opacity-100">
        <span className="flex translate-y-3 items-center gap-2 rounded-full bg-ivory px-5 py-3 text-sm font-medium text-ink shadow-xl transition-transform duration-700 ease-[var(--ease-lux)] group-hover/img:translate-y-0">
          Visit live site <Arrow />
        </span>
      </span>
    </a>
  );
}

export default function ProjectCard({ project, layout, index }) {
  if (layout === 'feature') {
    return (
      <article className={`reveal ${SPAN.feature} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
        <div className="relative lg:col-span-8">
          {/* soft violet halo behind the featured frame */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-0 rounded-[24px] opacity-80 blur-2xl"
            style={{ background: 'radial-gradient(60% 60% at 40% 50%, #ece3fd, transparent 70%)' }}
          />
          <div className="relative">
            <ImageLink project={project} index={index}>
              <BrowserFrame src={project.image} alt={`${project.name} website homepage`} url={project.url} />
            </ImageLink>
            {project.mobileImage && (
              <ImageLink
                project={project}
                index={index}
                label={false}
                className="!absolute -bottom-10 right-2 w-[26%] max-w-[170px] sm:-right-6 lg:-right-10"
              >
                <PhoneFrame src={project.mobileImage} alt={`${project.name} on mobile`} />
              </ImageLink>
            )}
          </div>
          <Caption project={project} />
        </div>
        <div className="flex flex-col justify-end lg:col-span-4 lg:pb-4">
          <p className="eyebrow mb-6 !text-violet">Featured project</p>
          <Meta project={project} index={index} />
          <h3 className="display mt-5 text-[clamp(2.6rem,5vw,4.6rem)]">{project.name}</h3>
          <p className="mt-5 max-w-sm leading-relaxed text-muted">{project.description}</p>
          <Tech tech={project.tech} />
          <div>
            <VisitLink project={project} large />
          </div>
        </div>
      </article>
    );
  }

  const framed = layout === 'wide';
  return (
    <article className={`reveal ${SPAN[layout]} flex flex-col`}>
      <ImageLink project={project} index={index}>
        {framed ? (
          <BrowserFrame src={project.image} alt={`${project.name} website homepage`} url={project.url} />
        ) : (
          <div className="overflow-hidden rounded-[10px] border border-ink/10 bg-paper pt-8 shadow-[0_30px_60px_-40px_rgba(28,20,38,0.45)]">
            {/* slim top bar keeps the label clear of the screenshot */}
            <span aria-hidden="true" className="absolute inset-x-0 top-0 flex h-8 items-center justify-end gap-1.5 px-3">
              <i className="h-1.5 w-1.5 rounded-full bg-ink/15" />
              <i className="h-1.5 w-1.5 rounded-full bg-ink/15" />
              <i className="h-1.5 w-1.5 rounded-full bg-ink/15" />
            </span>
            <Shot src={project.image} alt={`${project.name} website homepage`} ratio={layout === 'third' ? '4 / 3' : '4 / 3.4'} />
          </div>
        )}
      </ImageLink>
      <Caption project={project} />
      <div className="mt-6 flex flex-1 flex-col">
        <Meta project={project} index={index} />
        <h3 className="display mt-3 text-[clamp(2rem,3.4vw,3rem)]">{project.name}</h3>
        <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-muted">{project.description}</p>
        <Tech tech={project.tech} />
        <div>
          <VisitLink project={project} />
        </div>
      </div>
    </article>
  );
}
