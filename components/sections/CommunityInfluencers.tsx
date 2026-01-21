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
            eyebrow="Learn from the Best"
            heading={communityInfluencers.title}
            description={communityInfluencers.subtitle}
            className="mb-12"
          />
        </FadeIn>

        {/* Leader Cards Grid */}
        <ScrollReveal className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {communityInfluencers.leaders.map((leader, index) => {
            const Icon = iconMap[leader.title as keyof typeof iconMap]
            return (
              <Card key={index} hover className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900">
                  {leader.title}
                </h3>
                <p className="text-sm text-neutral-600">{leader.description}</p>
              </Card>
            )
          })}
        </ScrollReveal>

        {/* Benefits Section */}
        <FadeIn delay={0.3}>
          <Card variant="elevated" className="bg-gradient-to-br from-primary-50 to-accent-50">
            <div className="text-center">
              <h3 className="mb-6 text-2xl font-bold text-neutral-900">
                What You Get as an RSG Member
              </h3>
              <div className="grid gap-4 text-left sm:grid-cols-2">
                {communityInfluencers.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-success-500">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </section>
  )
}
