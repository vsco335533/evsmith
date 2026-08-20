'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin } from 'lucide-react';
import Image from 'next/image';

/* ─── Inline SVG brand icons ──────────────────────────────────────────────── */

function SwiggyIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="56" height="56" rx="14" fill="#FC8019"/>
      <text x="28" y="37" textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif" fontSize="28" fontWeight="900">S</text>
    </svg>
  );
}

function ZomatoIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="56" height="56" rx="14" fill="#E23744"/>
      <text x="28" y="38" textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif" fontSize="28" fontWeight="900">Z</text>
    </svg>
  );
}

function RapidoIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="56" height="56" rx="14" fill="#1a1a1a"/>
      {/* Rapido yellow lightning bolt */}
      <polygon points="32,10 20,30 27,30 24,46 36,26 29,26" fill="#FFCF44"/>
    </svg>
  );
}

function BlinkitIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="56" height="56" rx="14" fill="#F8CB46"/>
      {/* Lightning bolt */}
      <polygon points="33,8 19,31 27,31 23,48 37,25 29,25" fill="#1a1a1a"/>
    </svg>
  );
}

function ZeptoIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="56" height="56" rx="14" fill="#7B2FF2"/>
      <text x="28" y="38" textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif" fontSize="26" fontWeight="900">Z</text>
    </svg>
  );
}

function DunzoIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="56" height="56" rx="14" fill="#00D290"/>
      <text x="28" y="38" textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif" fontSize="26" fontWeight="900">D</text>
    </svg>
  );
}

function BigBasketIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="56" height="56" rx="14" fill="#84C225"/>
      {/* Basket icon */}
      <path d="M14 36 L18 22 L38 22 L42 36 Z" fill="white" opacity="0.9"/>
      <path d="M20 22 L24 14" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M36 22 L32 14" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <line x1="22" y1="26" x2="22" y2="34" stroke="#84C225" strokeWidth="2"/>
      <line x1="28" y1="26" x2="28" y2="34" stroke="#84C225" strokeWidth="2"/>
      <line x1="34" y1="26" x2="34" y2="34" stroke="#84C225" strokeWidth="2"/>
    </svg>
  );
}

function AmazonFlexIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="56" height="56" rx="14" fill="#131921"/>
      {/* Amazon smile arrow */}
      <text x="28" y="30" textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900">amazon</text>
      <path d="M16 38 Q28 45 40 38" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <polygon points="38,34 40,38 44,36" fill="#FF9900"/>
    </svg>
  );
}

function FlipkartIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="56" height="56" rx="14" fill="#2874F0"/>
      {/* Flipkart F with spark */}
      <text x="24" y="38" textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif" fontSize="28" fontWeight="900">F</text>
      <circle cx="38" cy="14" r="5" fill="#FFE500"/>
      <line x1="38" y1="8" x2="38" y2="5" stroke="#FFE500" strokeWidth="2"/>
      <line x1="44" y1="14" x2="47" y2="14" stroke="#FFE500" strokeWidth="2"/>
      <line x1="42" y1="10" x2="44" y2="8" stroke="#FFE500" strokeWidth="2"/>
    </svg>
  );
}

function PorterIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="56" height="56" rx="14" fill="#1B2A3B"/>
      {/* Truck silhouette */}
      <rect x="8" y="22" width="26" height="18" rx="2" fill="#5DADE2"/>
      <rect x="34" y="28" width="14" height="12" rx="2" fill="#5DADE2"/>
      <polygon points="34,28 34,22 44,28" fill="#85C1E9"/>
      <circle cx="16" cy="41" r="4" fill="#1B2A3B" stroke="#5DADE2" strokeWidth="2"/>
      <circle cx="38" cy="41" r="4" fill="#1B2A3B" stroke="#5DADE2" strokeWidth="2"/>
    </svg>
  );
}

function ShadowfaxIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="56" height="56" rx="14" fill="#FF6B35"/>
      <text x="28" y="36" textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif" fontSize="17" fontWeight="900">SF</text>
    </svg>
  );
}

function EcomExpressIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="56" height="56" rx="14" fill="#0072CE"/>
      <text x="28" y="36" textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900">ECOM</text>
    </svg>
  );
}

/* ─── Partner data ────────────────────────────────────────────────────────── */

interface Partner {
  name: string;
  tagline: string;
  accent: string;
  image?: string;
  Icon?: () => React.ReactElement;
}

const PARTNERS: Partner[] = [
  { name: 'Swiggy',        tagline: 'Food Delivery',       accent: '#FC8019', image: '/instamart.png', Icon: SwiggyIcon },
  { name: 'Zomato',        tagline: 'Food Delivery',       accent: '#E23744', image: '/zomato.png', Icon: ZomatoIcon },
  { name: 'Rapido',        tagline: 'Bike Taxi',           accent: '#FFCF44', image: '/rapido.png', Icon: RapidoIcon },
  { name: 'Blinkit',       tagline: 'Instant Delivery',    accent: '#F8CB46', image: '/blinkit.png', Icon: BlinkitIcon },
  { name: 'Zepto',         tagline: '10-Min Delivery',     accent: '#7B2FF2', image: '/zepto.png', Icon: ZeptoIcon },
  { name: 'Dunzo',         tagline: 'Quick Commerce',      accent: '#00D290', image: '/dunzo.png', Icon: DunzoIcon },
  { name: 'BigBasket',     tagline: 'Grocery Delivery',    accent: '#84C225', image: '/bigbasket.png', Icon: BigBasketIcon },
  { name: 'Amazon Flex',   tagline: 'Package Delivery',    accent: '#FF9900', image: '/amazon.png', Icon: AmazonFlexIcon },
  { name: 'Flipkart',      tagline: 'E-Commerce',          accent: '#2874F0', image: '/flipcart.png', Icon: FlipkartIcon },
  { name: 'Porter',        tagline: 'Logistics',           accent: '#5DADE2', image: '/porter.png', Icon: PorterIcon },
  { name: 'Shadowfax',     tagline: 'Last Mile Delivery',  accent: '#FF6B35', image: '/shadow_fox.png', Icon: ShadowfaxIcon },
  { name: 'Ecom Express',  tagline: 'Courier Delivery',    accent: '#0072CE', image: '/ecom_express.png', Icon: EcomExpressIcon },
];

const ROW1 = [...PARTNERS, ...PARTNERS];
const ROW2 = [...[...PARTNERS].reverse(), ...[...PARTNERS].reverse()];

function PartnerCard({ partner }: { partner: Partner }) {
  const { Icon, image } = partner;
  return (
    <div className="flex-shrink-0 w-[160px] sm:w-[220px] md:w-[260px] glass-panel rounded-xl sm:rounded-2xl border border-[var(--card-border)] p-2.5 sm:p-4 md:p-5 flex items-center gap-2.5 sm:gap-4 transition-all duration-300 group cursor-default hover:border-[#38d430]/50">
      {/* App icon tile */}
      <div
        className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-110 relative bg-white"
        style={{ boxShadow: `0 4px 14px -4px ${partner.accent}66` }}
      >
        {image ? (
          <Image src={image} alt={partner.name} fill className="object-cover" sizes="(max-width: 640px) 36px, 56px" />
        ) : (
          Icon && <Icon />
        )}
      </div>

      <div className="min-w-0">
        <h4 className="text-xs sm:text-sm md:text-base font-black text-[var(--text-primary)] truncate group-hover:text-[#38d430] transition-colors duration-300">
          {partner.name}
        </h4>
        <p className="text-[10px] sm:text-[11px] md:text-xs font-bold truncate mt-0.5" style={{ color: partner.accent }}>
          {partner.tagline}
        </p>
      </div>
    </div>
  );
}

/* ─── Main section ────────────────────────────────────────────────────────── */

export default function TrustedPartners() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-cyber-grid w-full">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#38d430]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00f0ff]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12 sm:mb-16 px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38d430]/15 border border-[#38d430]/35 text-xs font-black text-[#38d430] uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Trusted By Delivery Champions
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] font-heading tracking-tight leading-tight">
            Powering <span className="text-gradient-electric">All Delivery</span> Partners
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] font-semibold max-w-2xl mx-auto">
            Hyderabad&apos;s top delivery executives across every major platform choose EVSmith.
          </p>
        </motion.div>

        {/* Row 1 — scrolls left */}
        <div className="relative w-full mb-4 overflow-hidden marquee-mask">
          <motion.div
            className="flex gap-4 w-max py-2"
            animate={{ x: ['0px', '-50%'] }}
            transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
          >
            {ROW1.map((p, i) => <PartnerCard key={`r1-${i}`} partner={p} />)}
          </motion.div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative w-full overflow-hidden marquee-mask">
          <motion.div
            className="flex gap-4 w-max py-2"
            animate={{ x: ['-50%', '0px'] }}
            transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
          >
            {ROW2.map((p, i) => <PartnerCard key={`r2-${i}`} partner={p} />)}
          </motion.div>
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-4"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#38d430]" />
            <span className="text-sm sm:text-base font-black text-[var(--text-primary)]">Hyderabad</span>
          </div>
          <div className="h-6 w-px bg-[var(--card-border)] hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#38d430] animate-pulse" />
            <span className="text-sm font-bold text-[#38d430]">100+ Active Delivery Riders</span>
          </div>
          <div className="h-6 w-px bg-[var(--card-border)] hidden sm:block" />
          <span className="text-sm font-black text-[var(--text-muted)]">Zero Petrol • 100 KM Range • Zero Maintenance</span>
        </motion.div>

      </div>
    </section>
  );
}
