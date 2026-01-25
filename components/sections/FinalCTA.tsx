'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Check, Mail, MessageSquare, Phone, CarFront, User } from 'lucide-react'
import { contactInfo } from '@/lib/content'
import { FadeIn } from '../animations/FadeIn'

export function FinalCTA() {
  const t = useTranslations('finalCTA')

  const driverBenefits = [
    t('forDrivers.benefits.digitalCard'),
    t('forDrivers.benefits.driverId'),
    t('forDrivers.benefits.donAccess'),
    t('forDrivers.benefits.directory'),
    t('forDrivers.benefits.community'),
    t('forDrivers.benefits.keepEarnings'),
  ]

  const riderBenefits = [
    t('forRiders.benefits.findDrivers'),
    t('forRiders.benefits.bookInstantly'),
    t('forRiders.benefits.saveDrivers'),
    t('forRiders.benefits.directBooking'),
    t('forRiders.benefits.betterRates'),
    t('forRiders.benefits.buildTrust'),
  ]

  return (
    <section id="signup" className="relative overflow-hidden bg-neutral-900 py-24 lg:py-32">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-accent-900/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative">
         <FadeIn>
           <div className="mb-16 text-center">
             <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
               {t('heading')}
             </h2>
             <p className="mx-auto max-w-2xl text-lg text-neutral-400 sm:text-xl">
               {t('description')}
             </p>
           </div>
         </FadeIn>

        {/* Benefits Grid */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:gap-12 justify-items-center">
          {/* Drivers Card */}
          <FadeIn delay={0.1} className="h-full w-full max-w-lg lg:max-w-none">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-white/10 sm:p-10">
              <div>
                <div className="mb-6 flex items-center gap-4">
                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                     <CarFront className="h-6 w-6" />
                   </div>
                   <h3 className="text-2xl font-bold text-neutral-900">{t('forDrivers.title')}</h3>
                 </div>
                
                <ul className="mb-8 space-y-4">
                  {driverBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-success-100 text-success-600">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-neutral-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

               <a href="https://www.rideshareguides.com/" target="_blank" rel="noopener noreferrer" className="w-full">
                 <Button
                   variant="primary"
                   size="lg"
                   fullWidth
                   className="w-full"
                 >
                   {t('forDrivers.cta')}
                 </Button>
               </a>
            </div>
          </FadeIn>

          {/* Riders Card */}
          <FadeIn delay={0.2} className="h-full w-full max-w-lg lg:max-w-none">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white/5 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm sm:p-10">
              <div>
                <div className="mb-6 flex items-center gap-4">
                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
                     <User className="h-6 w-6" />
                   </div>
                   <h3 className="text-2xl font-bold text-white">{t('forRiders.title')}</h3>
                 </div>

                <ul className="mb-8 space-y-4">
                  {riderBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-accent-400">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-neutral-200">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

               <div className="space-y-3">
                 <a href="https://BookTheDon.com" target="_blank" rel="noopener noreferrer" className="block">
                   <Button
                     variant="secondary"
                     size="lg"
                     fullWidth
                     className="w-full border-accent-500 bg-accent-500 text-white hover:bg-accent-600 hover:border-accent-600"
                   >
                     {t('forRiders.bookRide')}
                   </Button>
                 </a>
                 <a href="https://www.rideshareguides.com/driver" target="_blank" rel="noopener noreferrer" className="w-full">
                   <Button
                     variant="secondary"
                     size="lg"
                     fullWidth
                     className="w-full border-neutral-700 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white"
                   >
                     {t('forRiders.findDriver')}
                   </Button>
                 </a>
               </div>
            </div>
          </FadeIn>
         </div>

         {/* QR Code Section */}
         <FadeIn delay={0.25}>
           <div className="mb-20 flex flex-col items-center">
             <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-neutral-200">
               <Image
                 src="/images/qr_code_links/rideshareguides.com.png"
                 alt="RideShare Guides QR Code"
                 width={300}
                 height={300}
                 className="w-56 h-56 object-contain"
               />
             </div>
             <p className="mt-6 text-sm text-neutral-300 text-center max-w-xs">
               Scan to join RideShare Guides today
             </p>
           </div>
         </FadeIn>

         {/* Support Footer */}
         <FadeIn delay={0.3}>
           <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 text-center backdrop-blur">
             <h3 className="mb-6 text-xl font-semibold text-white">{t('support.title')}</h3>
             <div className="flex flex-wrap justify-center gap-8 md:gap-16">
               <a href={`mailto:${contactInfo.email}`} className="group flex items-center gap-3 transition-colors hover:text-primary-400">
                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-colors group-hover:bg-primary-900/50 group-hover:text-primary-400">
                   <Mail className="h-5 w-5" />
                 </div>
                 <div className="text-left">
                   <p className="text-sm font-medium text-white">{t('support.emailUs')}</p>
                   <p className="text-xs text-neutral-400">{contactInfo.email}</p>
                 </div>
                </a>
                
                <div className="group flex items-center gap-3">
                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-400">
                   <Phone className="h-5 w-5" />
                 </div>
                 <div className="text-left">
                   <p className="text-sm font-medium text-white">{t('support.textSupport')}</p>
                   <p className="text-xs text-neutral-400">{t('support.available247')}</p>
                 </div>
               </div>
             </div>
           </div>
         </FadeIn>
      </Container>
    </section>
  )
}
