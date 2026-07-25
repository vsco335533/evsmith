'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, Gauge, BatteryCharging, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedBikeProps {
  onOpenBooking: (plan?: string) => void;
  onOpenLightbox: (src: string) => void;
}

export default function FeaturedBike({ onOpenBooking, onOpenLightbox }: FeaturedBikeProps) {
  const [batteryCharge, setBatteryCharge] = useState(85);
  const [activeTab, setActiveTab] = useState<'specs' | 'battery' | 'comfort'>('specs');

  return (
    <section id="bike" className="py-24 sm:py-32 relative bg-cyber-grid overflow-hidden w-full">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#38d430]/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Full Edge-to-Edge Container */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 w-full">
          <div className="space-y-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38d430]/15 border border-[#38d430]/35 text-xs font-black text-[#38d430] uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Flagship Fleet Model
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] font-heading tracking-tight">
              BGauss <span className="text-gradient-electric">Oowah EX</span>
            </h2>
            <p className="text-base sm:text-xl text-[var(--text-muted)] font-semibold">
              The ultimate high-durability electric scooter engineered for Hyderabad city routes. Removable smart lithium pack with 100 KM range.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-5 py-2.5 rounded-2xl glass-panel border border-[#38d430]/40 flex items-center gap-2.5 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38d430] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#38d430]"></span>
              </span>
              <span className="text-xs sm:text-sm font-black text-[var(--text-primary)] uppercase tracking-wider">Available Now (2 Units)</span>
            </div>
          </div>
        </div>

        {/* Main Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center w-full">
          
          {/* Left Column: Interactive Scooter Display Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl border border-[#38d430]/40 relative group glow-green-lg w-full"
          >
            {/* Top Badges */}
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-xl bg-[#38d430] text-[#081426] text-xs font-black uppercase tracking-wider shadow">
                Ready for Pickup
              </span>
              <span className="text-xs font-bold text-[var(--text-muted)]">
                Gajularamaram, Hyderabad
              </span>
            </div>

            {/* Scooter Main Image */}
            <div
              onClick={() => onOpenLightbox('/assets/scooter_mint.png')}
              className="relative h-80 sm:h-[420px] w-full my-6 flex items-center justify-center cursor-pointer group-hover:scale-105 transition-transform duration-500"
            >
              <Image
                src="/assets/scooter_mint_transparent.png"
                alt="BGauss Oowah EX Bike"
                fill
                className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] animate-float"
              />
            </div>

            {/* Interactive Battery Charge Visualizer Widget */}
            <div className="p-6 rounded-2xl glass-panel border border-[var(--card-border)] space-y-3 shadow-inner">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <BatteryCharging className="w-5 h-5 text-[#38d430]" /> Interactive Charge State Test
                </span>
                <span className="font-black font-mono text-[#38d430]">{batteryCharge}% ({Math.round(batteryCharge * 1.0)} KM Range)</span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="10"
                max="100"
                value={batteryCharge}
                onChange={(e) => setBatteryCharge(Number(e.target.value))}
                className="w-full accent-[#38d430] cursor-pointer h-2.5 bg-slate-700 rounded-lg"
              />

              {/* Dynamic Battery Bar */}
              <div className="w-full bg-slate-800/80 h-3.5 rounded-full overflow-hidden p-0.5 border border-slate-700">
                <div
                  className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-[#38d430] to-[#00f0ff]"
                  style={{ width: `${batteryCharge}%` }}
                />
              </div>

              <p className="text-xs text-[var(--text-muted)] text-center font-medium">
                Drag slider to simulate charge status and estimated real-world mileage!
              </p>
            </div>
          </motion.div>

          {/* Right Column: Spec Sheet & Tabbed Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-8 w-full"
          >
            {/* Tabs */}
            <div className="flex items-center gap-2 p-2 rounded-2xl glass-panel border border-[var(--card-border)]">
              <button
                onClick={() => setActiveTab('specs')}
                className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  activeTab === 'specs'
                    ? 'bg-[#38d430] text-[#081426] shadow-lg'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Key Specs
              </button>
              <button
                onClick={() => setActiveTab('battery')}
                className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  activeTab === 'battery'
                    ? 'bg-[#38d430] text-[#081426] shadow-lg'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Battery Tech
              </button>
              <button
                onClick={() => setActiveTab('comfort')}
                className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  activeTab === 'comfort'
                    ? 'bg-[#38d430] text-[#081426] shadow-lg'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Comfort & Safety
              </button>
            </div>

            {/* Spec Cards List */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="glass-panel p-6 rounded-3xl border border-[var(--card-border)] hover:border-[#38d430]/60 transition-all">
                  <div className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider">Top Speed</div>
                  <div className="text-3xl font-black text-[var(--text-primary)] mt-1 font-heading">65 km/h</div>
                  <div className="text-xs text-[#38d430] mt-1.5 font-bold">High efficiency motor</div>
                </div>

                <div className="glass-panel p-6 rounded-3xl border border-[var(--card-border)] hover:border-[#38d430]/60 transition-all">
                  <div className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider">Full Battery Range</div>
                  <div className="text-3xl font-black text-[var(--text-primary)] mt-1 font-heading">100 km</div>
                  <div className="text-xs text-[#00f0ff] mt-1.5 font-bold">Per full charge cycle</div>
                </div>

                <div className="glass-panel p-6 rounded-3xl border border-[var(--card-border)] hover:border-[#38d430]/60 transition-all">
                  <div className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider">Battery Pack</div>
                  <div className="text-xl font-black text-[var(--text-primary)] mt-1 font-heading">Removable Li-Ion</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1.5 font-medium">Easy home socket charging</div>
                </div>

                <div className="glass-panel p-6 rounded-3xl border border-[var(--card-border)] hover:border-[#38d430]/60 transition-all">
                  <div className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider">Charging Time</div>
                  <div className="text-3xl font-black text-[var(--text-primary)] mt-1 font-heading">4 Hours</div>
                  <div className="text-xs text-[#38d430] mt-1.5 font-bold">0 to 100% fast charging</div>
                </div>
              </div>
            )}

            {activeTab === 'battery' && (
              <div className="glass-panel p-8 rounded-3xl border border-[var(--card-border)] space-y-4">
                <h4 className="text-xl font-black text-[var(--text-primary)] font-heading">Single Removable Lithium Battery</h4>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-medium">
                  No need to hunt for charging stations! Plug into any standard 15A home wall socket. Removable pack allows you to take the battery upstairs to your apartment or office.
                </p>
                <div className="flex flex-col gap-2.5 pt-2 text-xs sm:text-sm text-[var(--text-primary)] font-semibold">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#38d430] shrink-0" /> Smart BMS with Temperature Protection
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#38d430] shrink-0" /> Fast Charger Provided Included in Box
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#38d430] shrink-0" /> Zero Battery Replacement Charges
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'comfort' && (
              <div className="glass-panel p-8 rounded-3xl border border-[var(--card-border)] space-y-4">
                <h4 className="text-xl font-black text-[var(--text-primary)] font-heading">Engineered for City Roads</h4>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-medium">
                  Featuring hydraulic shock absorbers, durable tubeless tires, spacious boot storage for helmet, and extra wide legroom for long delivery shifts or daily commutes.
                </p>
                <div className="flex flex-col gap-2.5 pt-2 text-xs sm:text-sm text-[var(--text-primary)] font-semibold">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#38d430] shrink-0" /> CBS Synchronized Disc Brakes
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#38d430] shrink-0" /> Powerful LED Headlight for Night Rides
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#38d430] shrink-0" /> Helmet Included with Every Rental
                  </span>
                </div>
              </div>
            )}

            {/* Action Box */}
            <div className="p-7 rounded-3xl glass-panel border border-[#38d430]/40 flex flex-col sm:flex-row items-center justify-between gap-6 glow-green">
              <div>
                <div className="text-xs font-black text-[#38d430] uppercase tracking-wider">Special Availability</div>
                <div className="text-xl font-black text-[var(--text-primary)]">Rent BGauss Oowah EX Today</div>
                <div className="text-xs text-[var(--text-muted)] font-medium mt-1">Plans from ₹2000/week (₹285/day)</div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenBooking('weekly')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#38d430] hover:bg-[#42e83a] text-[#081426] font-black text-sm flex items-center justify-center gap-2 shadow-xl shrink-0 cursor-pointer"
              >
                <span>Reserve Bike</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
