'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, CheckCircle2, ShieldCheck, MessageSquare, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  selectedPlanId?: string;
  onClose: () => void;
}

export default function BookingModal({ isOpen, selectedPlanId = 'monthly', onClose }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredEvType, setPreferredEvType] = useState('Swappable Vehicle (Swapping Station)');
  const [docType, setDocType] = useState('Aadhaar');
  const [pickupDate, setPickupDate] = useState('');
  const [workLocation, setWorkLocation] = useState('');
  const [deliveryService, setDeliveryService] = useState('Swiggy');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save submission to Neon PostgreSQL database via API route
    try {
      await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          plan: selectedPlanId || 'monthly',
          preferredEvType,
          docType,
          pickupDate,
          workLocation,
          deliveryService,
        }),
      });
    } catch (err) {
      console.error('Failed to store booking to database:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }

    // Trigger confetti animation
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

    const message = `*NEW EVSMITH BIKE BOOKING REQUEST*%0A%0A*Name:* ${encodeURIComponent(name || 'Customer')}%0A*Phone:* ${encodeURIComponent(phone || 'Not provided')}%0A*Delivery Service / Work Company:* ${encodeURIComponent(deliveryService)}%0A*Work Location / Area:* ${encodeURIComponent(workLocation || 'Not specified')}%0A*Preferred EV Type:* ${encodeURIComponent(preferredEvType)}%0A*Doc Type:* ${encodeURIComponent(docType)}%0A*Preferred Pickup:* ${encodeURIComponent(pickupDate || 'Today')}%0A*Vehicle:* EVSmith Electric Scooter (2 Bikes Available)%0A*Pickup Hub:* Gajularamaram, Hyderabad`;

    setTimeout(() => {
      window.open(`https://wa.me/918275753239?text=${message}`, '_blank');
    }, 600);
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
                  Rent EVSmith Scooter
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  2 Bikes Available at Gajularamaram, Hyderabad
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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

                  {/* Delivery Service / Company Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Delivery Service / Company:
                    </label>
                    <select
                      value={deliveryService}
                      onChange={(e) => setDeliveryService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1e38] border border-slate-700 focus:border-[#38d430] text-sm text-white outline-none font-medium"
                    >
                      <option value="Swiggy">Swiggy (Instamart)</option>
                      <option value="Zomato">Zomato</option>
                      <option value="Rapido">Rapido</option>
                      <option value="Blinkit">Blinkit</option>
                      <option value="Zepto">Zepto</option>
                      <option value="JioMart">JioMart</option>
                      <option value="AJIO">AJIO</option>
                      <option value="Uber / Uber Eats">Uber / Uber Eats</option>
                      <option value="Ola / Ola Electric">Ola / Ola Electric</option>
                      <option value="Delhivery">Delhivery</option>
                      <option value="DTDC">DTDC</option>
                      <option value="Dunzo">Dunzo</option>
                      <option value="BigBasket / Tata Neu">BigBasket / Tata Neu</option>
                      <option value="Amazon Flex">Amazon Flex</option>
                      <option value="Flipkart / Flipkart Minutes">Flipkart / Flipkart Minutes</option>
                      <option value="Porter">Porter</option>
                      <option value="Shadowfax">Shadowfax</option>
                      <option value="Ecom Express">Ecom Express</option>
                      <option value="Personal Commute / Other">Personal Commute / Other</option>
                    </select>
                  </div>

                  {/* Work Location Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Work Location / Delivery Area:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kukatpally, HITEC City, Kondapur"
                      value={workLocation}
                      onChange={(e) => setWorkLocation(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1e38] border border-slate-700 focus:border-[#38d430] text-sm text-white outline-none"
                    />
                  </div>

                  {/* Preferred EV Type Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Preferred EV Type:
                    </label>
                    <select
                      value={preferredEvType}
                      onChange={(e) => setPreferredEvType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1e38] border border-slate-700 focus:border-[#38d430] text-sm text-white outline-none font-medium"
                    >
                      <option value="Swappable Vehicle (Swapping Station)">
                        Swappable Vehicle (Swapping Station)
                      </option>
                      <option value="Home Charge">
                        Home Charge
                      </option>
                    </select>
                  </div>

                  {/* Document Type & Pickup Date */}
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
                    <span className="font-extrabold font-mono">100% Refundable</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-[#38d430] hover:bg-[#42e83a] disabled:opacity-70 text-[#081426] font-extrabold text-base flex items-center justify-center gap-2 shadow-xl glow-green transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Saving Reservation...</span>
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-5 h-5" />
                        <span>Confirm & Connect on WhatsApp</span>
                      </>
                    )}
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
                  Redirecting to EVSmith WhatsApp team to finalize bike pickup details...
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
