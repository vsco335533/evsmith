import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Poppins } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EVSmith | Premium Electric Bike Rentals in Hyderabad',
  description:
    'Affordable Premium Electric Scooter Rentals in Hyderabad with 100 KM Range, 65 km/h Top Speed, 4H Fast Charging. Gajularamaram, Hyderabad.',
  keywords: [
    'EVSmith',
    'EV Rental Hyderabad',
    'Electric bike rental Hyderabad',
    'Electric scooter rental Gajularamaram Hyderabad',
    'Rent EV bike Hyderabad',
    'Delivery partner scooter rental',
    'Electric scooter weekly rental',
    'Gajularamaram EV bike rental',
  ],
  authors: [{ name: 'EVSmith' }],
  creator: 'EVSmith Technologies',
  publisher: 'EVSmith',
  metadataBase: new URL('https://evsmith.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EVSmith | Premium Electric Bike Rentals in Hyderabad',
    description:
      'Ride Electric. Ride Smart. Premium EV Scooter Rentals in Hyderabad. Zero Maintenance, High Battery Range.',
    url: 'https://evsmith.in',
    siteName: 'EVSmith Electric Bike Rentals',
    images: [
      {
        url: '/assets/logo_transparent.png',
        width: 640,
        height: 640,
        alt: 'EVSmith Logo',
      },
      {
        url: '/assets/scooter_mint.png',
        width: 1024,
        height: 711,
        alt: 'Premium Electric Scooter',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVSmith | Premium Electric Bike Rentals in Hyderabad',
    description:
      'Ride Electric. Ride Smart. Top Speed 65 km/h, 100 km Range. Rent for Daily Commute or Delivery in Hyderabad.',
    images: ['/assets/scooter_mint.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'EVSmith Electric Bike Rentals',
    image: 'https://evsmith.in/assets/logo_transparent.png',
    '@id': 'https://evsmith.in',
    url: 'https://evsmith.in',
    telephone: '+918275753239',
    priceRange: 'Rent Now',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gajularamaram',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500055',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.5256,
      longitude: 78.4184,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '20:00',
    },
    sameAs: ['https://wa.me/918275753239'],
  };

  const jsonLdProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'EVSmith Electric Scooter Rental',
    image: 'https://evsmith.in/assets/scooter_mint.png',
    description:
      'High-performance electric scooter with 100 KM range, 65 km/h top speed, and 4-hour fast charging available for weekly and monthly rental in Hyderabad.',
    brand: {
      '@type': 'Brand',
      name: 'EVSmith',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '2000',
      highPrice: '7800',
      offerCount: '2',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/assets/logo_transparent.png" type="image/png" />
        <meta name="theme-color" content="#081426" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${poppins.variable} antialiased selection:bg-[#38d430] selection:text-[#081426]`}
      >
        {children}
      </body>
    </html>
  );
}
