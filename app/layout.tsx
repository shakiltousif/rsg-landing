import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Lexend } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { LanguagePromptBanner } from '@/components/ui/LanguagePromptBanner';
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rideshareguides.com'),
  title: {
    default: 'RSG - Professional Rideshare Business Platform | Free Digital Business Card & Personal Driver ID',
    template: '%s | RideShare Guides'
  },
  description: 'Join thousands of professional drivers and riders building direct connections. Get your FREE Digital Business Card, Personal Driver ID #, and access to The Don Reservations app. Keep 100% of your earnings. Book at BookTheDon.com',
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
    'BookTheDon',
    'independent contractor driver',
    'rideshare platform',
    'driver network',
    'booking app',
    'driver directory',
    'earn 100 percent',
    'no platform fees',
  ],
  authors: [{ name: 'RideShare Guides' }],
  creator: 'RideShare Guides',
  publisher: 'RideShare Guides',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code
  },
  alternates: {
    canonical: 'https://rideshareguides.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rideshareguides.com',
    siteName: 'RideShare Guides',
    title: 'RSG - Professional Rideshare Business Platform | Free Digital Business Card & Personal Driver ID',
    description: 'Build your professional rideshare business with FREE digital business card, Personal Driver ID #, and direct booking system. Keep 100% of your earnings. Available on iOS & Android.',
    images: [
      {
        url: '/images/og-image-large.png',
        width: 1200,
        height: 630,
        alt: 'RSG Platform - Digital Business Cards for Professional Drivers',
        type: 'image/png',
      },
      {
        url: '/images/og-image.png',
        width: 512,
        height: 512,
        alt: 'RSG Logo - Professional Rideshare Community',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rideshareguides',
    creator: '@rideshareguides',
    title: 'RSG - Your Professional Transportation Business Starts Today',
    description: 'Join thousands of drivers keeping 100% of earnings with direct bookings. Free membership, digital business card, and Personal Driver ID #. Book rides at BookTheDon.com',
    images: ['/images/og-image-large.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'RideShare Guides',
  },
  category: 'business',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#1F2937' },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${lexend.variable}`}>
      <head>
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Essential Meta Tags for SEO */}
        <meta property="og:image" content="https://rsg-landing-prod.vercel.app/images/og-image-large.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image" content="https://rsg-landing-prod.vercel.app/images/og-image-large.png" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for third-party services */}
        <link rel="dns-prefetch" href="https://BookTheDon.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/images/hero-dashboard.png" />
        <link rel="preload" as="image" href="/images/logos/rsg-logo.png" />
        <link rel="preload" as="image" href="/images/logos/the-don-logo.jpeg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1F2937" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)" />
        
        {/* Mobile app specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="RSG" />
        
        {/* Additional SEO meta tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="RideShare Guides" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              'name': 'RideShare Guides',
              'url': 'https://rideshareguides.com',
              'description': 'Professional rideshare business platform with digital business cards, personal driver IDs, and direct booking system.',
              'applicationCategory': 'BusinessApplication',
              'offers': {
                '@type': 'Offer',
                'price': '0',
                'priceCurrency': 'USD',
                'description': 'Free membership'
              },
              'author': {
                '@type': 'Organization',
                'name': 'RideShare Guides',
                'url': 'https://rideshareguides.com'
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'RideShare Guides',
              'alternateName': 'RSG',
              'url': 'https://rideshareguides.com',
              'logo': 'https://rideshareguides.com/images/logos/rsg-logo.png',
              'description': 'Professional platform for rideshare drivers and riders to build direct connections.',
              'email': 'support@rideshareguides.com',
              'sameAs': [
                'https://www.facebook.com/rideshareguides',
                'https://www.twitter.com/rideshareguides',
                'https://www.youtube.com/rideshareguides',
                'https://www.instagram.com/rideshareguides'
              ],
              'contactPoint': {
                '@type': 'ContactPoint',
                'contactType': 'Customer Support',
                'url': 'https://rideshareguides.com#contact',
                'availableLanguage': 'en'
              }
            })
          }}
        />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://rideshareguides.com'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Features',
                  'item': 'https://rideshareguides.com#features'
                },
                {
                  '@type': 'ListItem',
                  'position': 3,
                  'name': 'Book a Ride',
                  'item': 'https://BookTheDon.com'
                }
              ]
            })
          }}
        />
        
        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': 'What is RideShare Guides?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'RideShare Guides is a professional platform for rideshare drivers and riders to build direct connections with free digital business cards, personal driver IDs, and The Don Reservations system.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'Is RideShare Guides free?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes, RideShare Guides membership is completely free. You get a digital business card, personal driver ID, directory listing, and access to The Don Reservations system at no cost.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'Where can I book a ride?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'You can book rides at BookTheDon.com with verified professional drivers. The app is available on iOS and Android app stores.'
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
          <LanguagePromptBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
