'use client'

import Image from 'next/image'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { FadeIn } from '../animations/FadeIn'
import { Building2, Hash, Zap, CheckCircle2, Smartphone, Apple } from 'lucide-react'
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
            className="mb-8"
          />
        </FadeIn>

        {/* App Logo and Download Buttons */}
        <FadeIn delay={0.1}>
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src="/images/logos/the-don-logo.jpeg"
                alt="The Don - The Drivers Owner's Network"
                width={400}
                height={200}
                className="mx-auto rounded-xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://apps.apple.com/app/don-reservations" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-black px-6 py-3 text-white transition-transform hover:scale-105 hover:shadow-lg"
              >
                <Apple className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold leading-tight">App Store</div>
                </div>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.donreservations" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-black px-6 py-3 text-white transition-transform hover:scale-105 hover:shadow-lg"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>
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

            {/* Disclaimer */}
            <FadeIn delay={0.5}>
              <div className="rounded-xl bg-accent-50 p-4 border border-accent-100 flex gap-3">
                 <CheckCircle2 className="h-5 w-5 text-accent-600 flex-shrink-0 mt-0.5" />
                 <p className="text-sm font-medium text-accent-900">
                  <strong>Disclaimer:</strong> The Don Reservations is a SaaS company and not a rideshare company. All drivers operate as independent contractors of their own business. NYC TLC drivers are required to have active TLC permits as well as TLC commercial plates and insurance to use the platform.
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
             </div>

             <div className="mt-12 text-center lg:text-left space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" className="shadow-xl" href="#signup">
                    Get Your Driver ID #
                  </Button>
                  <a href="https://BookTheDon.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                      Book a Ride Now
                    </Button>
                  </a>
                </div>
                <p className="text-center text-sm text-neutral-600">
                  <span className="font-semibold">Riders:</span> Book your ride instantly at{' '}
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