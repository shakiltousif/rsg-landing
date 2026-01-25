'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { FadeIn } from '../animations/FadeIn'
import { Building2, Hash, Zap, CheckCircle2, Smartphone, Apple } from 'lucide-react'

export function DonReservations() {
  const t = useTranslations('donReservations')

  return (
    <section className="py-10 lg:py-24 bg-neutral-50">
      <Container>
        <FadeIn>
          <div className="text-center mb-8">
            <div className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">
              {t('eyebrow')}
            </div>
            {/* Logo as Header */}
            <div className="mb-6">
              <Image
                src="/images/logos/the-don-logo.jpeg"
                alt="The Don - The Drivers Owner's Network"
                width={400}
                height={200}
                className="mx-auto rounded-xl"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">
              {t('heading')}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-medium mb-4">
              {t('subheading')}
            </p>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-neutral-600">
              {t('description')}
            </p>
          </div>
        </FadeIn>

        {/* Download Buttons */}
        <FadeIn delay={0.1}>
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://apps.apple.com/app/don-reservations" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex transition-transform hover:scale-105"
              >
                <Image
                  src="/images/badges/app-store-badge.png"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="h-auto w-auto"
                />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.donreservations" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex transition-transform hover:scale-105"
              >
                <Image
                  src="/images/badges/play-store-badge.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="h-auto w-auto"
                />
              </a>
            </div>

            {/* QR Codes for App Downloads */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="rounded-2xl bg-white p-4 shadow-lg ring-1 ring-neutral-200 mb-2">
                  <Image
                    src="/images/qr_code_links/don_driver_app_link_app_store.png"
                    alt="Download The Don on App Store"
                    width={140}
                    height={140}
                    className="w-36 h-36 object-contain"
                  />
                </div>
                <p className="text-xs text-neutral-600">iOS App</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-2xl bg-white p-4 shadow-lg ring-1 ring-neutral-200 mb-2">
                  <Image
                    src="/images/qr_code_links/driver_app_link_playstore.png"
                    alt="Download The Don on Google Play"
                    width={140}
                    height={140}
                    className="w-36 h-36 object-contain"
                  />
                </div>
                <p className="text-xs text-neutral-600">Android App</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Key Points & Process */}
          <div className="space-y-10">
            <div className="space-y-8">
              {(['buildBusiness', 'secureId', 'familiarTech'] as const).map((key, index) => {
                const icons = [Building2, Hash, Zap]
                const Icon = icons[index]

                return (
                  <FadeIn key={index} delay={0.1 * (index + 1)}>
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-neutral-100 text-primary-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-neutral-900">
                          {t(`whyYouNeedIt.${key}.title`)}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">{t(`whyYouNeedIt.${key}.description`)}</p>
                      </div>
                    </div>
                  </FadeIn>
                )
              })}
            </div>

            {/* How to Get Started Card */}
            <FadeIn delay={0.4}>
              <Card variant="elevated" className="bg-neutral-900 text-white p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 blur-3xl rounded-full" />
                <h3 className="mb-6 text-xl font-bold text-white relative z-10">{t('howToGetStarted')}</h3>
                <div className="space-y-4 relative z-10">
                  {(['step1', 'step2', 'step3', 'step4', 'step5'] as const).map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold shadow-lg shadow-primary-900/20">
                        {index + 1}
                      </div>
                      <p className="text-sm text-neutral-300 pt-0.5">{t(`steps.${step}`)}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>

            {/* Disclaimer */}
            <FadeIn delay={0.5}>
              <div className="rounded-xl bg-accent-50 p-4 border border-accent-100 flex gap-3">
                 <CheckCircle2 className="h-5 w-5 text-accent-600 flex-shrink-0 mt-0.5" />
                 <p className="text-sm font-medium text-accent-900">
                  {t('disclaimer')}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: App Preview Mockup */}
          <FadeIn delay={0.3} className="relative">
             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] rounded-full bg-primary-100/50 blur-3xl pointer-events-none" />
             
             <div className="relative mx-auto w-full max-w-[320px]">
                {/* Phone Frame */}
                <div className="relative z-10 mx-auto w-full overflow-hidden rounded-[3rem] border-[10px] border-neutral-900 bg-neutral-900 shadow-2xl">
                   {/* Notch */}
                   <div className="absolute top-0 left-1/2 h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-900 z-20" />
                   
                   {/* App Image */}
                   <div className="relative aspect-[9/19] w-full bg-white">
                      <Image
                        src="/images/mockups/don-reservations-mobile.png"
                        alt="The Don Reservations App Interface"
                        fill
                        className="object-cover"
                        priority
                      />
                   </div>
                </div>
             </div>

             <div className="mt-12 text-center lg:text-left space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" className="shadow-xl" href="#signup">
                    {t('getDriverId')}
                  </Button>
                  <a href="https://BookTheDon.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                      {t('bookRideNow')}
                    </Button>
                  </a>
                </div>
                <p className="text-center text-sm text-neutral-600">
                  <span className="font-semibold">{t('ridersNote')}</span>{' '}
                  <a href="https://BookTheDon.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-medium">
                    BookTheDon.com
                  </a>
                </p>
             </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}