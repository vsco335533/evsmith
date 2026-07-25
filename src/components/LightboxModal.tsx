'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ShieldCheck } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}

export default function LightboxModal({ isOpen, imageSrc, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-4xl glass-panel p-6 rounded-3xl border border-[#38d430]/40 z-10 bg-[#081426]/90 overflow-hidden flex flex-col items-center"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full text-center mb-4">
              <span className="text-xs font-bold text-[#38d430] uppercase tracking-widest">High Definition Inspection</span>
              <h3 className="text-xl font-bold text-white font-heading">BGauss Oowah EX — Premium Electric Scooter</h3>
            </div>

            <div className="relative h-96 sm:h-[500px] w-full flex items-center justify-center">
              <Image
                src={imageSrc || '/assets/scooter_mint_transparent.png'}
                alt="Zoomed Scooter View"
                fill
                className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
              />
            </div>

            <div className="mt-4 text-center flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#38d430]" />
              <span>Full original vehicle inspection grade • Available now at Gajularamaram Kailash Hills hub</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
