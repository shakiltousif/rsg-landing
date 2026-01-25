'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Tabs } from '../ui/Tabs'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { FadeIn } from '../animations/FadeIn'
import {
  User,
  CreditCard,
  Hash,
  QrCode,
  Calendar,
  DollarSign,
  Search,
  Shield,
  Star,
  MessageCircle,
  Check,
} from 'lucide-react'

export function HowItWorks() {
  const t = useTranslations('howItWorks')
  const common = useTranslations('common')

  const driverTab = (
    <div className="space-y-8">
       {/* Dashboard Preview */}
       <div className="grid gap-8 lg:grid-cols-2">
         <div className="space-y-6">
           <h3 className="text-2xl font-bold text-neutral-900">{t('forDrivers.dashboardTitle')}</h3>

           <div className="space-y-4">
             <div className="flex gap-4">
               <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                 <CreditCard className="h-5 w-5 text-primary-600" />
               </div>
               <div>
                 <h4 className="font-semibold text-neutral-900">{t('forDrivers.features.digitalCard.title')}</h4>
                 <p className="text-sm text-neutral-600">
                   {t('forDrivers.features.digitalCard.description')}
                 </p>
               </div>
             </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-success-100">
                  <Calendar className="h-5 w-5 text-success-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">{t('forDrivers.features.donReservations.title')}</h4>
                  <p className="text-sm text-neutral-600">
                    {t('forDrivers.features.donReservations.description')}
                  </p>
                </div>
              </div>

             <div className="flex gap-4">
               <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent-100">
                 <DollarSign className="h-5 w-5 text-accent-600" />
               </div>
               <div>
                 <h4 className="font-semibold text-neutral-900">{t('forDrivers.features.earnings.title')}</h4>
                 <p className="text-sm text-neutral-600">
                   {t('forDrivers.features.earnings.description')}
                 </p>
               </div>
             </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <MessageCircle className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">{t('forDrivers.features.socialMedia.title')}</h4>
                  <p className="text-sm text-neutral-600">
                    {t('forDrivers.features.socialMedia.description')}
                  </p>
                </div>
              </div>
           </div>
         </div>

        {/* Dashboard Mockup */}
        <div className="overflow-hidden rounded-xl shadow-xl ring-1 ring-neutral-200">
          <Image
            src="/images/hero-dashboard.png"
            alt="Driver Dashboard Preview"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>

       {/* Requirements */}
       <Card variant="bordered" className="border-accent-300 bg-accent-50">
         <h4 className="mb-4 text-lg font-bold text-neutral-900">{t('forDrivers.requirements.title')}</h4>
         <div className="grid gap-3 sm:grid-cols-2">
           <div className="flex items-center gap-2">
             <Check className="h-5 w-5 text-success-600" />
             <span className="text-sm text-neutral-700">{t('forDrivers.requirements.commercial')}</span>
           </div>
           <div className="flex items-center gap-2">
             <Check className="h-5 w-5 text-success-600" />
             <span className="text-sm text-neutral-700">{t('forDrivers.requirements.registration')}</span>
           </div>
           <div className="flex items-center gap-2">
             <Check className="h-5 w-5 text-success-600" />
             <span className="text-sm text-neutral-700">{t('forDrivers.requirements.background')}</span>
           </div>
           <div className="flex items-center gap-2">
             <Check className="h-5 w-5 text-success-600" />
             <span className="text-sm text-neutral-700">
               {t('forDrivers.requirements.licensing')}
             </span>
           </div>
         </div>
       </Card>

       <div className="text-center">
         <a href="https://rideshareguides.com/driver" target="_blank" rel="noopener noreferrer">
           <Button variant="primary" size="lg">
             {t('forDrivers.cta')}
           </Button>
         </a>
       </div>
    </div>
  )

  const riderTab = (
    <div className="space-y-8">
       {/* How Riders Use RSG */}
       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
         <Card hover className="text-center">
           <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
             <Search className="h-6 w-6 text-primary-600" />
           </div>
           <h4 className="mb-2 font-semibold text-neutral-900">{t('forRiders.features.findDrivers.title')}</h4>
           <p className="text-sm text-neutral-600">
             {t('forRiders.features.findDrivers.description')}
           </p>
         </Card>

         <Card hover className="text-center">
           <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success-100">
             <Shield className="h-6 w-6 text-success-600" />
           </div>
           <h4 className="mb-2 font-semibold text-neutral-900">{t('forRiders.features.verifyReview.title')}</h4>
           <p className="text-sm text-neutral-600">
             {t('forRiders.features.verifyReview.description')}
           </p>
         </Card>

         <Card hover className="text-center">
           <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100">
             <QrCode className="h-6 w-6 text-accent-600" />
           </div>
           <h4 className="mb-2 font-semibold text-neutral-900">{t('forRiders.features.saveBook.title')}</h4>
           <p className="text-sm text-neutral-600">
             {t('forRiders.features.saveBook.description')}
           </p>
         </Card>

         <Card hover className="text-center">
           <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
             <Calendar className="h-6 w-6 text-primary-600" />
           </div>
           <h4 className="mb-2 font-semibold text-neutral-900">{t('forRiders.features.bookDirectly.title')}</h4>
           <p className="text-sm text-neutral-600">
             {t('forRiders.features.bookDirectly.description')}
           </p>
         </Card>

         <Card hover className="text-center">
           <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success-100">
             <DollarSign className="h-6 w-6 text-success-600" />
           </div>
           <h4 className="mb-2 font-semibold text-neutral-900">{t('forRiders.features.betterPricing.title')}</h4>
           <p className="text-sm text-neutral-600">
             {t('forRiders.features.betterPricing.description')}
           </p>
         </Card>

         <Card hover className="text-center">
           <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100">
             <Star className="h-6 w-6 text-accent-600" />
           </div>
           <h4 className="mb-2 font-semibold text-neutral-900">{t('forRiders.features.buildTrust.title')}</h4>
           <p className="text-sm text-neutral-600">
             {t('forRiders.features.buildTrust.description')}
           </p>
         </Card>
       </div>

       {/* Benefits Highlight */}
       <Card variant="elevated" className="bg-gradient-to-br from-primary-50 to-accent-50">
         <h4 className="mb-4 text-lg font-bold text-neutral-900">{t('forRiders.whyLove.title')}</h4>
         <div className="grid gap-3 sm:grid-cols-2">
           <div className="flex items-center gap-2">
             <Check className="h-5 w-5 text-success-600" />
             <span className="text-sm text-neutral-700">
               {t('forRiders.whyLove.betterRates')}
             </span>
           </div>
           <div className="flex items-center gap-2">
             <Check className="h-5 w-5 text-success-600" />
             <span className="text-sm text-neutral-700">
               {t('forRiders.whyLove.favoriteDrivers')}
             </span>
           </div>
           <div className="flex items-center gap-2">
             <Check className="h-5 w-5 text-success-600" />
             <span className="text-sm text-neutral-700">{t('forRiders.whyLove.noSurge')}</span>
           </div>
           <div className="flex items-center gap-2">
             <Check className="h-5 w-5 text-success-600" />
             <span className="text-sm text-neutral-700">
               {t('forRiders.whyLove.supportDrivers')}
             </span>
           </div>
         </div>
       </Card>

       <div className="text-center">
         <a href="https://rideshareguides.com/driver" target="_blank" rel="noopener noreferrer">
           <Button variant="primary" size="lg">
             {t('forRiders.cta')}
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
    <section id="how-it-works" className="bg-neutral-50 py-10 lg:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t('eyebrow')}
            heading={t('heading')}
            description={t('description')}
            className="mb-12"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <Tabs tabs={tabs} defaultTab="drivers" />
        </FadeIn>
      </Container>
    </section>
  )
}
