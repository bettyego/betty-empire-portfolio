import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Expertise from './components/Expertise.jsx';
import Services from './components/Services.jsx';
import Journey from './components/Journey.jsx';
import Statement from './components/Statement.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useReveal } from './hooks/useReveal.js';

export default function App() {
  useReveal();
  useEffect(() => {
    const id = requestAnimationFrame(() => document.body.classList.add('is-loaded'));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-ivory"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Expertise />
        <Services />
        <Statement />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
