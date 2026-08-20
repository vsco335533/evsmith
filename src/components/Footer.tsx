'use client';

import React from 'react';
import { Zap, MapPin, Phone, ShieldCheck } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--card-border)] text-[var(--text-muted)] pt-16 pb-24 md:pb-12 relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#38d430]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 relative z-10 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--card-border)]">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <a href="#">
              <BrandLogo size="lg" />
            </a>

            <p className="text-sm text-[var(--text-muted)] max-w-sm leading-relaxed font-medium pt-2">
              Hyderabad’s premier electric scooter rental platform. Ride high-performance electric scooters with 100 KM range, 65 km/h top speed, zero petrol costs, and 100% refundable deposit.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#38d430] font-black pt-1">
              <Zap className="w-4 h-4 fill-current text-[#38d430]" />
              <span className="text-[#38d430]">Ride Electric. Ride Smart.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-[var(--text-primary)] uppercase tracking-wider font-heading">Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="#bike" className="text-[var(--text-muted)] hover:text-[#38d430] transition-colors">Electric Scooter Specs</a></li>
              <li><a href="#why-us" className="text-[var(--text-muted)] hover:text-[#38d430] transition-colors">Why EVSmith</a></li>
              <li><a href="#documents" className="text-[var(--text-muted)] hover:text-[#38d430] transition-colors">Required Documents</a></li>
              <li><a href="#process" className="text-[var(--text-muted)] hover:text-[#38d430] transition-colors">5-Step Booking Process</a></li>
              <li><a href="#faq" className="text-[var(--text-muted)] hover:text-[#38d430] transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Location & Support */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-black text-[var(--text-primary)] uppercase tracking-wider font-heading">Hub Location</h4>
            <div className="space-y-2.5 text-sm text-[var(--text-muted)] font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#38d430] shrink-0 mt-0.5" />
                <span className="text-[var(--text-muted)]">Gajularamaram, Hyderabad, Telangana - 500055</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#38d430] shrink-0" />
                <a href="tel:8275753239" className="hover:text-[#38d430] transition-colors font-mono font-bold text-[var(--text-primary)]">+91 8275753239</a>
              </p>
              <div className="pt-2 text-xs text-[#38d430] flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>2 Bikes Available for Immediate Pickup</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] font-medium gap-4">
          <p>© 2026 EVSmith. All rights reserved. Designed for Premium EV Rentals in Hyderabad.</p>
          <div className="flex items-center gap-6">
            <a href="#faq" className="text-[var(--text-muted)] hover:text-[#38d430] transition-colors">Privacy Policy</a>
            <a href="#faq" className="text-[var(--text-muted)] hover:text-[#38d430] transition-colors">Terms of Service</a>
            <a href="#contact" className="text-[var(--text-muted)] hover:text-[#38d430] transition-colors">Local Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
