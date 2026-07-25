'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export default function BrandLogo({ className = '', size = 'md', showSubtitle = true }: BrandLogoProps) {
  const iconSizes = {
    sm: 'w-9 h-9 sm:w-10 sm:h-10',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const textSizes = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 group shrink-0 ${className}`}>
      {/* High-Contrast Badge Container so logo is 100% visible on ANY background */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative ${iconSizes[size]} rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-lg border-2 border-[#38d430] group-hover:shadow-[0_0_25px_rgba(56,212,48,0.7)] transition-all shrink-0`}
      >
        <Image
          src="/assets/logo_original_cropped.png"
          alt="EV Smith Logo"
          width={64}
          height={64}
          className="object-contain w-full h-full"
          priority
        />
      </motion.div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`${textSizes[size]} font-black tracking-tight text-[var(--text-primary)] font-heading group-hover:text-[#38d430] transition-colors whitespace-nowrap`}>
            EV <span className="text-[#38d430]">SMITH</span>
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-bold whitespace-nowrap hidden sm:block">
            Ride Electric. Ride Smart.
          </span>
        )}
      </div>
    </div>
  );
}
