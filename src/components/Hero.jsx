import { site, activeSocials } from '../data/site.js';
import { projects } from '../data/projects.js';

const Line = ({ children, d = 0, className = '' }) => (
  <span className={`mask-line ${className}`}>
    <span style={{ '--d': `${d}ms` }}>{children}</span>
  </span>
);

export default function Hero() {
  const featured = projects.find((p) => p.hero) ?? projects[0];
  const count = String(projects.length).padStart(2, '0');

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#07060a] text-ivory">
      {/* Background photograph */}
      <picture className="absolute inset-0 -z-20 lg:left-[22%] lg:right-[-8%]">
        <source media="(max-width: 767px)" srcSet="/images/hero-sm.webp" />
        <img
          src="/images/hero.webp"
          alt=""
          fetchpriority="high"
          decoding="async"
          className="hero-bg h-full w-full object-cover object-[62%_60%] md:object-[70%_55%]"
        />
      </picture>
      {/* Art-directed overlays: left-side shade for type, violet light, bottom fade */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07060a] via-[#07060a]/75 to-[#07060a]/10 max-md:bg-gradient-to-b max-md:via-[#07060a]/55 max-md:to-[#07060a]/85" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 mix-blend-screen"
        style={{ background: 'radial-gradient(60% 55% at 72% 62%, rgba(109,63,217,0.38), transparent 70%)' }}
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#07060a] to-transparent" />
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10 opacity-[0.07]" />

      <div className="wrap relative flex flex-1 flex-col pt-28 md:pt-32">
        <div className="reveal flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b9a0f5]/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b9a0f5]" />
          </span>
          <p className="eyebrow !text-ivory/70">Available for new projects — {site.location}</p>
        </div>

        <h1 className="mt-8 md:mt-6">
          <span className="sr-only">
            {site.brand} — {site.title}. {site.headline}
          </span>
          <span aria-hidden="true" className="display block text-[clamp(4rem,min(11vw,17vh),10.5rem)]">
            <Line d={100}>Betty</Line>
            <Line d={220} className="pl-[9vw] md:pl-[14vw]">
              <span className="serif-italic text-[#c9b3ff]">Empire</span>
              <span className="text-violet">.</span>
            </Line>
          </span>
        </h1>

        <div className="mt-10 grid flex-1 gap-10 pb-12 md:mt-8 lg:grid-cols-12 lg:items-end lg:pb-10">
          <div className="lg:col-span-6">
            <p className="reveal flex items-center gap-4" style={{ '--d': '300ms' }}>
              <span className="h-px w-10 bg-[#b9a0f5]" aria-hidden="true" />
              <span className="eyebrow !text-[#c9b3ff]">{site.title}</span>
            </p>
            <p
              className="reveal mt-5 max-w-xl font-serif text-[clamp(1.7rem,3.1vw,2.6rem)] font-light leading-[1.1] tracking-[-0.02em]"
              style={{ '--d': '380ms' }}
            >
              Building digital experiences that <em className="serif-italic text-[#c9b3ff]">move businesses</em> forward.
            </p>
            <p className="reveal mt-6 max-w-md text-[0.98rem] leading-relaxed text-ivory/70" style={{ '--d': '460ms' }}>
              I’m Bethel, the developer behind BETTY EMPIRE. I design and build modern, responsive websites and web
              applications — from brand-led business sites and online stores to full-stack products — that look
              refined, work beautifully on every device and help businesses grow online.
            </p>

            <div className="reveal mt-9 flex flex-wrap items-center gap-3" style={{ '--d': '540ms' }}>
              <a href="#work" className="btn bg-ivory text-ink hover:bg-[#c9b3ff]">
                View my work <Arrow />
              </a>
              <a href="#contact" className="btn border border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink">
                Contact me
              </a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn link-underline !px-2 text-ivory/85">
                Let’s work together
              </a>
            </div>
          </div>

          {/* Right column: brand line, live counter, featured work card */}
          <div className="flex flex-col gap-8 lg:col-span-5 lg:col-start-8 lg:items-end">
            <a
              href={featured.url}
              target="_blank"
              rel="noreferrer"
              className="reveal group hidden w-full max-w-[360px] items-center gap-4 rounded-[12px] border border-ivory/10 bg-ivory/[0.06] p-3 backdrop-blur-md transition-colors duration-500 hover:border-ivory/25 hover:bg-ivory/[0.1] md:flex"
              style={{ '--d': '700ms' }}
              aria-label={`Latest work: ${featured.name} — visit live website`}
            >
              <span className="block w-28 shrink-0 overflow-hidden rounded-[7px]">
                <img src={featured.image} alt="" className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block !text-ivory/50">Featured work</span>
                <span className="mt-1 block truncate font-serif text-xl">{featured.name}</span>
                <span className="mt-1 flex items-center gap-1.5 text-xs text-[#c9b3ff]">
                  Visit live website <Arrow className="!h-3 !w-3" />
                </span>
              </span>
            </a>
            <div className="reveal flex items-end gap-8 lg:text-right" style={{ '--d': '760ms' }}>
              <p>
                <span className="block font-serif text-5xl font-light leading-none">{count}</span>
                <span className="eyebrow mt-2 block !text-ivory/50">Live websites</span>
              </p>
              <p className="eyebrow !text-ivory/60 leading-relaxed">
                Design.
                <br />
                Develop.
                <br />
                <span className="text-[#c9b3ff]">Elevate.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom rail */}
        <div className="reveal flex items-center justify-between gap-4 border-t border-ivory/10 py-5" style={{ '--d': '820ms' }}>
          <a href="#work" className="eyebrow group flex items-center gap-3 !text-ivory/60 hover:!text-ivory">
            <span className="relative h-8 w-px overflow-hidden bg-ivory/20">
              <span className="scroll-cue absolute inset-x-0 top-0 h-3 bg-ivory" />
            </span>
            Scroll to explore
          </a>
          <ul className="flex flex-wrap justify-end gap-x-5 gap-y-1">
            {activeSocials.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noreferrer" className="eyebrow link-underline !text-ivory/60 hover:!text-ivory">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="eyebrow link-underline !text-ivory/60 hover:!text-ivory">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Arrow({ className = '' }) {
  return (
    <svg className={`h-3.5 w-3.5 ${className}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
