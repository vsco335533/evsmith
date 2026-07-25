'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BatteryCharging, Zap, Sparkles, Leaf, RefreshCw } from 'lucide-react';

export default function BatteryTech() {
  const [chargingPercentage, setChargingPercentage] = useState(65);

  useEffect(() => {
    const timer = setInterval(() => {
      setChargingPercentage((prev) => (prev >= 100 ? 20 : prev + 1));
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 sm:py-32 relative bg-cyber-grid overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Animated Battery Charging Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl border border-[#38d430]/40 relative glow-green-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-black text-[#38d430] uppercase tracking-widest flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#38d430] animate-bounce" /> Live Battery Simulation
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/60 text-xs font-mono font-bold text-[#00f0ff] border border-slate-700">
                4H FAST CHARGE
              </span>
            </div>

            {/* Graphic Battery Container */}
            <div className="relative w-full max-w-sm mx-auto h-48 rounded-3xl bg-[#081426] border-4 border-slate-700 p-3 flex flex-col justify-between overflow-hidden shadow-inner">
              
              {/* Terminal Cap */}
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-3 h-12 bg-slate-600 rounded-r-md border-r-2 border-slate-500" />

              {/* Internal Charging Liquid Fill */}
              <div
                className="h-full rounded-2xl bg-gradient-to-r from-[#38d430] via-[#00f0ff] to-[#38d430] transition-all duration-300 relative flex items-center justify-center shadow-[0_0_30px_rgba(56,212,48,0.5)]"
                style={{ width: `${chargingPercentage}%` }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlay Stat Text inside Battery */}
              <div className="absolute inset-0 flex items-center justify-center gap-2 font-mono font-extrabold text-2xl text-white drop-shadow-md">
                <BatteryCharging className="w-7 h-7 text-[#38d430] animate-pulse" />
                <span>{chargingPercentage}% CHARGED</span>
              </div>
            </div>

            {/* Battery Spec Indicators */}
            <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-slate-700/50 text-center">
              <div className="p-3.5 rounded-2xl glass-panel border border-slate-700/50">
                <div className="text-[10px] theme-text-muted uppercase font-bold">Lithium Cell</div>
                <div className="text-sm font-black theme-text-primary mt-0.5">NMC Grade</div>
              </div>
              <div className="p-3.5 rounded-2xl glass-panel border border-slate-700/50">
                <div className="text-[10px] theme-text-muted uppercase font-bold">Fast Charge</div>
                <div className="text-sm font-black text-[#38d430] mt-0.5">4 Hours</div>
              </div>
              <div className="p-3.5 rounded-2xl glass-panel border border-slate-700/50">
                <div className="text-[10px] theme-text-muted uppercase font-bold">Max Range</div>
                <div className="text-sm font-black text-[#00f0ff] mt-0.5">100 KM</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Battery Technology Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38d430]/15 border border-[#38d430]/35 text-xs font-black text-[#38d430] uppercase tracking-widest">
                <Sparkles className="w-4 h-4" /> Next-Gen Energy Storage
              </div>
              <h2 className="text-3xl sm:text-5xl font-black theme-text-primary font-heading mt-4 tracking-tight">
                Removable Smart <span className="text-gradient-electric">Lithium Tech</span>
              </h2>
              <p className="text-base sm:text-lg theme-text-muted mt-2 font-medium">
                Designed for ultimate convenience. Simply detach the battery pack and plug into any home socket, office outlet, or shop.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Feature 1 */}
              <div className="p-5 rounded-3xl glass-panel border border-slate-700/50 flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#38d430]/20 text-[#38d430] shrink-0">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black theme-text-primary">Single Removable Battery</h4>
                  <p className="text-xs sm:text-sm theme-text-muted mt-1">Lightweight battery pack with heavy-duty ergonomic handle for effortless portability.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-5 rounded-3xl glass-panel border border-slate-700/50 flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#00f0ff]/20 text-[#00f0ff] shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black theme-text-primary">4-Hour Fast Charging</h4>
                  <p className="text-xs sm:text-sm theme-text-muted mt-1">Rapid charge technology gets you from 0 to 100% in just 4 hours using standard 15A socket.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-5 rounded-3xl glass-panel border border-slate-700/50 flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-400/20 text-emerald-400 shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black theme-text-primary">100 KM Range & Eco Friendly</h4>
                  <p className="text-xs sm:text-sm theme-text-muted mt-1">Save over 120 kg of carbon dioxide emissions every month while enjoying 100 KM range.</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
