/**
 * ─────────────────────────────────────────────────────────────
 *  BETTY EMPIRE — SITE CONFIGURATION
 *  Edit this file to update contact details, socials and bio.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  brand: 'BETTY EMPIRE',
  owner: 'Onuoha-mba Bethel Nwakaego',
  title: 'Full-Stack Developer',
  tagline: 'Design. Develop. Elevate.',
  headline: 'Building digital experiences that move businesses forward.',
  location: 'Abuja, Nigeria',
  hours: '10:00 AM – 10:00 PM',
  phoneDisplay: '0806 411 1501',
  whatsapp: 'https://wa.me/2348064111501',
  email: 'nwabethroseonuoha@gmail.com',

  /**
   * Social links — paste your profile URL to show it on the site.
   * Any link left as '' is hidden automatically.
   */
  socials: [
    { label: 'WhatsApp', short: 'Wa', url: 'https://wa.me/2348064111501' },
    { label: 'LinkedIn', short: 'In', url: '' },
    { label: 'GitHub', short: 'Gh', url: '' },
    { label: 'Instagram', short: 'Ig', url: '' },
    { label: 'TikTok', short: 'Tk', url: '' },
  ],
};

export const activeSocials = site.socials.filter((s) => s.url);

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services', href: '#services' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  {
    group: 'Frontend',
    note: 'Interfaces that are fast, accessible and a pleasure to use.',
    items: ['React', 'JavaScript', 'Vite', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    group: 'Backend',
    note: 'The logic and data behind the interface, connected cleanly.',
    items: ['Flask', 'Backend development', 'API integration'],
  },
  {
    group: 'Design',
    note: 'Visual identity and graphics that make a brand recognisable.',
    items: ['Branding', 'Photoshop', 'Illustrator', 'CorelDRAW', 'Canva'],
  },
];

export const capabilities = [
  'Responsive Web Development',
  'Website Design & Development',
  'Full-Stack Development',
  'Website Redesign',
  'Website Maintenance',
  'Digital Design & Branding',
];

export const services = [
  {
    title: 'Website Design & Development',
    icon: 'web',
    image: '/images/svc-web.webp',
    alt: 'A laptop showing code on a bright, minimal desk',
    body: 'Responsive, modern and functional websites for businesses and individuals, designed with intent and built to perform on every screen.',
  },
  {
    title: 'Full-Stack Development',
    icon: 'stack',
    image: '/images/svc-fullstack.webp',
    alt: 'Source code on a laptop screen in a dark room',
    body: 'Complete web solutions that pair a polished React frontend with backend functionality, from forms and data to integrations.',
  },
  {
    title: 'Branding & Identity Design',
    icon: 'brand',
    image: '/images/svc-branding.webp',
    alt: 'Colour swatches and brand palette studies',
    body: 'Distinctive brand identities and visual systems that give a business a clear, confident and consistent presence.',
  },
  {
    title: 'Logo & Flyer Design',
    icon: 'logo',
    image: '/images/svc-logo.webp',
    alt: 'A letterform sketched on a tablet beside printed design work',
    body: 'Professional logos, flyers and promotional materials crafted to be remembered and built to sell.',
  },
  {
    title: 'Business Graphics & Creative Design',
    icon: 'graphics',
    image: '/images/svc-graphics.webp',
    alt: 'A designer’s desk with creative software and a design playbook',
    body: 'Social media graphics, banners and business design materials that keep your communication sharp and on-brand.',
  },
  {
    title: 'Website Redesign & Maintenance',
    icon: 'redesign',
    image: '/images/svc-redesign.webp',
    alt: 'A desktop screen displaying a set of mobile interface designs',
    body: 'Breathing new life into existing websites, keeping them functional and improving the experience for every visitor.',
  },
];

/** Professional experience — taken from your CV. */
export const experience = [
  {
    role: 'Website & Graphic Designer / Developer',
    org: 'BETTY EMPIRE — Freelance & Remote',
    period: '2024 — Present',
    points: [
      'Design and develop responsive websites for small businesses, entrepreneurs and organisations using React, Vite, HTML and CSS.',
      'Create brand identities, social media templates and marketing collateral for clients.',
      'Gather requirements and deliver projects remotely through Zoom, Trello and email.',
      'Provide ongoing website maintenance and design updates.',
    ],
  },
  {
    role: 'Website Project',
    org: 'Giwagate Properties Limited',
    period: 'Client work',
    points: [
      'Designed and built the Giwagate Properties website, presenting the company and its real-estate offering online.',
    ],
    link: 'https://giwagate.vercel.app/',
  },
  {
    role: 'Graphic Designer (Contract)',
    org: 'Digital Spark Media — Remote',
    period: '2024 — 2025',
    points: [
      'Designed social media graphics, email banners and print materials for marketing campaigns.',
      'Created templates and visual assets consistent with brand guidelines.',
      'Took part in remote team stand-ups and client design reviews.',
    ],
  },
];

/** Education & certifications — taken from your CV. */
export const education = [
  {
    year: '2019 — 2023',
    title: 'B.A. History & Strategic Studies',
    org: 'Alex Ekwueme Federal University, Ndufu-Alike (AE-FUNAI)',
    kind: 'Degree',
  },
  {
    year: '2024 — 2025',
    title: 'Frontend Web Development',
    org: 'Listacc Tech Academy',
    kind: 'Certification',
  },
  {
    year: '2025',
    title: 'Graphic Design',
    org: 'Listacc Tech Academy',
    kind: 'Certification',
  },
  {
    year: '2025',
    title: 'Project Management (PMP training)',
    org: 'Exford Global',
    kind: 'Training',
  },
  {
    year: '2025',
    title: 'Customer Service & Relationship Management',
    org: 'Professional training',
    kind: 'Training',
  },
];
