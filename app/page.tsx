import { Header } from '@/components/sections/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { DigitalBusinessCard } from '@/components/sections/DigitalBusinessCard'
import { CommunityInfluencers } from '@/components/sections/CommunityInfluencers'
import { DonReservations } from '@/components/sections/DonReservations'
import { DriversDirectory } from '@/components/sections/DriversDirectory'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { MembershipComparison } from '@/components/sections/MembershipComparison'
import { Testimonials } from '@/components/sections/Testimonials'
import { ComingSoon } from '@/components/sections/ComingSoon'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RideShare Guides',
    alternateName: 'RSG',
    url: 'https://rideshareguides.com',
    logo: 'https://rideshareguides.com/images/logos/rsg-logo.svg',
    description:
      'Professional rideshare platform connecting drivers and riders directly. Free digital business cards, Personal Driver ID numbers, and The Don Reservations booking system.',
    sameAs: [
      'https://www.facebook.com/rideshareguides',
      'https://www.youtube.com/@rideshareguides',
      'https://www.instagram.com/rideshareguides',
      'https://www.tiktok.com/@rideshareguides',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@rideshareguides.com',
      contactType: 'Customer Support',
      availableLanguage: 'English',
    },
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      <main className="relative min-h-screen">
       <HeroSection />
         <DigitalBusinessCard />
         <MembershipComparison />
         <CommunityInfluencers />
         <DonReservations />
         <DriversDirectory />
         <HowItWorks />
         <Testimonials />
        <ComingSoon />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
