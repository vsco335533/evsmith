'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageSquare, Navigation, Clock, Sparkles } from 'lucide-react';

interface ContactProps {
  onOpenBooking: () => void;
}

export default function ContactSection({ onOpenBooking }: ContactProps) {
  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-cyber-grid overflow-hidden w-full">
      {/* Background radial ambient light */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#38d430]/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Full Edge-to-Edge Container */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38d430]/15 border border-[#38d430]/35 text-xs font-black text-[#38d430] uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Visit Hub or Contact
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] font-heading tracking-tight">
            Get in Touch & <span className="text-gradient-electric">Collect Your Bike</span>
          </h2>
          <p className="text-base sm:text-xl text-[var(--text-muted)] font-semibold">
            Visit our Gajularamaram Kailash Hills hub in Hyderabad or give us a call for instant reservation.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch w-full">
          
          {/* Left Column: Glass Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl border border-[#38d430]/40 flex flex-col justify-between shadow-2xl relative glow-green-lg w-full"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-black text-[#38d430] uppercase tracking-widest">
                  Hub Location Details
                </span>
                <span className="px-3 py-1 rounded-full bg-[#38d430]/20 text-[#38d430] text-xs font-black flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#38d430] animate-pulse"></span>
                  2 Bikes Ready
                </span>
              </div>

              <div className="space-y-6">
                
                {/* Contact Item 1: Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#38d430]/20 text-[#38d430] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider">Phone / Hotline</span>
                    <a
                      href="tel:8275753239"
                      className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] hover:text-[#38d430] transition-colors font-heading block mt-0.5"
                    >
                      +91 8275753239
                    </a>
                    <p className="text-xs text-[var(--text-muted)] mt-1 font-medium">Available 8:00 AM – 8:00 PM daily</p>
                  </div>
                </div>

                {/* Contact Item 2: Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#00f0ff]/20 text-[#00f0ff] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider">Hub Address</span>
                    <h3 className="text-xl font-black text-[var(--text-primary)] font-heading mt-0.5">
                      Gajularamaram, Kailash Hills
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mt-1 font-medium">Hyderabad, Telangana - 500055</p>
                  </div>
                </div>

                {/* Contact Item 3: Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-amber-400/20 text-amber-400 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider">Business Hours</span>
                    <h4 className="text-base font-black text-[var(--text-primary)] mt-0.5">Monday – Sunday</h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 font-medium">8:00 AM to 8:00 PM (Instant 5-Min Pickup)</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-10 pt-6 border-t border-[var(--card-border)] grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="tel:8275753239"
                className="px-4 py-3.5 rounded-xl bg-[#38d430] hover:bg-[#42e83a] text-[#081426] font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href="https://maps.google.com/?q=Gajularamaram+Kailash+Hills+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl glass-panel border border-[var(--card-border)] hover:border-[#38d430] text-[var(--text-primary)] hover:text-[#38d430] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-4 h-4" />
                <span>Directions</span>
              </a>

              <a
                href="https://wa.me/918275753239?text=Hi%20EV%20Smith,%20I%20want%20to%20rent%20the%20BGauss%20Oowah%20EX%20bike!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Google Maps Embed Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-panel rounded-3xl border border-[var(--card-border)] overflow-hidden shadow-2xl relative flex flex-col min-h-[420px] w-full"
          >
            <div className="p-4 glass-panel border-b border-[var(--card-border)] flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#38d430]" /> Interactive Map Marker
              </span>
              <span className="text-xs text-[#38d430] font-black">Gajularamaram, Kailash Hills</span>
            </div>

            <div className="w-full h-full min-h-[380px] relative">
              <iframe
                title="EV Smith Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15219.791559868735!2d78.4024346!3d17.5255479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c53e02bb2b%3A0x6bd6c74fb9aa827b!2sGajularamaram%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px]"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
