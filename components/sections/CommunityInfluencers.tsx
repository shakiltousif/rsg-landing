import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { FadeIn } from '../animations/FadeIn'
import { ScrollReveal } from '../animations/ScrollReveal'
import { Youtube, Users, TrendingUp, Target, Check } from 'lucide-react'
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
