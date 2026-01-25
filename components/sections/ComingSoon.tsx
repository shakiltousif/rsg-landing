'use client'

import { useTranslations } from 'next-intl'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../animations/ScrollReveal'
import { FadeIn } from '../animations/FadeIn'
import { MessageSquare, ShoppingBag, Plane, BookOpen, Check } from 'lucide-react'

export function ComingSoon() {
  const t = useTranslations('comingSoon')

  const features = [
    { key: 'forums', Icon: MessageSquare, items: ['marketSpecific', 'vehicleAdvice', 'taxStrategy', 'customerService'] },
    { key: 'classifieds', Icon: ShoppingBag, items: ['vehicles', 'lease', 'equipment', 'partnerships'] },
    { key: 'flightInfo', Icon: Plane, items: ['liveFlights', 'pickupStrategies', 'queueTimes', 'volumeTrends'] },
    { key: 'blogs', Icon: BookOpen, items: ['tutorials', 'growth', 'marketing', 'sixFigure'] },
  ]

  return (
    <section className="bg-gradient-to-br from-neutral-50 to-primary-50 py-10 lg:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t('eyebrow')}
            heading={t('heading')}
            description={t('description')}
            className="mb-12"
          />
        </FadeIn>

        <ScrollReveal className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.Icon

            return (
              <Card key={index} hover className="h-full">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-neutral-900">
                  {t(`features.${feature.key}.title`)}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success-500" />
                      <span>{t(`features.${feature.key}.items.${item}`)}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </ScrollReveal>

        <FadeIn delay={0.4}>
          <div className="text-center">
            <Button variant="primary" size="lg">
              {t('cta')}
            </Button>
            <p className="mt-4 text-sm text-neutral-600">
              {t('ctaSubtext')}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
