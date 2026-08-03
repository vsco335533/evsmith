'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, Calculator } from 'lucide-react';

interface PricingProps {
  onOpenBooking: (plan?: string) => void;
}

export default function PricingCalculator({ onOpenBooking }: PricingProps) {
  const [days, setDays] = useState(30);

  // Daily Petrol Cost (~₹150/day for 40 km)
  const petrolCostPerDay = 150;
  const petrolTotal = days * petrolCostPerDay;

  // EV Smith Rental Rate calculation
  let dailyRentalRate = 285; // default weekly rate per day
  if (days >= 30) {
    dailyRentalRate = 260; // Monthly
  } else if (days >= 15) {
    dailyRentalRate = 267; // 15 Days
  }
  const evSmithTotal = days * dailyRentalRate;

  // Net Savings
  const netSavings = petrolTotal - evSmithTotal;

  const plans = [
    {
      id: 'weekly',
      name: 'Weekly Plan',
      price: '₹2,000',
      perDay: '₹285 / day',
      duration: '7 Days',
      popular: false,
      features: [
        'BGauss Oowah EX Scooter',
        '100 KM Battery Range per charge',
        '100% Free Servicing & Repairs',
        '₹1,500 Refundable Deposit',
      ],
    },
    {
      id: '15days',
      name: '15 Days Plan',
      price: '₹4,000',
      perDay: '₹267 / day',
      duration: '15 Days',
      popular: false,
      features: [
        'BGauss Oowah EX Scooter',
        '100 KM Battery Range per charge',
        '100% Free Servicing & Repairs',
        '₹1,500 Refundable Deposit',
        'Save ₹500 vs Petrol',
      ],
    },
    {
      id: 'monthly',
      name: 'Monthly Plan',
      price: '₹7,800',
      perDay: '₹260 / day',
      duration: '30 Days',
      popular: true,
      badge: 'MOST POPULAR & SAVINGS',
      features: [
        'BGauss Oowah EX Scooter',
        '100 KM Battery Range per charge',
        '100% Free Maintenance & Battery Swap',
        '₹1,500 Refundable Deposit',
        'Save over ₹3,000/month vs Petrol',
        'Priority Customer Support',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 relative bg-cyber-grid overflow-hidden w-full">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38d430]/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Full Edge-to-Edge Container */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38d430]/15 border border-[#38d430]/35 text-xs font-black text-[#38d430] uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] font-heading tracking-tight">
            Simple & Affordable <span className="text-gradient-electric">Rental Plans</span>
          </h2>
          <p className="text-base sm:text-xl text-[var(--text-muted)] font-semibold">
            Zero hidden charges. Every plan includes free maintenance and battery support.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-24 w-full">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`glass-panel p-8 sm:p-10 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between ${
                plan.popular
                  ? 'border-[#38d430] shadow-2xl glow-green bg-[#38d430]/5 scale-102 lg:-translate-y-3'
                  : 'border-[var(--card-border)] hover:border-[#38d430]/60 glass-card-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#38d430] text-[#081426] text-xs font-black uppercase tracking-widest shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black text-[var(--text-primary)] font-heading">{plan.name}</h3>
                  <span className="px-3 py-1 rounded-xl glass-panel text-[var(--text-primary)] text-xs font-bold border border-[var(--card-border)]">
                    {plan.duration}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] font-heading">{plan.price}</span>
                  </div>
                  <span className="text-xs font-black text-[#38d430] mt-1 block">{plan.perDay}</span>
                </div>

                <ul className="space-y-3.5 pt-4 border-t border-[var(--card-border)] mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[var(--text-primary)] font-semibold">
                      <div className="p-1 rounded-lg bg-[#38d430]/20 text-[#38d430] shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenBooking(plan.id)}
                className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
                  plan.popular
                    ? 'bg-[#38d430] hover:bg-[#42e83a] text-[#081426] glow-green'
                    : 'glass-panel border border-[var(--card-border)] hover:border-[#38d430] text-[var(--text-primary)] hover:text-[#38d430]'
                }`}
              >
                <span>Select {plan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Interactive EV Savings Calculator Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#38d430]/40 shadow-2xl relative glow-green-lg w-full"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3.5 rounded-2xl bg-[#38d430]/20 text-[#38d430]">
              <Calculator className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-black text-[#38d430] uppercase tracking-widest">Interactive Calculator</span>
              <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-heading">
                Calculate Your <span className="text-gradient-electric">Monthly Savings</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
            
            {/* Slider Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                    Rental Duration: <span className="text-[#38d430] font-black">{days} Days</span>
                  </label>
                  <span className="text-xs text-[var(--text-muted)] font-mono font-bold">Estimated 40 KM Daily Ride</span>
                </div>

                <input
                  type="range"
                  min="7"
                  max="90"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full accent-[#38d430] cursor-pointer h-3 bg-slate-700 rounded-lg"
                />

                <div className="flex justify-between text-xs text-[var(--text-muted)] font-bold mt-2">
                  <span>7 Days</span>
                  <span>15 Days</span>
                  <span>30 Days (Monthly)</span>
                  <span>90 Days</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl glass-panel border border-[var(--card-border)]">
                  <div className="text-xs text-[var(--text-muted)] font-bold uppercase">Petrol Expense</div>
                  <div className="text-2xl sm:text-3xl font-black text-red-500 mt-1 font-heading">₹{petrolTotal.toLocaleString()}</div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-1">@ ₹150/day fuel cost</div>
                </div>

                <div className="p-5 rounded-2xl glass-panel border border-[#38d430]/40">
                  <div className="text-xs text-[#38d430] font-bold uppercase">EV Smith Rental</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#38d430] mt-1 font-heading">₹{evSmithTotal.toLocaleString()}</div>
                  <div className="text-[11px] text-[#38d430] mt-1 font-bold">Maintenance Included</div>
                </div>
              </div>
            </div>

            {/* Savings Result Column */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#38d430]/10 border border-[#38d430]/50 text-center space-y-4 glow-green">
              <span className="text-xs font-black text-[#38d430] uppercase tracking-widest">Net Cash Savings</span>
              <div className="text-4xl sm:text-6xl font-black text-[#38d430] font-heading">
                ₹{netSavings.toLocaleString()}
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-primary)] font-bold">
                You save <strong className="text-[#38d430]">₹{netSavings.toLocaleString()}</strong> in fuel & maintenance expenses over {days} days!
              </p>
              <button
                onClick={() => onOpenBooking('monthly')}
                className="w-full py-4 rounded-2xl bg-[#38d430] hover:bg-[#42e83a] text-[#081426] font-black text-base shadow-xl glow-green cursor-pointer"
              >
                Claim These Savings Now
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
