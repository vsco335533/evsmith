'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Search } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'What documents are required for renting?',
      a: 'You need an Original Aadhaar Card, PAN Card, or Driving Licence along with a copy of a local Hyderabad Electricity Bill for address verification. Document approval takes less than 5 minutes!',
    },
    {
      q: 'How much is the security deposit and when is it refunded?',
      a: 'The security deposit is 100% refundable immediately upon returning the electric bike in good condition, via UPI bank transfer or cash.',
    },

    {
      q: 'What happens if the battery becomes low while riding?',
      a: 'Our electric scooters come with a single removable battery pack that can be charged at any regular 15A home or shop socket using the included fast charger. Additionally, we provide instant battery swap support at our Gajularamaram, Hyderabad hub.',
    },
    {
      q: 'Can I extend my rental duration easily?',
      a: 'Yes, absolutely! You can extend your rental plan anytime via WhatsApp or phone call before your current plan expires without any penalty.',
    },
    {
      q: 'Are delivery partners (Swiggy, Zomato, Rapido) allowed to rent?',
      a: 'Yes! Our electric scooters are highly popular among delivery champions in Hyderabad due to 100 KM range, zero petrol costs, and heavy-duty chassis.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-cyber-grid overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38d430]/15 border border-[#38d430]/35 text-xs font-black text-[#38d430] uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-black theme-text-primary font-heading tracking-tight">
            Got <span className="text-gradient-electric">Questions?</span> We Have Answers.
          </h2>
          <p className="text-base sm:text-lg theme-text-muted font-medium">
            Everything you need to know about renting EV Smith bikes in Hyderabad.
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="relative mb-8 max-w-md mx-auto">
          <Search className="w-4 h-4 theme-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search FAQs (e.g. deposit, documents, battery)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl glass-panel border border-slate-700/60 focus:border-[#38d430] text-sm theme-text-primary placeholder:text-slate-500 outline-none transition-colors"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel rounded-2xl border border-slate-700/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold theme-text-primary hover:text-[#38d430] transition-colors"
                >
                  <span className="text-base sm:text-lg font-heading">{faq.q}</span>
                  <div
                    className={`p-2 rounded-xl glass-panel text-[#38d430] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#38d430] text-[#081426]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm sm:text-base theme-text-muted leading-relaxed border-t border-slate-700/40 pt-4 font-medium"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
