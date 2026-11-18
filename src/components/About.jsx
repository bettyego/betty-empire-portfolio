import { site } from '../data/site.js';

const facts = [
  { k: 'Name', v: 'Onuoha-mba Bethel Nwakaego' },
  { k: 'Studio', v: 'BETTY EMPIRE' },
  { k: 'Role', v: 'Full-Stack Developer' },
  { k: 'Based in', v: 'Abuja, Nigeria — working remotely worldwide' },
  { k: 'Languages', v: 'English, Igbo' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#faf7f2_0%,#f4eee6_100%)] py-24 md:py-36"
      aria-labelledby="about-title"
    >
      {/* Oversized background word */}
      <p
        aria-hidden="true"
        className="display pointer-events-none absolute -right-6 top-10 select-none whitespace-nowrap text-[28vw] leading-none text-ink/[0.035] lg:text-[20vw]"
      >
        About
      </p>

      <div className="wrap relative grid gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Layered image composition */}
        <div className="lg:col-span-5">
          <p className="reveal eyebrow">( 02 ) — About</p>
          <div className="relative mt-10 pb-20 pr-10 sm:pr-24 lg:sticky lg:top-28">
            <figure className="reveal overflow-hidden rounded-[12px] shadow-[0_50px_90px_-50px_rgba(28,20,38,0.55)]">
              <img
                src="/images/about.webp"
                srcSet="/images/about-sm.webp 900w, /images/about.webp 1600w"
                sizes="(min-width: 1024px) 34vw, 90vw"
                alt="A laptop with code open on a desk in warm afternoon light"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-[78%_center]"
              />
            </figure>
            <figure
              className="reveal absolute bottom-0 right-0 w-[52%] overflow-hidden rounded-[10px] border-[6px] border-ivory shadow-[0_30px_60px_-30px_rgba(28,20,38,0.5)]"
              style={{ '--d': '200ms' }}
            >
              <img
                src="/images/about-detail.webp"
                alt="Hand-drawn website wireframes in violet ink"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
            <div
              className="reveal absolute -left-3 top-8 rounded-full bg-ink px-4 py-2.5 text-ivory shadow-lg sm:-left-6"
              style={{ '--d': '300ms' }}
            >
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em]">
                Sketch <span className="text-[#c9b3ff]">→</span> Code <span className="text-[#c9b3ff]">→</span> Live
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-6">
          <h2 id="about-title" className="reveal font-serif text-[clamp(2rem,4.2vw,3.6rem)] font-light leading-[1.1] tracking-[-0.02em] lg:mt-16">
            I’m Bethel — a developer who believes a website should be as{' '}
            <em className="serif-italic text-violet">considered</em> as the business behind it.
          </h2>

          <div className="mt-12 grid gap-8 text-[1rem] leading-relaxed text-charcoal md:grid-cols-2 md:gap-10">
            <p className="reveal">
              I’m Onuoha-mba Bethel Nwakaego, the Full-Stack Developer behind {site.brand}. I build websites, digital
              solutions and online experiences for businesses and organisations — taking an idea from first sketch to
              a fast, responsive, live product that people genuinely enjoy using.
            </p>
            <p className="reveal" style={{ '--d': '120ms' }}>
              My path into technology is a little unconventional. A degree in History and Strategic Studies taught me
              to research deeply and think in systems; training in Project Management and Customer Service Management
              taught me to plan carefully, communicate clearly and always design around the people on the other side
              of the screen.
            </p>
          </div>

          <blockquote className="reveal relative mt-12 border-l-2 border-violet py-1 pl-6 md:pl-8">
            <p className="font-serif text-[clamp(1.3rem,2.2vw,1.75rem)] font-light italic leading-snug text-ink">
              Today I bring those together with React, JavaScript, Tailwind CSS and Flask. I’m drawn to web
              development, digital products and creative design — and above all to solving real business problems
              with technology that looks beautiful and works hard.
            </p>
          </blockquote>

          <dl className="reveal mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {facts.map((f) => (
              <div key={f.k} className="group grid grid-cols-[7.5rem_1fr] gap-4 py-4 sm:grid-cols-[10rem_1fr]">
                <dt className="eyebrow pt-0.5 transition-colors group-hover:text-violet">{f.k}</dt>
                <dd className="text-[0.95rem]">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
