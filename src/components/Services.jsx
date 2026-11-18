import { useState } from 'react';
import { services, site } from '../data/site.js';
import { Arrow } from './Hero.jsx';
import ServiceIcon from './ServiceIcon.jsx';

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative bg-paper py-24 md:py-36" aria-labelledby="services-title">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="reveal eyebrow">( 04 ) — Services</p>
            <h2 id="services-title" className="reveal display mt-6 text-[clamp(2.8rem,7vw,6.5rem)]">
              How I can <span className="serif-italic text-violet">help</span> your business.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <p className="reveal max-w-sm leading-relaxed text-muted">
              From a first logo to a complete web platform, every service is delivered with the same care for detail,
              clarity and craft.
            </p>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="reveal btn-ink mt-7">
              Start a project <Arrow />
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12">
          {/* Desktop: sticky image stage that follows the active service */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-32">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-ink shadow-[0_50px_90px_-50px_rgba(28,20,38,0.6)]">
                {services.map((s, i) => (
                  <img
                    key={s.title}
                    src={s.image}
                    alt={i === active ? s.alt : ''}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-[var(--ease-lux)] ${
                      i === active ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                    }`}
                  />
                ))}
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#140e1e]/90 via-[#140e1e]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-8 text-ivory">
                  <div>
                    <p className="eyebrow !text-[#c9b3ff]">Service {String(active + 1).padStart(2, '0')} / 06</p>
                    <p className="mt-2 font-serif text-3xl font-light leading-tight">{services[active].title}</p>
                  </div>
                  <ServiceIcon name={services[active].icon} className="h-10 w-10 shrink-0 text-[#c9b3ff]" />
                </div>
              </div>
            </div>
          </div>

          <ol className="lg:col-span-7 lg:pl-6">
            {services.map((s, i) => {
              const on = i === active;
              return (
                <li
                  key={s.title}
                  className="reveal group relative border-t border-line last:border-b"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  tabIndex={0}
                >
                  <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-4 py-8 sm:gap-x-8 md:py-10">
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-full border transition-all duration-700 ease-[var(--ease-lux)] ${
                        on ? 'border-violet bg-violet text-white lg:scale-105' : 'border-ink/15 text-ink'
                      }`}
                    >
                      <ServiceIcon name={s.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-serif text-sm italic text-violet tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                        <h3
                          className={`font-serif text-[clamp(1.5rem,2.6vw,2.3rem)] font-light leading-tight tracking-[-0.02em] transition-transform duration-700 ease-[var(--ease-lux)] ${
                            on ? 'lg:translate-x-2' : ''
                          }`}
                        >
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-3 max-w-lg leading-relaxed text-muted">{s.body}</p>
                    </div>
                    {/* Mobile/tablet: the service image sits inline */}
                    <figure className="col-span-2 overflow-hidden rounded-[10px] lg:hidden">
                      <img src={s.image} alt={s.alt} loading="lazy" className="aspect-[16/9] w-full object-cover" />
                    </figure>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-0 h-px bg-violet transition-[width] duration-700 ease-[var(--ease-lux)] ${
                      on ? 'w-full' : 'w-0'
                    }`}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
