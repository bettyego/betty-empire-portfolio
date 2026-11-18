import { experience, education } from '../data/site.js';
import { Arrow } from './Hero.jsx';

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden bg-ivory py-24 md:py-36" aria-labelledby="journey-title">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-24 h-[34rem] w-[34rem] rounded-full opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(circle, #ece3fd 0%, rgba(250,247,242,0) 65%)' }}
      />
      <div className="wrap relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <p className="reveal eyebrow lg:col-span-4">( 05 ) — Journey</p>
          <h2 id="journey-title" className="reveal display text-[clamp(2.8rem,7vw,6.5rem)] lg:col-span-8">
            Experience <span className="serif-italic text-violet">&amp;</span> education.
          </h2>
        </div>

        {/* Experience — editorial ledger */}
        <div className="mt-16 md:mt-24">
          <div className="reveal flex items-center gap-4">
            <h3 className="eyebrow !text-ink">Experience</h3>
            <span className="h-px flex-1 bg-ink/15" aria-hidden="true" />
            <span className="font-serif text-sm italic text-violet">{String(experience.length).padStart(2, '0')}</span>
          </div>
          <ol>
            {experience.map((e, i) => (
              <li key={e.org} className="reveal group relative grid gap-6 border-b border-ink/10 py-12 md:grid-cols-12 md:gap-10 md:py-14">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-0 bg-violet transition-[width] duration-1000 ease-[var(--ease-lux)] group-hover:w-full"
                />
                <div className="md:col-span-3">
                  <p className="display text-6xl text-ink/10 transition-colors duration-700 group-hover:text-violet/25 md:text-7xl">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-3 font-serif text-base italic text-violet">{e.period}</p>
                </div>
                <div className="md:col-span-4">
                  <p className="font-serif text-[clamp(1.6rem,2.4vw,2.1rem)] font-light leading-tight tracking-[-0.02em]">{e.role}</p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-charcoal">{e.org}</p>
                  {e.link && (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium hover:border-violet hover:text-violet"
                    >
                      View the website <Arrow />
                    </a>
                  )}
                </div>
                <ul className="space-y-3 md:col-span-5">
                  {e.points.map((p) => (
                    <li key={p} className="relative pl-6 text-[0.95rem] leading-relaxed text-muted">
                      <span className="absolute left-0 top-[0.72em] h-px w-3 bg-violet" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        {/* Education — horizontal timeline on desktop, vertical on mobile */}
        <div className="mt-24 md:mt-32">
          <div className="reveal flex items-center gap-4">
            <h3 className="eyebrow !text-ink">Education &amp; certifications</h3>
            <span className="h-px flex-1 bg-ink/15" aria-hidden="true" />
          </div>
          <ol className="relative mt-12 grid gap-10 border-l border-ink/15 pl-8 md:grid-cols-5 md:gap-6 md:border-l-0 md:border-t md:pl-0 md:pt-10">
            {education.map((ed, i) => (
              <li key={ed.title} className="reveal relative" style={{ '--d': `${i * 90}ms` }}>
                <span
                  aria-hidden="true"
                  className={`absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-ivory md:-top-[45px] md:left-0 ${
                    ed.kind === 'Degree' ? 'bg-violet' : 'bg-ink'
                  }`}
                />
                <p className="font-serif text-base italic text-violet">{ed.year}</p>
                <p className="mt-3 font-serif text-[1.4rem] font-light leading-snug tracking-[-0.01em]">{ed.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{ed.org}</p>
                <span className="mt-4 inline-block rounded-full border border-ink/15 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                  {ed.kind}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
