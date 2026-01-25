'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Tabs } from '../ui/Tabs'
import { Check, Search, MapPin, Star } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'

export function DriversDirectory() {
  const t = useTranslations('driversDirectory')
  const common = useTranslations('common')

  const driverBenefits = ['freeProfile', 'showcase', 'ratings', 'driverId', 'availability', 'connect']

  const driverTab = (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Benefits List */}
        <div className="space-y-6">
          <h3 className="text-4xl font-black text-neutral-900 sm:text-5xl lg:text-6xl">
            {t('forDrivers.title')}
          </h3>
          <div className="space-y-4">
            {driverBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-success-100">
                  <Check className="h-3 w-3 text-success-600" />
                </div>
                <span className="text-base text-neutral-700">{t(`forDrivers.benefits.${benefit}`)}</span>
              </div>
            ))}
          </div>
           <a href="https://rideshareguides.com/driver" target="_blank" rel="noopener noreferrer">
             <Button variant="primary" size="lg">
               {t('forDrivers.cta')}
             </Button>
           </a>
        </div>

        {/* Directory Preview */}
        <div className="flex items-center justify-center">
          <div className="overflow-hidden rounded-xl shadow-2xl ring-1 ring-neutral-200">
            <Image
              src="/images/mockups/directory-desktop.png"
              alt="RSG Drivers Directory Interface"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )

  const riderTab = (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-neutral-900">
        {t('forRiders.title')}
      </h3>
      <p className="text-lg text-neutral-600">
        {t('forRiders.description')}
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
            <Search className="h-6 w-6 text-primary-600" />
          </div>
          <h4 className="font-semibold text-neutral-900">{t('forRiders.features.searchLocation.title')}</h4>
          <p className="mt-2 text-sm text-neutral-600">
            {t('forRiders.features.searchLocation.description')}
          </p>
        </Card>

        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100">
            <Star className="h-6 w-6 text-accent-600" />
          </div>
          <h4 className="font-semibold text-neutral-900">{t('forRiders.features.verifiedRatings.title')}</h4>
          <p className="mt-2 text-sm text-neutral-600">
            {t('forRiders.features.verifiedRatings.description')}
          </p>
        </Card>

        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success-100">
            <MapPin className="h-6 w-6 text-success-600" />
          </div>
          <h4 className="font-semibold text-neutral-900">{t('forRiders.features.directContact.title')}</h4>
          <p className="mt-2 text-sm text-neutral-600">
            {t('forRiders.features.directContact.description')}
          </p>
        </Card>
      </div>

       <div className="flex flex-col sm:flex-row gap-4 justify-center text-center">
         <a href="https://BookTheDon.com" target="_blank" rel="noopener noreferrer">
           <Button variant="primary" size="lg">
             {t('forRiders.bookRide')}
           </Button>
         </a>
         <a href="https://rideshareguides.com/driver" target="_blank" rel="noopener noreferrer">
           <Button variant="secondary" size="lg">
             {t('forRiders.browseDirectory')}
           </Button>
         </a>
       </div>
    </div>
  )

  const tabs = [
    { id: 'drivers', label: common('forDrivers'), content: driverTab },
    { id: 'riders', label: common('forRiders'), content: riderTab },
  ]

  return (
    <section className="bg-neutral-50 py-10 lg:py-24">
      <Container>
        <FadeIn>
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">
              {t('eyebrow')}
            </div>
            {/* Yellow highlighted section */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-yellow-300 rounded-3xl transform -skew-y-2 opacity-70"></div>
              <div className="relative px-8 py-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900">
                  The RSG Drivers Directory<br />Members Only
                </h2>
              </div>
            </div>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-neutral-600">
              {t('description')}
            </p>
          </div>
        </FadeIn>

        {/* QR Code Section */}
        <FadeIn delay={0.1}>
          <div className="mb-12 flex flex-col items-center">
            <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-neutral-200">
              <Image
                src="/images/qr_code_links/driver_directory_link.png"
                alt="RSG Drivers Directory QR Code"
                width={300}
                height={300}
                className="w-64 h-64 object-contain"
              />
            </div>
            <p className="mt-6 text-sm text-neutral-600 text-center max-w-xs">
              Scan to access the RSG Drivers Directory
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Tabs tabs={tabs} defaultTab="drivers" />
        </FadeIn>
      </Container>
    </section>
  )
}
