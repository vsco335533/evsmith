'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, CircleDollarSign, Bike, Wrench, MapPin, Sparkles } from 'lucide-react';

export default function WhyEvSmith() {
  const features = [
    {
      icon: Zap,
      title: '⚡ Eco Friendly',
      subtitle: 'Zero Emissions',
      desc: '100% electric clean technology. Reduce urban carbon footprint while enjoying a whisper-quiet, ultra-smooth ride across Hyderabad.',
      color: 'from-[#38d430] to-[#00f0ff]',
    },
    {
      icon: Battery,
      title: '🔋 Long Battery',
      subtitle: '100 KM Range',
      desc: 'High-density Lithium-Ion battery pack delivers up to 100 KM per full charge for non-stop daily commuting & delivery routes.',
      color: 'from-[#00f0ff] to-[#38d430]',
    },
    {
      icon: CircleDollarSign,
      title: '💰 Affordable',
      subtitle: 'Lowest Rental Rates',
      desc: 'Unbeatable weekly (₹2000) and monthly (₹7500) rental plans designed for maximum financial savings vs expensive petrol.',
      color: 'from-amber-400 to-[#38d430]',
    },
    {
      icon: Bike,
      title: '🛵 Comfortable Ride',
      subtitle: 'City Ergonomics',
      desc: 'Superior suspension, wide cushioned seating, and ultra-nimble handling perfectly tailored for Hyderabad traffic conditions.',
      color: 'from-[#38d430] to-emerald-400',
    },
    {
      icon: Wrench,
      title: '🛠 Well Maintained',
      subtitle: 'Regular Servicing',
      desc: 'Every bike undergoes rigorous multi-point safety inspections, brake checks, and battery diagnostics before handover.',
      color: 'from-[#00f0ff] to-cyan-500',
    },
    {
      icon: MapPin,
      title: '📍 Local Support',
      subtitle: 'Instant Assistance',
      desc: 'Dedicated local hub at Gajularamaram, Kailash Hills. On-call phone support & fast battery swap assistance when needed.',
      color: 'from-emerald-400 to-[#38d430]',
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 relative overflow-hidden bg-cyber-grid w-full">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#38d430]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00f0ff]/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Full Edge-to-Edge Container */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38d430]/15 border border-[#38d430]/35 text-xs font-black text-[#38d430] uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Why Choose EV Smith
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] font-heading tracking-tight leading-tight">
            Built for <span className="text-gradient-electric">Smart Commuters</span> & Delivery Champions
          </h2>
          <p className="text-base sm:text-xl text-[var(--text-muted)] font-semibold leading-relaxed">
            Experience premium electric mobility engineered to save your money, protect the environment, and elevate your daily rides in Hyderabad.
          </p>
        </div>

        {/* Spacious 3-Column Uncompressed Responsive Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 w-full">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--glass-border)] hover:border-[#38d430] transition-all duration-300 group glass-card-hover relative overflow-hidden flex flex-col justify-between"
              >
                {/* Glow Accent Line Top */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#38d430]/15 border border-[#38d430]/35 flex items-center justify-center mb-6 group-hover:border-[#38d430] group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#38d430]" />
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-black text-[#38d430] uppercase tracking-wider block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-heading group-hover:text-[#38d430] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed pt-2 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--card-border)] flex items-center gap-2 text-xs font-bold text-[#38d430]">
                  <span>Premium Feature Included</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
