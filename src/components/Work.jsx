import { useMemo, useState } from 'react';
import { projects, categories } from '../data/projects.js';
import { useReveal } from '../hooks/useReveal.js';
import ProjectCard from './ProjectCard.jsx';

/**
 * Editorial rhythm: each project takes a layout from this sequence,
 * so the gallery alternates between feature spreads, asymmetric pairs
 * and trios — never a uniform grid.
 *   feature = full-width spread   wide = 7/12   narrow = 5/12   third = 4/12
 */
const RHYTHM = ['feature', 'wide', 'narrow', 'third', 'third', 'third', 'narrow-left', 'wide'];

export default function Work() {
  const [active, setActive] = useState('All');
  const list = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  );
  useReveal([active]);

  const filters = [{ name: 'All', count: projects.length }, ...categories];

  return (
    <section id="work" className="relative overflow-hidden bg-paper py-24 md:py-36" aria-labelledby="work-title">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-60 -top-40 h-[44rem] w-[44rem] rounded-full opacity-80 blur-3xl"
        style={{ background: 'radial-gradient(circle, #efe7fd 0%, rgba(255,255,255,0) 65%)' }}
      />
      <p
        aria-hidden="true"
        className="display pointer-events-none absolute right-[-2vw] top-16 select-none whitespace-nowrap text-[24vw] leading-none text-transparent md:top-10"
        style={{ WebkitTextStroke: '1px rgba(109,63,217,0.12)' }}
      >
        Selected
      </p>
      <div className="wrap relative">
        <div className="grid gap-10 border-b border-line pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="reveal eyebrow">( 01 ) — Selected work</p>
            <h2 id="work-title" className="reveal display mt-5 text-[clamp(3.2rem,9vw,8.5rem)]">
              The <span className="serif-italic text-violet">portfolio</span>
              <sup className="ml-2 align-super font-sans text-base font-medium tracking-normal text-muted md:text-xl">
                ({String(projects.length).padStart(2, '0')})
              </sup>
            </h2>
          </div>
          <p className="reveal max-w-md text-[0.98rem] leading-relaxed text-muted lg:col-span-5 lg:justify-self-end">
            Sixteen live websites designed and built for real businesses, brands and ideas — from luxury e-commerce
            and real estate to banking, hospitality and personal brands. Click any preview to explore the live site.
          </p>
        </div>

        {/* Filters */}
        <div className="sticky top-16 z-30 -mx-5 mt-8 bg-paper/90 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8 md:top-20 lg:-mx-12 lg:px-12">
          <div
            role="toolbar"
            aria-label="Filter projects by category"
            className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filters.map((f) => {
              const on = active === f.name;
              return (
                <button
                  key={f.name}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(f.name)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-[0.78rem] font-medium tracking-wide transition-all duration-500 ${
                    on ? 'border-ink bg-ink text-ivory' : 'border-line text-charcoal hover:border-ink/50'
                  }`}
                >
                  {f.name}
                  <span className={`ml-1.5 tabular-nums ${on ? 'text-[#b9a0f5]' : 'text-muted'}`}>{f.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {list.length} {list.length === 1 ? 'project' : 'projects'}
          {active !== 'All' ? ` in ${active}` : ''}.
        </p>

        <div key={active} className="mt-12 grid grid-cols-1 gap-x-8 gap-y-20 md:mt-16 md:grid-cols-12 md:gap-y-28 lg:gap-x-12">
          {list.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              layout={list.length <= 2 ? 'feature' : RHYTHM[i % RHYTHM.length]}
              index={projects.indexOf(p) + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
