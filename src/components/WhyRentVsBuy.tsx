'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Sparkles, Zap } from 'lucide-react';

export default function WhyRentVsBuy() {
  const comparisonData = [
    {
      feature: 'Upfront Downpayment',
      buying: 'High Downpayment Required',
      renting: 'Zero Downpayment (Only Refundable Deposit)',
    },
    {
      feature: 'Monthly Financial Liability',
      buying: 'High EMI payments every month',
      renting: 'No EMI (Pay only when you rent)',
    },
    {
      feature: 'Maintenance & Service Expenses',
      buying: 'Expensive regular servicing costs',
      renting: '100% Free Maintenance included',
    },
    {
      feature: 'Vehicle Insurance & Tax',
      buying: 'Annual renewal insurance fees',
      renting: 'Fully Insured by EV Smith',
    },
    {
      feature: 'Battery Aging & Replacement',
      buying: 'Expensive battery replacement after 2 years',
      renting: 'Zero Battery Risk (We replace free)',
    },
    {
      feature: 'Depreciation Loss',
      buying: 'Loses 40% resale value in 2 years',
      renting: 'Zero Depreciation Loss',
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-cyber-grid overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38d430]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38d430]/15 border border-[#38d430]/35 text-xs font-black text-[#38d430] uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Smart Financial Decision
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black theme-text-primary font-heading tracking-tight">
            Why Rent Instead of <span className="text-gradient-electric">Buying?</span>
          </h2>
          <p className="text-base sm:text-xl theme-text-muted font-medium">
            See why renting with EV Smith is 3x cheaper and 100% hassle-free compared to purchasing an EV bike outright.
          </p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-700/60 bg-slate-900/40 dark:bg-[#0d1e38]">
                  <th className="p-6 text-sm font-black theme-text-primary w-1/3">Feature Comparison</th>
                  <th className="p-6 text-sm font-black text-red-400 w-1/3">
                    <div className="flex items-center gap-2">
                      <X className="w-5 h-5 text-red-400" />
                      Buying a Scooter
                    </div>
                  </th>
                  <th className="p-6 text-sm font-black text-[#38d430] w-1/3 bg-[#38d430]/15 border-l border-[#38d430]/30">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 fill-current text-[#38d430]" />
                      Renting with EV Smith
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/40">
                {comparisonData.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-800/20 transition-colors">
                    <td className="p-6 text-sm sm:text-base font-bold theme-text-primary">
                      {item.feature}
                    </td>
                    <td className="p-6 text-xs sm:text-sm text-slate-400">
                      <div className="flex items-center gap-2 text-red-400">
                        <X className="w-4 h-4 shrink-0" />
                        <span>{item.buying}</span>
                      </div>
                    </td>
                    <td className="p-6 text-xs sm:text-sm font-extrabold theme-text-primary bg-[#38d430]/5 border-l border-[#38d430]/20">
                      <div className="flex items-center gap-2 text-[#38d430]">
                        <Check className="w-5 h-5 shrink-0 text-[#38d430]" />
                        <span>{item.renting}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
