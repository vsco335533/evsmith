'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, ArrowUp, Zap, ChevronUp } from 'lucide-react';

interface FloatingProps {
  onOpenBooking: () => void;
}

export default function FloatingControls({ onOpenBooking }: FloatingProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop & Tablet Right Floating Buttons Stack */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Floating WhatsApp Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/918275753239?text=Hi%20EV%20Smith,%20I%20want%20to%20rent%20the%20BGauss%20Oowah%20EX%20bike!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Enquiry"
          className="w-13 h-13 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:brightness-110 transition-all border border-white/20"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </motion.a>

        {/* Floating Call Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:8275753239"
          aria-label="Direct Call"
          className="w-13 h-13 rounded-2xl bg-[#0d1e38] border border-[#38d430]/50 text-[#38d430] flex items-center justify-center shadow-2xl hover:bg-[#38d430] hover:text-[#081426] transition-all"
        >
          <Phone className="w-6 h-6" />
        </motion.a>

        {/* Floating Book Now Badge */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={onOpenBooking}
          className="px-5 py-3 rounded-2xl bg-[#38d430] text-[#081426] font-extrabold text-sm flex items-center gap-2 shadow-2xl glow-green border border-white/30"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>Rent Now</span>
        </motion.button>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-3 rounded-2xl glass-panel border border-slate-700 text-slate-300 hover:text-[#38d430] hover:border-[#38d430] transition-colors shadow-lg mt-2"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Mobile Bottom Booking Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#081426]/95 backdrop-blur-2xl border-t border-[#38d430]/30 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:8275753239"
          className="p-3.5 rounded-2xl glass-panel border border-slate-700 text-[#38d430] shrink-0"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href="https://wa.me/918275753239?text=Hi%20EV%20Smith,%20I%20want%20to%20rent%20the%20BGauss%20Oowah%20EX%20bike!"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-2xl bg-[#25D366] text-white shrink-0 shadow-lg"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-3.5 rounded-2xl bg-[#38d430] text-[#081426] font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl glow-green"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>Rent Now — ₹2000/wk</span>
        </button>
      </div>
    </>
  );
}
