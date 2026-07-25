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
  title: 'EV Smith | Premium Electric Bike Rentals in Hyderabad | BGauss Oowah EX',
  description:
    'Affordable Premium Electric Scooter Rentals in Hyderabad. BGauss Oowah EX with 100 KM Range, 65 km/h Top Speed, 4H Fast Charging. Plans start at ₹2000/week. Gajularamaram, Kailash Hills, Hyderabad.',
  keywords: [
    'EV Smith',
    'EV Rental Hyderabad',
    'Electric bike rental Hyderabad',
    'Electric scooter rental Gajularamaram',
    'BGauss Oowah EX rental',
    'Rent EV bike Hyderabad',
    'Delivery partner scooter rental',
    'Electric scooter weekly rental',
    'Kailash Hills EV bike rental',
  ],
  authors: [{ name: 'EV Smith' }],
  creator: 'EV Smith Technologies',
  publisher: 'EV Smith',
  metadataBase: new URL('https://evsmith.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EV Smith | Premium Electric Bike Rentals in Hyderabad',
    description:
      'Ride Electric. Ride Smart. Premium EV Scooter Rentals in Hyderabad starting at ₹2000/week. Zero Maintenance, High Battery Range.',
    url: 'https://evsmith.in',
    siteName: 'EV Smith Electric Bike Rentals',
    images: [
      {
        url: '/assets/logo_transparent.png',
        width: 640,
        height: 640,
        alt: 'EV Smith Logo',
      },
      {
        url: '/assets/scooter_mint.png',
        width: 1024,
        height: 711,
        alt: 'BGauss Oowah EX Electric Scooter',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EV Smith | Premium Electric Bike Rentals in Hyderabad',
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
    name: 'EV Smith Electric Bike Rentals',
    image: 'https://evsmith.in/assets/logo_transparent.png',
    '@id': 'https://evsmith.in',
    url: 'https://evsmith.in',
    telephone: '+918275753239',
    priceRange: '₹2000 - ₹7500',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gajularamaram, Kailash Hills',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500055',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.5255,
      longitude: 78.4111,
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
    name: 'BGauss Oowah EX Electric Bike Rental',
    image: 'https://evsmith.in/assets/scooter_mint.png',
    description:
      'High-performance electric scooter with 65 km/h top speed, 100 km battery range, and 4-hour fast charging. Available for weekly and monthly rental in Hyderabad.',
    brand: {
      '@type': 'Brand',
      name: 'BGauss / EV Smith',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '2000',
      highPrice: '7500',
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
