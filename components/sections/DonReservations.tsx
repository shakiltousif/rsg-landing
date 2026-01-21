'use client'

import Image from 'next/image'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { FadeIn } from '../animations/FadeIn'
import { Building2, Hash, Zap, CheckCircle2, Smartphone } from 'lucide-react'
import { sections } from '@/lib/content'

export function DonReservations() {
  const { donReservations } = sections

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="100% of Every Fare"
            heading={donReservations.title}
            description={donReservations.description}
            className="mb-12"
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Key Points & Process */}
          <div className="space-y-10">
            <div className="space-y-8">
              {donReservations.whyYouNeedIt.map((point, index) => {
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
                          {point.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">{point.description}</p>
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
                <h3 className="mb-6 text-xl font-bold text-white relative z-10">How to Get Started</h3>
                <div className="space-y-4 relative z-10">
                  {donReservations.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold shadow-lg shadow-primary-900/20">
                        {index + 1}
                      </div>
                      <p className="text-sm text-neutral-300 pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>

            {/* NYC TLC Note */}
            <FadeIn delay={0.5}>
              <div className="rounded-xl bg-accent-50 p-4 border border-accent-100 flex gap-3">
                 <CheckCircle2 className="h-5 w-5 text-accent-600 flex-shrink-0 mt-0.5" />
                 <p className="text-sm font-medium text-accent-900">
                  <strong>For NYC TLC Drivers:</strong> The Don Reservations system is
                  fully compliant with TLC regulations for pre-arranged rides.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: App Preview Mockup */}
          <FadeIn delay={0.3} className="relative">
             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary-100/50 blur-3xl pointer-events-none" />
             
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

                {/* Floating Action/Success Badge */}
                <div className="absolute -bottom-6 -left-6 z-20 rounded-2xl bg-white p-4 shadow-xl border border-neutral-100 flex items-center gap-3 animate-bounce duration-[4000ms]">
                   <div className="h-10 w-10 rounded-full bg-success-100 flex items-center justify-center text-success-600">
                      <Zap className="h-5 w-5" />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-neutral-900">100% Earnings</p>
                      <p className="text-[10px] text-neutral-500">No Platform Fees</p>
                   </div>
                </div>

                {/* Floating Booking Badge */}
                <div className="absolute top-1/4 -right-8 z-20 rounded-2xl bg-white p-4 shadow-xl border border-neutral-100 flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <Smartphone className="h-5 w-5" />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-neutral-900">Direct Booking</p>
                      <p className="text-[10px] text-neutral-500">Secure & Instant</p>
                   </div>
                </div>
             </div>

             <div className="mt-12 text-center lg:text-left flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" className="shadow-xl" href="#signup">
                  Get Your Driver ID #
                </Button>
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
             </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}