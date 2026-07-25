'use client';

import React, { useState } from 'react';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyEvSmith from '@/components/WhyEvSmith';
import FeaturedBike from '@/components/FeaturedBike';
import PricingCalculator from '@/components/PricingCalculator';
import DepositAndDocs from '@/components/DepositAndDocs';
import WhyRentVsBuy from '@/components/WhyRentVsBuy';
import BatteryTech from '@/components/BatteryTech';
import BookingProcess from '@/components/BookingProcess';
import Testimonials from '@/components/Testimonials';
import FAQAccordion from '@/components/FAQAccordion';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import LightboxModal from '@/components/LightboxModal';
import FloatingControls from '@/components/FloatingControls';

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('monthly');

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState('/assets/scooter_mint.png');

  const handleOpenBooking = (plan: string = 'monthly') => {
    setSelectedPlan(plan);
    setBookingModalOpen(true);
  };

  const handleOpenLightbox = (src: string) => {
    setLightboxImg(src);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 relative">
      {/* High-Voltage Startup Preloader */}
      <Preloader />

      {/* Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} onOpenLightbox={handleOpenLightbox} />

      {/* Why EV Smith */}
      <WhyEvSmith />

      {/* Featured Bike: BGauss Oowah EX */}
      <FeaturedBike onOpenBooking={handleOpenBooking} onOpenLightbox={handleOpenLightbox} />

      {/* Pricing Cards & Interactive EV Cost Calculator */}
      <PricingCalculator onOpenBooking={handleOpenBooking} />

      {/* Security Deposit & Required Documents Checklist */}
      <DepositAndDocs onOpenBooking={() => handleOpenBooking('monthly')} />

      {/* Why Rent Instead of Buy Comparison */}
      <WhyRentVsBuy />

      {/* Battery Technology Section */}
      <BatteryTech />

      {/* 5-Step Timeline Booking Process */}
      <BookingProcess onOpenBooking={() => handleOpenBooking('weekly')} />

      {/* Verified Customer Reviews */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FAQAccordion />

      {/* Contact Section & Google Maps Embed */}
      <ContactSection onOpenBooking={() => handleOpenBooking('monthly')} />

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        selectedPlanId={selectedPlan}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Image Lightbox Inspector Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        imageSrc={lightboxImg}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Sticky & Floating Controls */}
      <FloatingControls onOpenBooking={() => handleOpenBooking('weekly')} />
    </main>
  );
}
