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
    sm: 'w-11 h-11 sm:w-12 sm:h-12',
    md: 'w-13 h-13 sm:w-14 sm:h-14',
    lg: 'w-16 h-16 sm:w-18 sm:h-18',
  };

  const textSizes = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 group shrink-0 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative ${iconSizes[size]} flex items-center justify-center transition-all shrink-0 rounded-2xl overflow-hidden`}
        style={{
          background: 'radial-gradient(circle at 55% 45%, rgba(56,212,48,0.12) 0%, rgba(0,240,255,0.05) 70%, transparent 100%)',
          boxShadow: '0 0 16px 3px rgba(56,212,48,0.30), inset 0 0 6px rgba(56,212,48,0.10)',
          border: '1.5px solid rgba(56,212,48,0.40)',
        }}
      >
        <Image
          src="/assets/logo_original.png"
          alt="EVSmith Logo"
          width={72}
          height={72}
          className="object-contain w-full h-full"
          priority
        />
      </motion.div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`${textSizes[size]} font-black tracking-tight text-[var(--text-primary)] font-heading group-hover:text-[#38d430] transition-colors whitespace-nowrap`}>
            EV<span className="text-[#38d430]">SMITH</span>
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-bold whitespace-nowrap hidden sm:block">
            Earn With Electric
          </span>
        )}
      </div>
    </div>
  );
}
