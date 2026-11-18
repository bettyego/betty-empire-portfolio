import { skills, capabilities } from '../data/site.js';

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="parallax relative isolate overflow-hidden bg-plum bg-cover bg-center py-24 text-ivory md:py-36"
      style={{ backgroundImage: 'url(/images/expertise.webp)' }}
      aria-labelledby="expertise-title"
    >
      {/* Deep plum overlay keeps the code photograph as texture, never competing with type */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,14,30,0.94)_0%,rgba(28,20,38,0.88)_45%,rgba(20,14,30,0.97)_100%)]" />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/3 -z-10 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(109,63,217,0.35), transparent 65%)' }}
      />
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12">
          <p className="reveal eyebrow !text-[#b9a0f5] lg:col-span-4">( 03 ) — Expertise</p>
          <h2 id="expertise-title" className="reveal display text-[clamp(2.8rem,7vw,6.5rem)] lg:col-span-8">
            The <span className="serif-italic text-[#b9a0f5]">toolkit</span> behind the work.
          </h2>
        </div>

        {/* Stack groups */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-[10px] bg-ivory/10 md:mt-24 md:grid-cols-3">
          {skills.map((g, gi) => (
            <div key={g.group} className="reveal bg-[#1a1324]/80 p-7 backdrop-blur-sm transition-colors duration-700 hover:bg-[#241a33]/85 md:p-10" style={{ '--d': `${gi * 100}ms` }}>
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-3xl font-light md:text-4xl">{g.group}</h3>
                <span className="font-serif text-sm italic text-[#b9a0f5]">0{gi + 1}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ivory/60">{g.note}</p>
              <ul className="mt-8 space-y-0">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="group flex items-center justify-between border-t border-ivory/10 py-3.5 text-[1.05rem] transition-colors hover:text-[#cdb8ff]"
                  >
                    {s}
                    <span className="h-1.5 w-1.5 rounded-full bg-ivory/20 transition-colors group-hover:bg-[#b9a0f5]" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Capabilities as editorial type list */}
        <div className="mt-20 md:mt-28">
          <p className="reveal eyebrow !text-ivory/50">What that adds up to</p>
          <ul className="mt-6">
            {capabilities.map((c, i) => (
              <li key={c} className="reveal border-b border-ivory/10" style={{ '--d': `${i * 60}ms` }}>
                <div className="group flex items-baseline gap-5 py-5 md:gap-10 md:py-6">
                  <span className="w-8 font-serif text-sm italic text-[#b9a0f5] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-serif text-[clamp(1.6rem,4.2vw,3.4rem)] font-light leading-none tracking-[-0.02em] transition-transform duration-700 ease-[var(--ease-lux)] group-hover:translate-x-3">
                    {c}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
