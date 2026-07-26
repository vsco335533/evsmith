'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Phone, ShieldCheck, Star, Gauge, MapPin, Sparkles, CheckCircle2, ChevronRight, ChevronLeft, RotateCw } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (plan?: string) => void;
  onOpenLightbox: (src: string) => void;
}

interface BikeItem {
  id: string;
  name: string;
  variant: string;
  speed: string;
  range: string;
  charge: string;
  weeklyPrice: string;
  monthlyPrice: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  image: string;
}

const AVAILABLE_BIKES: BikeItem[] = [
  {
    id: 'oowah-mint',
    name: 'BGauss Oowah EX',
    variant: 'Electric Mint Edition',
    speed: '65 km/h',
    range: '100 km',
    charge: '4.0 Hours',
    weeklyPrice: '₹2,000',
    monthlyPrice: '₹7,500',
    badge: 'Popular Delivery Pick',
    badgeBg: 'bg-[#38d430]',
    badgeText: 'text-[#081426]',
    image: '/assets/scooter_mint_transparent.png',
  },
  {
    id: 'oowah-white',
    name: 'BGauss Oowah EX',
    variant: 'Pristine White Edition',
    speed: '65 km/h',
    range: '100 km',
    charge: '4.0 Hours',
    weeklyPrice: '₹2,000',
    monthlyPrice: '₹7,500',
    badge: 'Executive Commute',
    badgeBg: 'bg-[#00f0ff]',
    badgeText: 'text-[#081426]',
    image: '/assets/scooter_white_transparent.png',
  },
  {
    id: 'c12i-special',
    name: 'BGauss C12i Heavy Duty',
    variant: 'Extended Battery Range',
    speed: '60 km/h',
    range: '123 km',
    charge: '3.5 Hours',
    weeklyPrice: '₹2,200',
    monthlyPrice: '₹8,000',
    badge: 'Ultra Long Mileage',
    badgeBg: 'bg-emerald-500',
    badgeText: 'text-white',
    image: '/assets/scooter_mint_transparent.png',
  },
];

export default function Hero({ onOpenBooking, onOpenLightbox }: HeroProps) {
  const [currentBikeIndex, setCurrentBikeIndex] = useState(0);
  const [autoFlipPaused, setAutoFlipPaused] = useState(false);

  // Stats Counters state
  const [counters, setCounters] = useState({
    speed: 0,
    range: 0,
    charge: 0,
    bikes: 0,
  });

  // Auto-flip Box Transition Effect every 4 seconds
  useEffect(() => {
    if (autoFlipPaused) return;

    const timer = setInterval(() => {
      setCurrentBikeIndex((prev) => (prev + 1) % AVAILABLE_BIKES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [autoFlipPaused]);

  // Counter animation on mount
  useEffect(() => {
    const duration = 1800;
    const steps = 45;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        speed: Math.round(65 * progress),
        range: Math.round(100 * progress),
        charge: Number((4 * progress).toFixed(1)),
        bikes: Math.min(2, Math.round(2 * progress)),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const currentBike = AVAILABLE_BIKES[currentBikeIndex];

  const handleNextBike = () => {
    setCurrentBikeIndex((prev) => (prev + 1) % AVAILABLE_BIKES.length);
  };

  const handlePrevBike = () => {
    setCurrentBikeIndex((prev) => (prev === 0 ? AVAILABLE_BIKES.length - 1 : prev - 1));
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-cyber-grid w-full">
      {/* Soft Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#38d430]/15 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-[650px] h-[650px] bg-[#00f0ff]/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#38d430] opacity-35 animate-spark"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2.5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Full Edge-to-Edge Container */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center w-full">

          {/* Left Column - Headline & Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            {/* Top Rating Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#38d430]/35 shadow-lg">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-[var(--text-primary)] tracking-wide">
                Trusted Local EV Rental in Hyderabad
              </span>
              <span className="h-2 w-2 rounded-full bg-[#38d430]"></span>
              <span className="text-xs text-[#38d430] font-black">5.0 ★ Rating</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tight text-[var(--text-primary)] font-heading leading-[1.06]">
                Ride <span className="text-gradient-electric">Electric.</span> <br />
                Ride <span className="text-[var(--text-primary)] relative">
                  Smart.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#38d430]" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Sub Heading */}
            <p className="text-base sm:text-xl xl:text-2xl text-[var(--text-muted)] max-w-3xl font-semibold leading-relaxed">
              Affordable Premium Electric Bike Rentals in <strong className="text-[var(--text-primary)] font-bold">Hyderabad</strong>.
              Perfect for Daily Commute, Delivery Partners, Students and Office Professionals.
            </p>

            {/* Local Badge Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass-panel border border-[var(--card-border)] text-[var(--text-primary)] font-extrabold">
                <MapPin className="w-4 h-4 text-[#38d430]" />
                Kailash Hills, Hyderabad
              </span>
              <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass-panel border border-[var(--card-border)] text-[var(--text-primary)] font-extrabold">
                <CheckCircle2 className="w-4 h-4 text-[#38d430]" />
                No EMI & Zero Maintenance
              </span>
              <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass-panel border border-[var(--card-border)] text-[var(--text-primary)] font-extrabold">
                <ShieldCheck className="w-4 h-4 text-[#38d430]" />
                ₹1500 Security Deposit
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(56,212,48,0.6)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenBooking()}
                className="px-8 py-4 rounded-2xl bg-[#38d430] hover:bg-[#42e83a] text-[#081426] text-base font-black shadow-xl flex items-center justify-center gap-3 transition-all glow-green cursor-pointer"
              >
                <Zap className="w-5 h-5 fill-current text-[#081426]" />
                <span>Rent Now — ₹2000/wk</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:8275753239"
                className="px-8 py-4 rounded-2xl glass-panel border border-[var(--card-border)] hover:border-[#38d430]/60 text-[var(--text-primary)] text-base font-bold flex items-center justify-center gap-3 transition-all"
              >
                <Phone className="w-5 h-5 text-[#38d430]" />
                <span>Call Now: 8275753239</span>
              </motion.a>
            </div>

            {/* Live Availability Notification */}
            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#38d430]/15 border border-[#38d430]/35 text-[#38d430] font-extrabold">
                <span className="h-2.5 w-2.5 rounded-full bg-[#38d430] animate-pulse"></span>
                <span>2 Bikes Available Now for Immediate Pickup</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column - AUTOMATIC 3D BOX FLIP VEHICLE SHOWCASE CARD */}
          <div
            className="lg:col-span-5 relative flex flex-col items-center w-full perspective-1000"
            onMouseEnter={() => setAutoFlipPaused(true)}
            onMouseLeave={() => setAutoFlipPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBike.id}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-full max-w-xl glass-panel rounded-3xl p-6 sm:p-7 border border-[#38d430]/40 shadow-2xl overflow-hidden glow-green preserve-3d"
              >
                {/* Auto Flip Banner */}
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${currentBike.badgeBg} ${currentBike.badgeText}`}>
                        {currentBike.badge}
                      </span>
                      <span className="text-[10px] text-[#38d430] font-mono font-bold animate-pulse flex items-center gap-1">
                        <RotateCw className="w-3 h-3" /> Auto-Flipping Box ({currentBikeIndex + 1}/{AVAILABLE_BIKES.length})
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-[var(--text-primary)] font-heading">{currentBike.name}</h3>
                    <p className="text-xs font-bold text-[var(--text-muted)]">{currentBike.variant}</p>
                  </div>

                  {/* Manual Arrow Controls */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={handlePrevBike}
                      aria-label="Previous Bike"
                      className="p-2 rounded-xl glass-panel border border-[var(--card-border)] hover:border-[#38d430] text-[var(--text-primary)] hover:text-[#38d430] transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextBike}
                      aria-label="Next Bike"
                      className="p-2 rounded-xl glass-panel border border-[var(--card-border)] hover:border-[#38d430] text-[var(--text-primary)] hover:text-[#38d430] transition-all cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Static High-Res Bike Image */}
                <div
                  onClick={() => onOpenLightbox(currentBike.image)}
                  className="relative h-56 sm:h-64 w-full my-1 flex items-center justify-center cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,212,48,0.2)_0%,_transparent_70%)] rounded-full blur-xl pointer-events-none" />
                  <Image
                    src={currentBike.image}
                    alt={currentBike.name}
                    fill
                    className="object-contain drop-shadow-[0_16px_20px_rgba(0,0,0,0.6)]"
                    priority
                  />
                  <div className="absolute bottom-1 right-1 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[10px] text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                    <RotateCw className="w-3 h-3 text-[#38d430]" /> Click to Inspect
                  </div>
                </div>

                {/* Bike Specs & Pricing Box */}
                <div className="grid grid-cols-2 gap-2.5 mt-3 pt-3 border-t border-[var(--card-border)]">
                  <div className="p-3 rounded-2xl glass-panel border border-[var(--card-border)] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-[var(--text-muted)] uppercase font-bold">Top Speed</div>
                      <div className="text-sm sm:text-base font-black text-[var(--text-primary)]">{currentBike.speed}</div>
                    </div>
                    <Gauge className="w-4 h-4 text-[#38d430] shrink-0" />
                  </div>

                  <div className="p-3 rounded-2xl glass-panel border border-[var(--card-border)] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-[var(--text-muted)] uppercase font-bold">Full Range</div>
                      <div className="text-sm sm:text-base font-black text-[var(--text-primary)]">{currentBike.range}</div>
                    </div>
                    <Zap className="w-4 h-4 text-[#00f0ff] shrink-0" />
                  </div>
                </div>

                {/* Price & Rent Button Bar */}
                <div className="mt-3 pt-3 border-t border-[var(--card-border)] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase block">Rental Rate</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl font-black text-[#38d430]">{currentBike.weeklyPrice}</span>
                      <span className="text-xs font-bold text-[var(--text-muted)]">/week</span>
                      <span className="text-xs text-[var(--text-muted)] font-medium ml-1 hidden sm:inline">({currentBike.monthlyPrice}/mo)</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => onOpenBooking()}
                    className="px-5 py-2.5 rounded-xl bg-[#38d430] hover:bg-[#42e83a] text-[#081426] text-xs sm:text-sm font-black shadow-md flex items-center gap-1.5 whitespace-nowrap glow-green cursor-pointer shrink-0"
                  >
                    <Zap className="w-3.5 h-3.5 fill-current text-[#081426]" />
                    <span>Rent This Bike</span>
                  </motion.button>
                </div>

                {/* Bike Pagination Indicators */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {AVAILABLE_BIKES.map((bike, idx) => (
                    <button
                      key={bike.id}
                      onClick={() => setCurrentBikeIndex(idx)}
                      aria-label={`Jump to ${bike.name}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentBikeIndex === idx
                          ? 'w-7 bg-[#38d430]'
                          : 'w-2 bg-slate-600/50 hover:bg-slate-400'
                        }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Floating Stats Section with High Contrast Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full"
        >
          {/* Stat 1: Top Speed */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[var(--card-border)] hover:border-[#38d430]/60 transition-all group glass-card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-[var(--text-muted)] uppercase tracking-wider">Top Speed</span>
              <div className="p-2.5 rounded-2xl bg-[#38d430]/15 text-[#38d430]">
                <Gauge className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl sm:text-5xl font-black text-[var(--text-primary)] font-heading group-hover:text-[#38d430] transition-colors">
                {counters.speed}
              </span>
              <span className="text-sm font-black text-[var(--text-muted)]">km/h</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-2 font-bold">High Efficiency City Drive</p>
          </div>

          {/* Stat 2: Range */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[var(--card-border)] hover:border-[#38d430]/60 transition-all group glass-card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-[var(--text-muted)] uppercase tracking-wider">Battery Range</span>
              <div className="p-2.5 rounded-2xl bg-[#00f0ff]/15 text-[#00f0ff]">
                <Zap className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl sm:text-5xl font-black text-[var(--text-primary)] font-heading group-hover:text-[#00f0ff] transition-colors">
                {counters.range}
              </span>
              <span className="text-sm font-black text-[var(--text-muted)]">km</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-2 font-bold">Single Charge Mileage</p>
          </div>

          {/* Stat 3: Fast Charging */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[var(--card-border)] hover:border-[#38d430]/60 transition-all group glass-card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-[var(--text-muted)] uppercase tracking-wider">Fast Charging</span>
              <div className="p-2.5 rounded-2xl bg-[#38d430]/15 text-[#38d430]">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl sm:text-5xl font-black text-[var(--text-primary)] font-heading group-hover:text-[#38d430] transition-colors">
                {counters.charge}
              </span>
              <span className="text-sm font-black text-[var(--text-muted)]">Hours</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-2 font-bold">0 to 100% Quick Charge</p>
          </div>

          {/* Stat 4: Bikes Available */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#38d430]/40 hover:border-[#38d430] transition-all group glass-card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-[#38d430] uppercase tracking-wider">Live Inventory</span>
              <div className="p-2.5 rounded-2xl bg-[#38d430]/20 text-[#38d430] pulse-green-badge">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl sm:text-5xl font-black text-[var(--text-primary)] font-heading group-hover:text-[#38d430] transition-colors">
                {counters.bikes}+
              </span>
              <span className="text-sm font-bold text-[#38d430]">Bikes Ready</span>
            </div>
            <p className="text-xs text-[var(--text-primary)] mt-2 font-extrabold">Instant Pickup in Hyderabad</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
