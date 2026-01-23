import Image from 'next/image'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { FadeIn } from '../animations/FadeIn'
import { ScrollReveal } from '../animations/ScrollReveal'
import { Youtube, Users, TrendingUp, Target, Check, PlayCircle } from 'lucide-react'
import { sections } from '@/lib/content'

export function CommunityInfluencers() {
  const { communityInfluencers } = sections

  const iconMap = {
    'YouTube Creators': Youtube,
    'Facebook Group Moderators': Users,
    'Top Earners': TrendingUp,
    'Market Specialists': Target,
  }

  return (
    <section className="bg-neutral-50 py-16 lg:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Community of Success"
            heading={communityInfluencers.title}
            description={communityInfluencers.subtitle}
            className="mb-12"
          />
        </FadeIn>

        <div className="space-y-12">
          {/* Description */}
          <FadeIn delay={0.1}>
            <h3 className="text-center text-2xl font-bold text-neutral-900 lg:text-3xl">
              {communityInfluencers.description}
            </h3>
          </FadeIn>

          {/* Vlog Section */}
          <FadeIn delay={0.15}>
            <Card variant="elevated" className="overflow-hidden bg-gradient-to-br from-primary-900 to-primary-800 text-white">
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <PlayCircle className="h-6 w-6 text-accent-400" />
                  <h4 className="text-lg font-bold">Watch Our Influencers in Action</h4>
                </div>
                <p className="text-sm mb-6 text-primary-100">
                  See how our community leaders are earning, growing, and helping others succeed. Join the network and get featured!
                </p>
                
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative group overflow-hidden rounded-lg">
                      <Image
                        src={`/images/vlogs/vlog-${i}.png`}
                        alt={`Influencer vlog ${i}`}
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <PlayCircle className="h-12 w-12 text-white opacity-75 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <a
                    href="https://dev.rideshareguides.com/vlogs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Watch More Vlogs & Join Our Community
                  </a>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Featured Community Leaders Section */}
          <FadeIn delay={0.2}>
            <div className="mb-8">
              <h4 className="mb-6 text-xl font-bold text-neutral-900">
                Featured Community Leaders:
              </h4>
              <ScrollReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {communityInfluencers.leaders.map((leader, index) => {
                  const Icon = iconMap[leader.title as keyof typeof iconMap]
                  return (
                    <Card key={index} hover className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h5 className="mb-2 text-lg font-bold text-neutral-900">
                        {leader.title}
                      </h5>
                      <p className="text-sm text-neutral-600">{leader.description}</p>
                    </Card>
                  )
                })}
              </ScrollReveal>
            </div>
          </FadeIn>

          {/* What You Get Section */}
          <FadeIn delay={0.3}>
            <Card variant="elevated" className="bg-gradient-to-br from-primary-50 to-accent-50">
              <h4 className="mb-6 text-xl font-bold text-neutral-900">
                What You Get:
              </h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {communityInfluencers.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-success-500">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>

          {/* For Riders Section */}
          <FadeIn delay={0.4}>
            <Card variant="bordered" className="border-accent-300 bg-accent-50">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent-500 p-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-accent-900">
                    For Riders:
                  </h4>
                  <p className="text-neutral-700">
                    {communityInfluencers.forRiders}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
