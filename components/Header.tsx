'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Método', href: '#metodo' },
    { name: 'Sobre', href: '#sobre' },
  ];

  // Scroll centralizado e confiável
  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
        className={`
          relative flex items-center justify-between px-6 py-3 w-full transition-all duration-500
          ${
            isScrolled
              ? 'max-w-5xl rounded-2xl border border-white/10 bg-[#020617]/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
              : 'max-w-7xl bg-transparent'
          }
        `}
      >
        {/* LOGO */}
        <Image
          src="/brancaLogo.webp"
          alt="Logotipo"
          width={80}
          height={80}
          priority
        />

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleScroll(link.href)}
                className="text-slate-300 text-xs uppercase tracking-widest font-medium hover:text-white transition-colors"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5519999496085?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o!"
            className="hidden md:flex items-center gap-2 px-5 py-2 bg-white text-[#020617] rounded-full text-xs font-bold hover:bg-slate-200 transition-all active:scale-95 shadow-lg shadow-white/5"
          >
            Agendar <ArrowRight className="w-3 h-3" />
          </a>

          <button
            className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-full left-0 right-0 mt-2 p-4 bg-[#020617]/95 backdrop-blur-2xl border border-white/10 rounded-2xl md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className="text-left text-white text-lg font-light p-2 border-b border-white/5"
              >
                {link.name}
              </button>
            ))}

            <a
              href="https://wa.me/5519999496085?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o!"
              className="w-full py-4 bg-purple-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 mt-2"
            >
              Agendar Agora <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
}
