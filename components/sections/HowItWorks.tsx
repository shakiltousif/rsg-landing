'use client'

import Image from 'next/image'
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
  const driverTab = (
    <div className="space-y-8">
      {/* Dashboard Preview */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-neutral-900">Your Driver Dashboard</h3>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                <CreditCard className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">Digital Business Card</h4>
                <p className="text-sm text-neutral-600">
                  Professional card with QR code, vehicle info, and your Personal Driver ID #
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-success-100">
                <Calendar className="h-5 w-5 text-success-600" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">The Don Reservations</h4>
                <p className="text-sm text-neutral-600">
                  Accept and manage direct bookings, keep 100% of every fare
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent-100">
                <DollarSign className="h-5 w-5 text-accent-600" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">Earnings Dashboard</h4>
                <p className="text-sm text-neutral-600">
                  Track direct bookings, repeat customers, and total earnings
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                <MessageCircle className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">Community Access</h4>
                <p className="text-sm text-neutral-600">
                  Connect with top earners, share tips, learn strategies
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
        <h4 className="mb-4 text-lg font-bold text-neutral-900">Requirements</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-success-600" />
            <span className="text-sm text-neutral-700">Commercial insurance (NYC Drivers - TLC Permit and TLC plate required)</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-success-600" />
            <span className="text-sm text-neutral-700">Current vehicle registration</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-success-600" />
            <span className="text-sm text-neutral-700">Background check clearance</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-success-600" />
            <span className="text-sm text-neutral-700">
              City licensing (where applicable)
            </span>
          </div>
        </div>
      </Card>

      <div className="text-center">
        <Button variant="primary" size="lg">
          Get Started as a Driver
        </Button>
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
          <h4 className="mb-2 font-semibold text-neutral-900">Find Drivers</h4>
          <p className="text-sm text-neutral-600">
            Browse the RSG Directory to find professional drivers in your area
          </p>
        </Card>

        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success-100">
            <Shield className="h-6 w-6 text-success-600" />
          </div>
          <h4 className="mb-2 font-semibold text-neutral-900">Verify & Review</h4>
          <p className="text-sm text-neutral-600">
            Check driver credentials, insurance, and reviews from other riders
          </p>
        </Card>

        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100">
            <QrCode className="h-6 w-6 text-accent-600" />
          </div>
          <h4 className="mb-2 font-semibold text-neutral-900">Save & Book</h4>
          <p className="text-sm text-neutral-600">
            Scan QR codes or save driver contacts for easy rebooking
          </p>
        </Card>

        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
            <Calendar className="h-6 w-6 text-primary-600" />
          </div>
          <h4 className="mb-2 font-semibold text-neutral-900">Book Directly</h4>
          <p className="text-sm text-neutral-600">
            Use The Don Reservations system for hassle-free booking
          </p>
        </Card>

        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success-100">
            <DollarSign className="h-6 w-6 text-success-600" />
          </div>
          <h4 className="mb-2 font-semibold text-neutral-900">Better Pricing</h4>
          <p className="text-sm text-neutral-600">
            No surge pricing, no platform fees - just fair rates
          </p>
        </Card>

        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100">
            <Star className="h-6 w-6 text-accent-600" />
          </div>
          <h4 className="mb-2 font-semibold text-neutral-900">Build Trust</h4>
          <p className="text-sm text-neutral-600">
            Develop relationships with your favorite professional drivers
          </p>
        </Card>
      </div>

      {/* Benefits Highlight */}
      <Card variant="elevated" className="bg-gradient-to-br from-primary-50 to-accent-50">
        <h4 className="mb-4 text-lg font-bold text-neutral-900">Why Riders Love RSG</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-success-600" />
            <span className="text-sm text-neutral-700">
              Better rates than Uber/Lyft (no platform fees)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-success-600" />
            <span className="text-sm text-neutral-700">
              Book your favorite drivers anytime
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-success-600" />
            <span className="text-sm text-neutral-700">No surge pricing surprises</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-success-600" />
            <span className="text-sm text-neutral-700">
              Support drivers directly (they keep 100%)
            </span>
          </div>
        </div>
      </Card>

      <div className="text-center">
        <Button variant="primary" size="lg">
          Find Your Driver
        </Button>
      </div>
    </div>
  )

  const tabs = [
    { id: 'drivers', label: 'For Drivers', content: driverTab },
    { id: 'riders', label: 'For Riders', content: riderTab },
  ]

  return (
    <section id="how-it-works" className="bg-neutral-50 py-16 lg:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Simple & Powerful"
            heading="How It Works"
            description="Whether you're a driver building your business or a rider looking for trusted transportation, RSG makes it simple."
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
