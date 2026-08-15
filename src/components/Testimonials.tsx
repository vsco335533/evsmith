'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rahul',
      role: 'Daily Commuter, Kukatpally',
      rating: 5,
      comment: 'Affordable and smooth experience. Rented for a month to commute to office. Saved significantly on petrol!',
      badge: 'Verified Rider',
    },
    {
      name: 'Anjali',
      role: 'Software Engineer, HITEC City',
      rating: 5,
      comment: 'Perfect for office commute! Battery range is genuine 100km. I charge once every 2-3 days.',
      badge: 'Verified Rider',
    },
    {
      name: 'Arun',
      role: 'Delivery Executive, Hyderabad',
      rating: 5,
      comment: 'Battery backup is excellent. Picked up the bike in 10 minutes flat. Zero maintenance stress!',
      badge: 'Verified Delivery Partner',
    },
    {
      name: 'Suresh V.',
      role: 'College Student, Pragathi Nagar',
      rating: 5,
      comment: 'Super fast deposit refund when I returned the bike! Staff at Gajularamaram hub are very helpful.',
      badge: 'Verified Student',
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-cyber-grid overflow-hidden">
      {/* Glow orb */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#38d430]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38d430]/15 border border-[#38d430]/35 text-xs font-black text-[#38d430] uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black theme-text-primary font-heading tracking-tight">
            Loved by <span className="text-gradient-electric">Riders across Hyderabad</span>
          </h2>
          <p className="text-base sm:text-xl theme-text-muted font-medium">
            Read what our daily commuters, students, and delivery partners say about EV Smith.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-7 rounded-3xl border border-slate-700/50 hover:border-[#38d430]/60 transition-all duration-300 glass-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Top Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#38d430]/40" />
                </div>

                <p className="text-sm sm:text-base theme-text-primary leading-relaxed italic mb-6 font-medium">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-black theme-text-primary font-heading">{rev.name}</h3>
                  <p className="text-xs theme-text-muted font-medium">{rev.role}</p>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#38d430]/15 text-[#38d430] text-[10px] font-black flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
