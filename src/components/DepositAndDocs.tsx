'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, RefreshCw, CheckCircle2, Sparkles, Clock, ArrowRight } from 'lucide-react';

interface DepositProps {
  onOpenBooking: () => void;
}

export default function DepositAndDocs({ onOpenBooking }: DepositProps) {
  return (
    <section id="documents" className="py-24 sm:py-32 relative bg-cyber-grid overflow-hidden w-full">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#00f0ff]/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Full Edge-to-Edge Container */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Security Deposit Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-panel p-8 sm:p-12 rounded-3xl border border-[#38d430]/40 shadow-2xl relative glow-green-lg space-y-6 w-full"
          >
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-[#38d430]/20 text-[#38d430] text-xs font-black uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> 100% Refundable Guarantee
              </span>
              <span className="text-xs font-bold text-[var(--text-muted)]">Instant Return</span>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] font-heading">
                Security Deposit: <span className="text-gradient-electric">100% Refundable</span>
              </h3>
              <p className="text-base text-[var(--text-muted)] mt-3 leading-relaxed font-semibold">
                We believe in total transparency. A modest security deposit is collected upon bike pickup and is 100% refunded immediately when you return the vehicle.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              <div className="p-4 rounded-2xl glass-panel border border-[var(--card-border)] flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#38d430]/20 text-[#38d430] shrink-0">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">Instant UPI / Cash Refund</h4>
                  <p className="text-xs text-[var(--text-muted)] font-medium">Processed on the spot during bike return inspection.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-[var(--card-border)] flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#00f0ff]/20 text-[#00f0ff] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">Zero Lock-in Period</h4>
                  <p className="text-xs text-[var(--text-muted)] font-medium">Return anytime after your rental term finishes.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--card-border)] flex items-center justify-between">
              <span className="text-xs text-[var(--text-muted)] font-bold">Need assistance?</span>
              <button
                onClick={onOpenBooking}
                className="text-xs font-black text-[#38d430] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Start Verification</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>

          {/* Right Column: Documents Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8 w-full"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38d430]/15 border border-[#38d430]/35 text-xs font-black text-[#38d430] uppercase tracking-widest">
                <Sparkles className="w-4 h-4" /> 5-Minute Verification
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-primary)] font-heading mt-4 tracking-tight">
                Required <span className="text-gradient-electric">Documents Checklist</span>
              </h2>
              <p className="text-base sm:text-lg text-[var(--text-muted)] mt-2 font-semibold">
                Bring these simple documents for quick verification during bike collection at Gajularamaram, Hyderabad.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Doc item 1 */}
              <div className="p-6 rounded-3xl glass-panel border border-[var(--card-border)] hover:border-[#38d430]/50 transition-all flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#38d430]/20 text-[#38d430] shrink-0">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-black text-[var(--text-primary)] font-heading">Primary Government ID</h4>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#38d430]/20 text-[#38d430] text-[10px] font-extrabold uppercase">Mandatory</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 leading-relaxed font-medium">
                    Original Aadhaar Card, PAN Card, or Driving Licence for identity verification.
                  </p>
                </div>
              </div>

              {/* Doc item 2 */}
              <div className="p-6 rounded-3xl glass-panel border border-[var(--card-border)] hover:border-[#38d430]/50 transition-all flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#00f0ff]/20 text-[#00f0ff] shrink-0">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-black text-[var(--text-primary)] font-heading">Local Address Proof</h4>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#00f0ff]/20 text-[#00f0ff] text-[10px] font-extrabold uppercase">Mandatory</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 leading-relaxed font-medium">
                    Local Hyderabad Electricity Bill or rental agreement copy for address record.
                  </p>
                </div>
              </div>

              {/* SLA Note */}
              <div className="p-4 rounded-2xl bg-[#38d430]/10 border border-[#38d430]/30 text-xs sm:text-sm text-[#38d430] font-black flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Verification takes less than 5 minutes. Ride out immediately!</span>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
