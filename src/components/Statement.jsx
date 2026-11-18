/** Full-width visual moment carrying the brand promise between Services and Journey. */
export default function Statement() {
  return (
    <section
      aria-label="Design. Develop. Elevate."
      className="parallax relative isolate flex min-h-[70svh] items-center overflow-hidden bg-ink bg-cover bg-center py-24 text-ivory md:min-h-[80vh]"
      style={{ backgroundImage: 'url(/images/band.webp)' }}
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(10,7,16,0.92)_0%,rgba(28,20,38,0.8)_45%,rgba(52,24,108,0.66)_100%)]" />
      <div className="wrap">
        <p className="reveal eyebrow !text-[#c9b3ff]">The BETTY EMPIRE process</p>
        <ol className="mt-8 space-y-1 md:mt-10">
          {[
            ['Design.', 'Strategy, structure and a visual direction made for your audience.'],
            ['Develop.', 'Clean, responsive code that brings every detail to life.'],
            ['Elevate.', 'A launch that lifts your brand — and support as it grows.'],
          ].map(([word, note], i) => (
            <li
              key={word}
              className="reveal grid items-baseline gap-x-10 gap-y-2 border-b border-ivory/10 py-4 md:grid-cols-[1fr_22rem] md:py-6"
              style={{ '--d': `${i * 140}ms` }}
            >
              <span
                className={`display text-[clamp(3.4rem,11vw,9.5rem)] ${i === 2 ? 'serif-italic text-[#c9b3ff]' : ''}`}
                style={{ paddingLeft: `${i * 8}vw` }}
              >
                {word}
              </span>
              <span className="max-w-xs text-sm leading-relaxed text-ivory/65 md:justify-self-end">{note}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
