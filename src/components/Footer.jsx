import { navLinks, site, activeSocials } from '../data/site.js';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-[#0b0810] pt-20 text-ivory">
      <div className="wrap">
        <div className="grid gap-12 border-b border-ivory/10 pb-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <Logo light />
            <p className="mt-8 font-serif text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.05] tracking-[-0.02em]">
              Design. Develop. <span className="serif-italic text-[#b9a0f5]">Elevate.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/55">{site.headline}</p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow !text-ivory/40">Navigate</p>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline text-sm text-ivory/80 hover:text-ivory">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="eyebrow !text-ivory/40">Connect</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {activeSocials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="link-underline text-ivory/80 hover:text-ivory">
                    {s.label} ↗
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="link-underline text-ivory/80 hover:text-ivory">
                  Email ↗
                </a>
              </li>
              <li className="pt-2 text-ivory/50">{site.location}</li>
            </ul>
          </div>
        </div>

        <p aria-hidden="true" className="display select-none overflow-hidden whitespace-nowrap pt-10 text-center text-[17.5vw] leading-[0.8] text-ivory/[0.06]">
          Betty Empire
        </p>

        <div className="flex flex-col gap-3 py-8 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BETTY EMPIRE. All rights reserved.</p>
          <a href="#top" className="link-underline self-start sm:self-auto">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
