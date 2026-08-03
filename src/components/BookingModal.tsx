'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, CheckCircle2, ShieldCheck, MessageSquare, Phone, Upload } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  selectedPlanId?: string;
  onClose: () => void;
}

export default function BookingModal({ isOpen, selectedPlanId = 'monthly', onClose }: BookingModalProps) {
  const [plan, setPlan] = useState(selectedPlanId);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [docType, setDocType] = useState('Aadhaar');
  const [pickupDate, setPickupDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const plans = [
    { id: 'weekly', name: 'Weekly Plan (₹2000)', price: '₹2000' },
    { id: '15days', name: '15 Days Plan (₹4000)', price: '₹4000' },
    { id: 'monthly', name: 'Monthly Plan (₹7800)', price: '₹7800' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38d430', '#00f0ff', '#ffffff'],
      });
    } catch (err) {
      // fallback
    }

    const message = `*NEW EV SMITH BIKE BOOKING REQUEST*%0A%0A*Name:* ${encodeURIComponent(name || 'Customer')}%0A*Phone:* ${encodeURIComponent(phone || 'Not provided')}%0A*Plan Selected:* ${encodeURIComponent(plan.toUpperCase())}%0A*Doc Type:* ${encodeURIComponent(docType)}%0A*Preferred Pickup:* ${encodeURIComponent(pickupDate || 'Today')}%0A*Vehicle:* BGauss Oowah EX (2 Bikes Available)%0A*Pickup Hub:* Kailash Hills, Hyderabad`;

    setTimeout(() => {
      window.open(`https://wa.me/918275753239?text=${message}`, '_blank');
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#081426]/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-[#38d430]/40 shadow-2xl bg-[#081426] z-10 overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/60 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-xl bg-[#38d430]/20 text-[#38d430]">
                    <Zap className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-xs font-bold text-[#38d430] uppercase tracking-wider">
                    Instant Bike Reservation
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white font-heading">
                  Rent BGauss Oowah EX
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  2 Bikes Available at Kailash Hills, Hyderabad
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Select Plan */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Choose Rental Package:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {plans.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setPlan(p.id)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all border ${
                            plan === p.id
                              ? 'bg-[#38d430] text-[#081426] border-[#38d430] shadow'
                              : 'bg-[#0d1e38] text-slate-300 border-slate-700 hover:border-[#38d430]'
                          }`}
                        >
                          {p.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Full Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1e38] border border-slate-700 focus:border-[#38d430] text-sm text-white outline-none"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Phone / WhatsApp Number:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1e38] border border-slate-700 focus:border-[#38d430] text-sm text-white outline-none"
                    />
                  </div>

                  {/* Document Type */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Primary ID Proof:
                      </label>
                      <select
                        value={docType}
                        onChange={(e) => setDocType(e.target.value)}
                        className="w-full px-3 py-3 rounded-xl bg-[#0d1e38] border border-slate-700 text-sm text-white outline-none"
                      >
                        <option value="Aadhaar">Original Aadhaar</option>
                        <option value="PAN">Original PAN</option>
                        <option value="Driving Licence">Driving Licence</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Pickup Date:
                      </label>
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full px-3 py-3 rounded-xl bg-[#0d1e38] border border-slate-700 text-sm text-white outline-none"
                      />
                    </div>
                  </div>

                  {/* Deposit Reminder */}
                  <div className="p-3 rounded-xl bg-[#38d430]/10 border border-[#38d430]/30 text-xs text-[#38d430] flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <ShieldCheck className="w-4 h-4" /> Security Deposit:
                    </span>
                    <span className="font-extrabold font-mono">₹1500 (100% Refundable)</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#38d430] hover:bg-[#42e83a] text-[#081426] font-extrabold text-base flex items-center justify-center gap-2 shadow-xl glow-green"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Confirm & Connect on WhatsApp</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#38d430]/20 border border-[#38d430] text-[#38d430] flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-extrabold text-white font-heading">
                  Reservation Initiated!
                </h3>
                <p className="text-xs text-slate-300">
                  Redirecting to EV Smith WhatsApp team to finalize bike pickup details...
                </p>

                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl glass-panel border border-slate-700 text-white text-xs font-bold"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
