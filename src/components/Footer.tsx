import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const links = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.history.pushState(null, '', '#home');
  };

  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright text */}
          <div className="text-sm font-medium order-2 md:order-1 text-center md:text-left">
            <span>© 2026 Panchami V C. Built with React.js.</span>
          </div>

          {/* Quick links list */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 order-1 md:order-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-xs font-semibold hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top helper */}
          <div className="order-3">
            <button
              onClick={handleScrollTop}
              className="p-2.5 bg-zinc-800 border border-zinc-700 hover:border-zinc-650 rounded-xl text-zinc-300 hover:text-white transition-all shadow-2xs hover:scale-105"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
