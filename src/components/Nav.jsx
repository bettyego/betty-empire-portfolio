import { useEffect, useState } from 'react';
import { navLinks, site, activeSocials } from '../data/site.js';
import Logo from './Logo.jsx';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Over the dark hero the nav is light; once scrolled (or menu open) it turns ink-on-ivory.
  const dark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-lux)] ${
        scrolled && !open ? 'border-b border-line/70 bg-ivory/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-20">
        <a href="#top" aria-label={`${site.brand} — back to top`} className="relative z-[60]" onClick={() => setOpen(false)}>
          <Logo light={dark} />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`link-underline text-[0.8rem] font-medium tracking-wide transition-colors duration-500 ${
                    dark ? 'text-ivory/80 hover:text-ivory' : 'text-charcoal hover:text-ink'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={`btn hidden !px-5 !py-2.5 text-[0.78rem] sm:inline-flex ${
              dark ? 'bg-ivory text-ink hover:bg-[#c9b3ff]' : 'bg-ink text-ivory hover:bg-violet'
            }`}
          >
            Let’s work together
          </a>
          <button
            type="button"
            className={`relative z-[60] grid h-11 w-11 place-items-center rounded-full border transition-colors duration-500 lg:hidden ${
              dark ? 'border-ivory/30 [&_span_span]:bg-ivory' : 'border-ink/15'
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-px w-5 bg-ink transition-all duration-500 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 h-px w-5 bg-ink transition-all duration-500 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex flex-col bg-ivory transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="wrap flex flex-1 flex-col justify-center pt-16">
          <ul className="space-y-1">
            {navLinks.map((l, i) => (
              <li key={l.href} className="overflow-hidden">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-4 py-1.5 transition-transform duration-700 ease-[var(--ease-lux)] ${
                    open ? 'translate-y-0' : 'translate-y-full'
                  }`}
                  style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
                >
                  <span className="eyebrow w-6 tabular-nums">0{i + 1}</span>
                  <span className="display text-[2.8rem] sm:text-6xl">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="wrap flex flex-wrap items-end justify-between gap-4 border-t border-line py-6">
          <div>
            <p className="eyebrow">Based in</p>
            <p className="mt-1 text-sm">{site.location}</p>
          </div>
          <ul className="flex gap-4 text-sm">
            {activeSocials.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noreferrer" className="link-underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
