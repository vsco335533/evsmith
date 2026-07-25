'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Sun, Moon, Zap, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface HeaderProps {
  onOpenBooking: (plan?: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const nextMode = !isLightMode;
    setIsLightMode(nextMode);

    if (typeof document !== 'undefined') {
      const el = document.documentElement;
      const body = document.body;
      const main = document.querySelector('main');

      if (nextMode) {
        el.classList.add('light-theme');
        el.classList.remove('dark');
        el.setAttribute('data-theme', 'light');

        body.classList.add('light-theme');
        body.classList.remove('dark');
        body.setAttribute('data-theme', 'light');

        if (main) {
          main.classList.add('light-theme');
          main.classList.remove('dark');
          main.setAttribute('data-theme', 'light');
        }
      } else {
        el.classList.remove('light-theme');
        el.classList.add('dark');
        el.removeAttribute('data-theme');

        body.classList.remove('light-theme');
        body.classList.add('dark');
        body.removeAttribute('data-theme');

        if (main) {
          main.classList.remove('light-theme');
          main.classList.add('dark');
          main.removeAttribute('data-theme');
        }
      }
    }
  };

  const navLinks = [
    { name: 'Featured Bike', href: '#bike' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Documents', href: '#documents' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-auto">
      {/* Top Scroll Progress Line */}
      <div className="w-full bg-slate-800/30 h-[3px]">
        <div
          className="h-full bg-gradient-to-r from-[#38d430] via-[#00f0ff] to-[#38d430] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'glass-panel border-b border-[#38d430]/30 py-3 shadow-2xl backdrop-blur-xl'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        {/* Full Edge-to-Edge Container with padding */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between gap-4">
          
          {/* Company Brand Logo Badge */}
          <a href="#" className="shrink-0">
            <BrandLogo size="md" />
          </a>

          {/* Live Availability Badge */}
          <div className="hidden 2xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38d430]/15 border border-[#38d430]/35 glass-panel shrink-0">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38d430] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38d430]"></span>
            </span>
            <span className="text-xs font-black text-[var(--text-primary)] whitespace-nowrap">2 Bikes Ready in Hyderabad</span>
          </div>

          {/* Desktop Nav Links (Clean Spacing, No Overlap!) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-[var(--text-muted)] hover:text-[#38d430] transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#38d430] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Light/Dark Theme"
              className="px-3 py-2 rounded-xl glass-panel border-2 border-[#38d430]/60 text-[var(--text-primary)] hover:text-[#38d430] hover:border-[#38d430] transition-all flex items-center gap-2 cursor-pointer shadow-md bg-[#38d430]/10 z-50 relative pointer-events-auto"
            >
              {isLightMode ? (
                <>
                  <Moon className="w-4 h-4 text-indigo-600 pointer-events-none" />
                  <span className="text-xs font-black text-indigo-900 pointer-events-none hidden sm:inline">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-amber-400 pointer-events-none" />
                  <span className="text-xs font-black text-amber-300 pointer-events-none hidden sm:inline">Bright</span>
                </>
              )}
            </button>

            {/* Quick Call Hotline Button */}
            <a
              href="tel:8275753239"
              className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-extrabold glass-panel border border-slate-700/60 hover:border-[#38d430]/50 text-[var(--text-primary)] hover:text-[#38d430] transition-all whitespace-nowrap shadow-md"
            >
              <Phone className="w-3.5 h-3.5 text-[#38d430]" />
              <span>8275753239</span>
            </a>

            {/* Primary Rent Now Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black text-[#081426] bg-[#38d430] hover:bg-[#42e83a] shadow-lg transition-all flex items-center gap-1.5 whitespace-nowrap glow-green cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-current text-[#081426]" />
              <span>Rent Now</span>
            </motion.button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl glass-panel border border-slate-700 text-[var(--text-primary)]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#38d430]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass-panel border-b border-[#38d430]/20 px-6 py-6 mt-3 space-y-4 shadow-2xl"
          >
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#38d430]/15 border border-[#38d430]/35 text-xs font-bold text-[#38d430]">
              <span className="h-2 w-2 rounded-full bg-[#38d430] animate-pulse"></span>
              2 Bikes Available for Instant Pickup in Hyderabad
            </div>

            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-[var(--text-primary)] hover:text-[#38d430] transition-colors py-2 border-b border-slate-800/40"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:8275753239"
                className="w-full py-3 rounded-xl glass-panel border border-slate-700 text-center font-bold text-[var(--text-primary)] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#38d430]" />
                Call 8275753239
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl font-extrabold bg-[#38d430] text-[#081426] text-center flex items-center justify-center gap-2 shadow-lg glow-green"
              >
                <Zap className="w-4 h-4 fill-current" />
                Rent Now (from ₹2000/wk)
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
