import Image from 'next/image'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { FadeIn } from '../animations/FadeIn'
import { Building2, Hash, Zap, CheckCircle2 } from 'lucide-react'
import { sections } from '@/lib/content'

export function DonReservations() {
  const { donReservations } = sections

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="100% of Every Fare"
            heading={donReservations.title}
            description={donReservations.description}
            className="mb-12"
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Key Points */}
          <div className="space-y-8">
            {donReservations.whyYouNeedIt.map((point, index) => {
              const icons = [Building2, Hash, Zap]
              const Icon = icons[index]

              return (
                <FadeIn key={index} delay={0.1 * (index + 1)}>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-neutral-900">
                        {point.title}
                      </h3>
                      <p className="text-neutral-600">{point.description}</p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}

            {/* NYC TLC Note */}
            <Card variant="bordered" className="border-accent-300 bg-accent-50">
              <p className="text-sm font-medium text-accent-900">
                <strong>For NYC TLC Drivers:</strong> The Don Reservations system is
                fully compliant with TLC regulations for pre-arranged rides.
              </p>
            </Card>
          </div>

          {/* Right: Process Steps */}
          <div className="space-y-6">
            <Card variant="elevated" className="bg-gradient-to-br from-primary-500 to-accent-500 text-white">
              <h3 className="mb-6 text-2xl font-bold">How to Get Started</h3>
              <div className="space-y-4">
                {donReservations.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 font-bold">
                      {index + 1}
                    </div>
                    <p className="pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Phone Mockup */}
            <div className="mx-auto max-w-xs">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/mockups/don-reservations-mobile.png"
                  alt="The Don Reservations App Interface"
                  width={400}
                  height={800}
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <Button variant="primary" size="lg" fullWidth>
                Get Your Driver ID # - Join RSG Free
              </Button>
              <Button variant="secondary" size="md" fullWidth>
                Learn More About The Don
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
