'use client'

import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Tabs } from '../ui/Tabs'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Check, QrCode, CreditCard, Share2 } from 'lucide-react'
import { sections } from '@/lib/content'
import { FadeIn } from '../animations/FadeIn'

export function DigitalBusinessCard() {
  const { digitalBusinessCard } = sections

  const driverTab = (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Benefits List */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-neutral-900">
            {digitalBusinessCard.forDrivers.title}
          </h3>
          <div className="space-y-4">
            {digitalBusinessCard.forDrivers.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-success-100">
                  <Check className="h-3 w-3 text-success-600" />
                </div>
                <span className="text-base text-neutral-700">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Value Callout */}
          <Card variant="bordered" className="border-accent-300 bg-accent-50">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-accent-500 p-2">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-accent-900">Free Forever</p>
                <p className="mt-1 text-sm text-accent-700">
                  {digitalBusinessCard.forDrivers.value}
                </p>
              </div>
            </div>
          </Card>

          <p className="text-neutral-600">
            {digitalBusinessCard.forDrivers.howItWorks}
          </p>

          <Button variant="primary" size="lg">
            Create Your Free Business Card
          </Button>
        </div>

        {/* Business Card Preview */}
        <div className="flex items-center justify-center">
          <Card variant="elevated" hover className="w-full max-w-md">
            <div className="space-y-4">
              {/* Card Header */}
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-600" />
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-neutral-900">
                    John Driver
                  </h4>
                  <p className="text-sm text-neutral-600">
                    Professional Driver
                  </p>
                  <p className="mt-1 text-xs font-mono text-primary-600">
                    ID #RSG-123456
                  </p>
                </div>
              </div>

              {/* Vehicle Photo Placeholder */}
              <div className="aspect-video rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200" />

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary-500 px-4 py-2 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-50">
                  <QrCode className="h-4 w-4" />
                  Scan QR
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-600">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>

              <p className="text-center text-xs text-neutral-500">
                Sample Business Card Preview
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )

  const riderTab = (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-neutral-900">
        {digitalBusinessCard.forRiders.title}
      </h3>
      <p className="text-lg text-neutral-600">
        {digitalBusinessCard.forRiders.description}
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
            <QrCode className="h-6 w-6 text-primary-600" />
          </div>
          <h4 className="font-semibold text-neutral-900">Scan & Save</h4>
          <p className="mt-2 text-sm text-neutral-600">
            Scan driver QR codes to instantly save their contact info
          </p>
        </Card>

        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success-100">
            <Check className="h-6 w-6 text-success-600" />
          </div>
          <h4 className="font-semibold text-neutral-900">Verified Drivers</h4>
          <p className="mt-2 text-sm text-neutral-600">
            All drivers are commercially insured and background-checked
          </p>
        </Card>

        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100">
            <Share2 className="h-6 w-6 text-accent-600" />
          </div>
          <h4 className="font-semibold text-neutral-900">Easy Booking</h4>
          <p className="mt-2 text-sm text-neutral-600">
            Book your favorite drivers directly with one tap
          </p>
        </Card>
      </div>

      <div className="text-center">
        <Button variant="primary" size="lg">
          Browse Driver Directory
        </Button>
      </div>
    </div>
  )

  const tabs = [
    { id: 'drivers', label: 'For Drivers', content: driverTab },
    { id: 'riders', label: 'For Riders', content: riderTab },
  ]

  return (
    <section id="features" className="py-16 lg:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Your Professional Identity"
            heading="The RSG Digital Business Card"
            description="Stand out from the crowd with a professional digital business card that helps you build YOUR business."
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
