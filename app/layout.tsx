import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rideshareguides.com'),
  title: {
    default: 'RSG - Professional Rideshare Business Platform | Free Digital Business Card',
    template: '%s | RideShare Guides'
  },
  description: 'Join thousands of professional drivers and riders building direct connections. Get your FREE Digital Business Card, Personal Driver ID #, and access to The Don Reservations system. Keep 100% of your earnings.',
  keywords: [
    'rideshare business',
    'digital business card',
    'driver reservations',
    'personal driver ID',
    'gig economy platform',
    'direct bookings',
    'rideshare directory',
    'professional drivers',
    'The Don Reservations',
  ],
  authors: [{ name: 'RideShare Guides' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rideshareguides.com',
    siteName: 'RideShare Guides',
    title: 'RSG - Professional Rideshare Business Platform',
    description: 'Build your professional rideshare business with FREE digital business card, Personal Driver ID #, and direct booking system. Keep 100% of your earnings.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RSG Platform - Digital Business Cards for Professional Drivers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RSG - Your Professional Rideshare Business Starts Here',
    description: 'Join thousands of drivers keeping 100% of earnings with direct bookings. Free membership, digital business card, and Personal Driver ID #.',
    images: ['/images/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
