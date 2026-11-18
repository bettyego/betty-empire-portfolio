/**
 * ─────────────────────────────────────────────────────────────
 *  BETTY EMPIRE — PROJECTS
 *  Add a project: copy an entry, fill it in, then run
 *    npm run screenshots -- <slug>
 *  to capture its screenshots automatically (see README).
 *
 *  Fields
 *   slug         short id; also the screenshot filename
 *   name         project title shown on the site
 *   url          live website
 *   category     used for the filter (reuse one below or add new)
 *   description  1–2 sentences on what the site is and does
 *   caption      the live site's own headline, quoted under the image
 *   tech         only technologies verified in the live build
 *   mobile       true if public/projects/<slug>-mobile.webp exists
 *   hero         true to feature it in the hero card
 *
 *  Gallery order = list order. Positions 1 and 9 get the large
 *  "feature" spread, so put your strongest work there.
 * ─────────────────────────────────────────────────────────────
 */
export const projects = [
  {
    slug: 'giwagate',
    name: 'Giwagate Properties',
    url: 'https://giwagate.vercel.app/',
    category: 'Real Estate & Travel',
    description:
      'Corporate website for Giwagate Properties Limited, an Abuja real-estate company covering property sales, development, construction, management and investment — designed to build confidence from the first scroll.',
    caption: 'Property With Purpose. Investment With Vision.',
    tech: ['React', 'Vite'],
    mobile: true,
  },
  {
    slug: 'slaywjoy',
    name: 'Slay W Joy',
    url: 'https://slaywjoy.vercel.app/',
    category: 'E-commerce',
    description:
      'An online fashion store for SLAY WITH JOY — Nigerian fashion “made to turn heads” — with curated drops, dresses and sets, a shopping bag and an editorial, magazine-style look.',
    caption: 'Dress like you mean it.',
    tech: [],
    mobile: true,
    hero: true,
  },
  {
    slug: 'abujanest',
    name: 'Abuja Nest',
    url: 'https://abujanest.vercel.app/',
    category: 'Real Estate & Travel',
    description:
      'A booking-focused website for premium furnished shortlet apartments in Gwarinpa, Abuja — showcasing apartments, amenities and location, with stay-request enquiries built in.',
    caption: 'Experience Luxury Living in Abuja',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    mobile: true,
  },
  {
    slug: 'josesound',
    name: 'Jose Sound',
    url: 'https://josesound.vercel.app/',
    category: 'Events & Food',
    description:
      'A bold, high-energy website for Jocci Sound Engineering in Lagos — sound rentals, live engineering and audio installations for weddings, concerts, church programmes and corporate events, with online booking.',
    caption: 'Premium sound experience for every event.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    mobile: true,
  },
  {
    slug: 'bsmenu',
    name: 'B’s Menu',
    url: 'https://bs-menu-nine.vercel.app/',
    category: 'Events & Food',
    description:
      'A warm, appetising menu website for a homemade Nigerian food business in Abuja — soups, stews, sauces and rice dishes cooked to order, with ordering straight through WhatsApp.',
    caption: 'Homemade Goodness, Made for Your Table.',
    tech: ['React', 'Vite'],
    mobile: true,
  },
  {
    slug: 'eddamass',
    name: 'Edda Mass',
    url: 'https://edda-mass.vercel.app/',
    category: 'Real Estate & Travel',
    description:
      'A travel and booking website for Edda Mass Transportation, connecting passengers from Ebonyi State to cities across Nigeria — with popular routes, services and a journey-search booking form.',
    caption: 'Travel Across Nigeria Safely',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    mobile: true,
  },
  {
    slug: 'richmark',
    name: 'Richmark Foundation',
    url: 'https://www.richmarkfoundation.com/',
    category: 'Community & Non-profit',
    description:
      'The website of Richmark Humanitarian Foundation, which supports Nigerian communities through health, education, human rights and sustainable development — with impact areas, updates and donation calls to action.',
    caption: 'Protecting Human Rights.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    mobile: true,
  },
  {
    slug: 'pinchofluxe',
    name: 'Pinch of Luxe',
    url: 'https://www.pinchofluxe.com/',
    category: 'Events & Food',
    description:
      'An elegant website for Pinch of Luxe Events — professional event planning, balloon décor and floral design for weddings, birthdays and corporate events — with a gallery, reviews and consultation enquiries.',
    caption: 'Exceptional Events, Extraordinary Experiences',
    tech: ['React', 'Tailwind CSS'],
    mobile: false,
  },
  {
    slug: 'bluoak',
    name: 'BluOak Bank',
    url: 'https://blukoak-bank.vercel.app/',
    category: 'Finance & Business',
    description:
      'A modern digital-banking concept for BlueOak Bank — a confident landing experience with account sign-up and sign-in, plus a dashboard-style preview of balances, transactions and savings goals.',
    caption: 'Banking Reimagined',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    mobile: true,
  },
  {
    slug: 'elcee',
    name: 'Elcee Stores',
    url: 'https://elcee-stores.vercel.app/',
    category: 'E-commerce',
    description:
      'A full online store for natural skincare products, with product search, featured collections, a cart and account sign-up — fresh, bright and built to sell.',
    caption: '100% Avila Naturelle Skincare',
    tech: ['React', 'Vite'],
    mobile: true,
  },
  {
    slug: 'bettycatery',
    name: 'Betty Catery',
    url: 'https://bettycatery.vercel.app/',
    category: 'Events & Food',
    description:
      'A luxury catering website for Lady B’s Catering Service — signature menus, catering services for weddings, corporate events and private parties, client reviews and free-quote requests.',
    caption: 'Exceptional Catering for Memorable Events',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    mobile: true,
  },
  {
    slug: 'mmasstore',
    name: 'Mma’s Store',
    url: 'https://mma-s-store.vercel.app/',
    category: 'E-commerce',
    description:
      'A stylish fashion e-commerce store for trendy and timeless clothing and footwear, with product listings, cart, payment and account pages, and a newsletter sign-up.',
    caption: 'Discover Your Style',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    mobile: true,
  },
  {
    slug: 'phoneten',
    name: 'Phone Ten',
    url: 'https://phone-ten-amber.vercel.app/',
    category: 'E-commerce',
    description:
      'A sleek smartphone store for Chibyk, presenting the latest flagship devices with featured products, product search and a cart.',
    caption: 'Flagship Devices',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    mobile: true,
  },
  {
    slug: 'bettywork',
    name: 'BettyWork',
    url: 'https://bettywork.vercel.app/',
    category: 'Finance & Business',
    description:
      'A product landing page for PaperCloud, a personal business-manager app that helps creators, freelancers and business owners create invoices, organise customer data and track income, inventory and expenses.',
    caption: 'Your Personal Business Manager',
    tech: ['React', 'Vite'],
    mobile: true,
  },
  {
    slug: 'queensspace',
    name: 'Queen’s Space',
    url: 'https://queens-space.vercel.app/',
    category: 'Community & Non-profit',
    description:
      'A community website for Queens Space Abuja — a sisterhood where women build genuine friendships, grow together and create memories — with events, a memories gallery and a join-the-sisterhood journey.',
    caption: 'Where Sisterhood Becomes Family.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    mobile: false,
  },
  {
    slug: 'pinebridge',
    name: 'Pinebridge',
    url: 'https://pinebridge.vercel.app/',
    category: 'Finance & Business',
    description:
      'A corporate website for PineBridge Investments, a private global asset manager — with a live market ticker, earning plans, partnerships and account sign-up.',
    caption: 'A private, global asset manager focused on active, high-conviction investing.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    mobile: true,
  },
  {
    slug: 'mmascakes',
    name: 'MMA’s Cakes & Pastries',
    url: 'https://mmas-cakes-and-pastries.vercel.app/',
    category: 'Events & Food',
    description:
      'A premium, responsive bakery website for MMA’s Cakes and Pastries, featuring an interactive product catalogue, product filtering, shopping cart, custom cake enquiry form, image gallery and WhatsApp ordering experience.',
    caption: 'Freshly Baked with Love ♡',
    tech: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
    mobile: true,
  },
];

// ── Derived data (no need to edit below) ────────────────────────
for (const p of projects) {
  p.image ??= `/projects/${p.slug}.webp`;
  p.mobileImage ??= p.mobile ? `/projects/${p.slug}-mobile.webp` : null;
}

export const categories = [...new Set(projects.map((p) => p.category).filter(Boolean))].map((name) => ({
  name,
  count: projects.filter((p) => p.category === name).length,
}));
