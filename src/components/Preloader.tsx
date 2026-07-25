'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from './BrandLogo';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#081426] text-white"
        >
          {/* Glowing particle background */}
          <div className="absolute w-72 h-72 bg-[#38d430]/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6 relative z-10"
          >
            {/* Prominent High Contrast Brand Logo */}
            <BrandLogo size="lg" showSubtitle={false} />

            <div className="flex items-center gap-2 text-xs font-black text-[#38d430] uppercase tracking-[0.3em] pt-2">
              <span>Initializing Fleet Engine...</span>
            </div>

            {/* Glowing Loading Bar */}
            <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.3, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#38d430] via-[#00f0ff] to-[#38d430]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
