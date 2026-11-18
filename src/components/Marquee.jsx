const words = ['Design', 'Develop', 'Elevate', 'Websites', 'Web Apps', 'Branding', 'E-commerce', 'Full-Stack'];

export default function Marquee() {
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((w, i) => (
        <li key={w} className="flex items-center">
          <span className={`px-6 font-serif text-3xl font-light md:px-10 md:text-5xl ${i % 3 === 2 ? 'serif-italic text-[#b9a0f5]' : ''}`}>
            {w}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden border-b border-ivory/10 bg-[#07060a] py-6 text-ivory md:py-8" role="region" aria-label="What I do">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
