import { useState } from 'react';
import { site, activeSocials, services } from '../data/site.js';
import { Arrow } from './Hero.jsx';

const empty = { name: '', email: '', type: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState('');

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Please tell me your name.';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) er.email = 'That email doesn’t look quite right.';
    if (form.message.trim().length < 10) er.message = 'A short description of your project helps (10+ characters).';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const compose = () =>
    [
      `Hello BETTY EMPIRE, my name is ${form.name.trim()}.`,
      form.type && `I'm interested in: ${form.type}.`,
      '',
      form.message.trim(),
      form.email && `\nYou can reach me at ${form.email.trim()}.`,
    ]
      .filter((l) => l !== false && l !== undefined)
      .join('\n');

  const send = (via) => (e) => {
    e.preventDefault();
    if (!validate()) return;
    const text = compose();
    const url =
      via === 'whatsapp'
        ? `${site.whatsapp}?text=${encodeURIComponent(text)}`
        : `mailto:${site.email}?subject=${encodeURIComponent(`New project enquiry — ${form.name.trim()}`)}&body=${encodeURIComponent(text)}`;
    window.open(url, via === 'whatsapp' ? '_blank' : '_self', 'noopener');
    setSent(via);
    setForm(empty);
  };

  const field =
    'peer w-full border-0 border-b border-ivory/25 bg-transparent px-0 pb-3 pt-6 text-[1rem] text-ivory outline-none transition-colors placeholder:text-transparent focus:border-[#c9b3ff] focus:ring-0';
  const label =
    'pointer-events-none absolute left-0 top-6 origin-left text-[0.95rem] text-ivory/55 transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.7rem] peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-[#c9b3ff] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.2em]';

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#120c1c] py-24 text-ivory md:py-36"
      aria-labelledby="contact-title"
    >
      <picture className="absolute inset-0 -z-20">
        <source media="(max-width: 767px)" srcSet="/images/contact-sm.webp" />
        <img src="/images/contact.webp" alt="" loading="lazy" className="h-full w-full object-cover object-[60%_50%]" />
      </picture>
      {/* Overlay: calms the magenta core into the brand's violet and keeps copy legible */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(14,9,22,0.95)_0%,rgba(20,12,34,0.82)_45%,rgba(40,18,80,0.55)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#3b1d7a]/20 mix-blend-color" />
      <div className="wrap relative">
        <p className="reveal eyebrow !text-[#c9b3ff]">( 06 ) — Contact</p>
        <h2 id="contact-title" className="reveal display mt-6 text-[clamp(3.2rem,10vw,9.5rem)]">
          Let’s build something
          <br />
          <span className="serif-italic text-[#c9b3ff]">meaningful</span> together.
        </h2>

        <div className="mt-16 grid gap-16 md:mt-24 lg:grid-cols-12 lg:gap-12">
          {/* Details */}
          <div className="lg:col-span-5">
            <p className="reveal max-w-md text-[1.05rem] leading-relaxed text-ivory/75">
              Whether you need a new website, a redesign, a full-stack build or a brand identity — or you’re an
              employer or collaborator with something exciting — I’d love to hear about it.
            </p>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="reveal group mt-10 flex items-center justify-between gap-4 rounded-[12px] bg-ivory p-6 text-ink transition-colors duration-500 hover:bg-[#c9b3ff]"
            >
              <span>
                <span className="eyebrow">Chat on WhatsApp</span>
                <span className="mt-1 block font-serif text-3xl font-light">{site.phoneDisplay}</span>
              </span>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-ivory transition-transform duration-500 group-hover:rotate-45">
                <Arrow />
              </span>
            </a>

            <dl className="reveal mt-10 space-y-6">
              <div>
                <dt className="eyebrow !text-ivory/45">Email</dt>
                <dd className="mt-1.5 break-all">
                  <a href={`mailto:${site.email}`} className="link-underline text-[1.05rem]">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="eyebrow !text-ivory/45">Location</dt>
                  <dd className="mt-1.5">{site.location}</dd>
                </div>
                <div>
                  <dt className="eyebrow !text-ivory/45">Business hours</dt>
                  <dd className="mt-1.5">{site.hours}</dd>
                </div>
              </div>
              {activeSocials.length > 0 && (
                <div>
                  <dt className="eyebrow !text-ivory/45">Elsewhere</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {activeSocials.map((s) => (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-ivory/20 px-4 py-2 text-sm transition-colors hover:border-ivory hover:bg-ivory hover:text-ink"
                      >
                        {s.label}
                      </a>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Form */}
          <form
            noValidate
            onSubmit={send('whatsapp')}
            className="reveal rounded-[14px] border border-ivory/12 bg-white/[0.06] p-6 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-10 lg:col-span-7"
            aria-describedby="form-note"
          >
            <p className="font-serif text-2xl font-light">Tell me about your project</p>
            <p id="form-note" className="mt-2 text-sm text-ivory/55">
              Your message opens ready to send in WhatsApp or your email app.
            </p>

            <div className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              <div className="relative">
                <input id="c-name" className={field} placeholder="Your name" value={form.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} />
                <label htmlFor="c-name" className={label}>Your name *</label>
                {errors.name && <p id="e-name" className="mt-2 text-xs text-[#f0b4ff]">{errors.name}</p>}
              </div>
              <div className="relative">
                <input id="c-email" type="email" className={field} placeholder="Email" value={form.email} onChange={set('email')} autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'e-email' : undefined} />
                <label htmlFor="c-email" className={label}>Email (optional)</label>
                {errors.email && <p id="e-email" className="mt-2 text-xs text-[#f0b4ff]">{errors.email}</p>}
              </div>
            </div>

            <fieldset className="mt-8">
              <legend className="eyebrow !text-ivory/55">I’m interested in</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {[...services.map((s) => s.title), 'Something else'].map((t) => (
                  <label key={t} className="cursor-pointer">
                    <input type="radio" name="type" value={t} checked={form.type === t} onChange={set('type')} className="peer sr-only" />
                    <span className="block rounded-full border border-ivory/20 px-3.5 py-2 text-[0.8rem] text-ivory/85 transition-colors peer-checked:border-[#c9b3ff] peer-checked:bg-[#c9b3ff] peer-checked:text-ink peer-focus-visible:outline-2 peer-focus-visible:outline-[#c9b3ff] hover:border-ivory/60">
                      {t}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="relative mt-6">
              <textarea id="c-msg" rows={4} className={`${field} resize-none`} placeholder="Message" value={form.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'e-msg' : undefined} />
              <label htmlFor="c-msg" className={label}>About your project *</label>
              {errors.message && <p id="e-msg" className="mt-2 text-xs text-[#f0b4ff]">{errors.message}</p>}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button type="submit" className="btn bg-ivory text-ink hover:bg-[#c9b3ff]">
                Send via WhatsApp <Arrow />
              </button>
              <button type="button" onClick={send('email')} className="btn border border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink">
                Send via email
              </button>
            </div>
            <p role="status" className="mt-4 min-h-5 text-sm text-[#c9b3ff]">
              {sent && `Thank you! Your message has been prepared in ${sent === 'whatsapp' ? 'WhatsApp' : 'your email app'} — just press send.`}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
