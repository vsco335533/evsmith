'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, UploadCloud, ShieldCheck, Key, Bike, Sparkles, ArrowRight } from 'lucide-react';

interface BookingProcessProps {
  onOpenBooking: () => void;
}

export default function BookingProcess({ onOpenBooking }: BookingProcessProps) {
  const steps = [
    {
      number: '01',
      title: 'Choose Plan',
      desc: 'Select Weekly, 15 Days, or Monthly rental plan.',
      icon: CalendarCheck,
      color: 'border-[#38d430] text-[#38d430]',
    },
    {
      number: '02',
      title: 'Upload Documents',
      desc: 'Provide Aadhaar/PAN/DL and local Electricity Bill online or via WhatsApp.',
      icon: UploadCloud,
      color: 'border-[#00f0ff] text-[#00f0ff]',
    },
    {
      number: '03',
      title: 'Verification',
      desc: 'Quick instant identity check completed within 5 minutes.',
      icon: ShieldCheck,
      color: 'border-[#38d430] text-[#38d430]',
    },
    {
      number: '04',
      title: 'Collect Bike',
      desc: 'Pick up your electric scooter at Gajularamaram, Hyderabad.',
      icon: Key,
      color: 'border-amber-400 text-amber-400',
    },
    {
      number: '05',
      title: 'Ride Electric',
      desc: 'Enjoy smooth 100 KM range commuting with zero emissions.',
      icon: Bike,
      color: 'border-emerald-400 text-emerald-400',
    },
  ];

  return (
    <section id="process" className="py-12 sm:py-24 lg:py-32 relative bg-cyber-grid overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#38d430]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#38d430]/15 border border-[#38d430]/35 text-[11px] sm:text-xs font-black text-[#38d430] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 5-Minute Booking Workflow
          </div>
          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black theme-text-primary font-heading tracking-tight">
            Simple 5-Step <span className="text-gradient-electric">Rental Process</span>
          </h2>
          <p className="text-sm sm:text-xl theme-text-muted font-medium">
            From selection to riding out on your electric scooter in less than 15 minutes!
          </p>
        </div>

        {/* Timeline Grid with Animated Line */}
        <div className="relative">
          {/* Connecting Line behind steps (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-[#38d430] via-[#00f0ff] to-[#38d430] -translate-y-1/2 z-0 opacity-40 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-panel p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-700/50 hover:border-[#38d430]/60 transition-all duration-300 group glass-card-hover flex flex-col justify-between"
                >
                  <div>
                    {/* Top Number & Icon */}
                    <div className="flex items-center justify-between mb-2.5 sm:mb-6">
                      <span className="text-xl sm:text-3xl font-black font-mono theme-text-muted group-hover:text-[#38d430] transition-colors">
                        {step.number}
                      </span>
                      <div className={`p-2 sm:p-3.5 rounded-xl sm:rounded-2xl glass-panel border ${step.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-xl font-black theme-text-primary font-heading mb-1 sm:mb-2 group-hover:text-[#38d430] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm theme-text-muted leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-slate-700/40 flex items-center justify-between text-[11px] sm:text-xs font-bold theme-text-muted">
                    <span>Step {index + 1} of 5</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#38d430] group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-2xl bg-[#38d430] hover:bg-[#42e83a] text-[#081426] font-black text-base shadow-xl inline-flex items-center gap-3 glow-green"
          >
            <span>Start Booking Step 1</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
