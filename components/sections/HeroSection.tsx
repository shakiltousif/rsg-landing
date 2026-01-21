'use client'

import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { FadeIn } from '../animations/FadeIn'
import { Check, ArrowRight } from 'lucide-react'
import { heroContent } from '@/lib/content'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-32 pb-20 lg:pt-40 lg:pb-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  {heroContent.headline}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-neutral-600 sm:text-xl lg:text-2xl">
                {heroContent.subheadline}
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  variant="primary"
                  size="lg"
                  href={heroContent.primaryCTA.href}
                  icon={<ArrowRight className="h-5 w-5" />}
                  iconPosition="right"
                >
                  {heroContent.primaryCTA.text}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href={heroContent.secondaryCTA.href}
                >
                  {heroContent.secondaryCTA.text}
                </Button>
              </div>
            </FadeIn>

            {/* Benefits List */}
            <FadeIn delay={0.4}>
              <div className="space-y-3">
                {heroContent.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success-100">
                      <Check className="h-4 w-4 text-success-600" />
                    </div>
                    <span className="text-base font-medium text-neutral-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Hero Image/Visual */}
          <FadeIn delay={0.5} className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 shadow-2xl lg:aspect-[4/3]">
              {/* Placeholder for hero image/dashboard mockup */}
              <div className="flex h-full items-center justify-center p-8">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-white/50 backdrop-blur-sm" />
                  <p className="text-lg font-semibold text-primary-700">
                    Dashboard Mockup Placeholder
                  </p>
                  <p className="text-sm text-neutral-600">
                    Replace with actual hero image
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent-200 opacity-50 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary-200 opacity-50 blur-3xl" />
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
