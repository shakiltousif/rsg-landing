'use client'

import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { FadeIn } from '../animations/FadeIn'
import { Check, ArrowRight, Star, Shield, Smartphone } from 'lucide-react'
import { heroContent } from '@/lib/content'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[600px] w-[600px] rounded-full bg-primary-50 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[500px] w-[500px] rounded-full bg-primary-100 blur-3xl opacity-40 pointer-events-none" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-200 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary-600" />
                The #1 Platform for Independent Drivers
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl xl:text-7xl mb-6">
                {heroContent.headline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl mb-8">
                {heroContent.subheadline}
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-4 sm:flex-row mb-8">
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
              <div className="grid gap-3 sm:grid-cols-2">
                {heroContent.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-success-100 text-success-600">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-medium text-neutral-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Hero Visual */}
          <FadeIn delay={0.5} className="relative hidden lg:block">
             <div className="relative mx-auto w-full max-w-[400px]">
                {/* Phone Frame */}
                <div className="relative z-10 mx-auto w-[300px] overflow-hidden rounded-[3rem] border-[8px] border-neutral-900 bg-neutral-900 shadow-2xl">
                   {/* Notch */}
                   <div className="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-900 z-20" />
                   
                   {/* Screen Content */}
                   <div className="relative h-[600px] w-full bg-white overflow-hidden flex flex-col">
                      {/* Header Image Area */}
                      <div className="h-32 bg-gradient-to-br from-primary-500 to-primary-600 relative">
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-20 w-20 rounded-full border-4 border-white bg-neutral-200 shadow-md overflow-hidden">
                           {/* Avatar Placeholder */}
                           <div className="w-full h-full bg-neutral-300 flex items-center justify-center text-neutral-500 text-xs">Photo</div>
                        </div>
                      </div>

                      {/* Profile Details */}
                      <div className="mt-12 px-6 text-center space-y-1">
                         <h3 className="text-lg font-bold text-neutral-900">Marcus T.</h3>
                         <div className="flex items-center justify-center gap-1 text-primary-600">
                            <Shield className="h-3 w-3" />
                            <span className="text-xs font-semibold uppercase tracking-wider">Verified Driver</span>
                         </div>
                         <div className="flex justify-center gap-1 mt-1">
                            {[1,2,3,4,5].map(i => (
                               <Star key={i} className="h-3 w-3 fill-accent-400 text-accent-400" />
                            ))}
                         </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-6 px-6 space-y-3">
                         <div className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold text-sm shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2">
                            <Smartphone className="h-4 w-4" /> Book Directly
                         </div>
                         <div className="grid grid-cols-2 gap-3">
                            <div className="bg-neutral-50 py-2 rounded-lg border border-neutral-100 text-center">
                               <span className="block text-xs text-neutral-500">Trips</span>
                               <span className="block font-bold text-neutral-900">1.2k+</span>
                            </div>
                            <div className="bg-neutral-50 py-2 rounded-lg border border-neutral-100 text-center">
                               <span className="block text-xs text-neutral-500">Rating</span>
                               <span className="block font-bold text-neutral-900">5.0</span>
                            </div>
                         </div>
                      </div>

                      {/* Services List */}
                      <div className="mt-6 px-6">
                         <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Services</p>
                         <div className="space-y-2">
                            {['Airport Transfers', 'Corporate Events', 'Luxury Black Car'].map((item) => (
                               <div key={item} className="flex items-center gap-2 p-2 rounded-lg bg-neutral-50 text-xs font-medium text-neutral-700">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                                  {item}
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-12 -right-4 z-20 rounded-xl bg-white p-3 shadow-xl border border-neutral-100 animate-bounce duration-[3000ms]">
                   <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success-100 text-success-600">
                         <Check className="h-5 w-5" />
                      </div>
                      <div>
                         <p className="text-xs font-medium text-neutral-500">Status</p>
                         <p className="text-sm font-bold text-neutral-900">Available Now</p>
                      </div>
                   </div>
                </div>
             </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
