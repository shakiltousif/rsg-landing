import Image from 'next/image'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Tabs } from '../ui/Tabs'
import { Check, Search, MapPin, Star } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'
import { sections } from '@/lib/content'

export function DriversDirectory() {
  const { driversDirectory } = sections

  const driverTab = (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Benefits List */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-neutral-900">
            {driversDirectory.forDrivers.title}
          </h3>
          <div className="space-y-4">
            {driversDirectory.forDrivers.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-success-100">
                  <Check className="h-3 w-3 text-success-600" />
                </div>
                <span className="text-base text-neutral-700">{benefit}</span>
              </div>
            ))}
          </div>
          <Button variant="primary" size="lg">
            Create Your Free Directory Listing
          </Button>
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
        {driversDirectory.forRiders.title}
      </h3>
      <p className="text-lg text-neutral-600">
        {driversDirectory.forRiders.description}
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
            <Search className="h-6 w-6 text-primary-600" />
          </div>
          <h4 className="font-semibold text-neutral-900">Search by Location</h4>
          <p className="mt-2 text-sm text-neutral-600">
            Find professional drivers in your area
          </p>
        </Card>

        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100">
            <Star className="h-6 w-6 text-accent-600" />
          </div>
          <h4 className="font-semibold text-neutral-900">Verified Ratings</h4>
          <p className="mt-2 text-sm text-neutral-600">
            See reviews from real customers
          </p>
        </Card>

        <Card hover className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success-100">
            <MapPin className="h-6 w-6 text-success-600" />
          </div>
          <h4 className="font-semibold text-neutral-900">Direct Contact</h4>
          <p className="mt-2 text-sm text-neutral-600">
            Book directly with your preferred driver
          </p>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center text-center">
        <a href="https://BookTheDon.com" target="_blank" rel="noopener noreferrer">
          <Button variant="primary" size="lg">
            Book a Ride at BookTheDon.com
          </Button>
        </a>
        <Button variant="secondary" size="lg">
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
    <section className="bg-neutral-50 py-16 lg:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Get Discovered"
            heading="Free RSG Drivers Directory"
            description="Your profile in a searchable directory connecting professional drivers with riders seeking quality service."
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
