import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../animations/ScrollReveal'
import { FadeIn } from '../animations/FadeIn'
import { MessageSquare, ShoppingBag, Plane, BookOpen, Check } from 'lucide-react'
import { sections } from '@/lib/content'

export function ComingSoon() {
  const iconMap = {
    MessageSquare,
    ShoppingBag,
    Plane,
    BookOpen,
  }

  return (
    <section className="bg-gradient-to-br from-neutral-50 to-primary-50 py-16 lg:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="What's Next"
            heading="Future Features Coming to RSG!"
            description="The only Social Media Platform exclusively for independent contractors."
            className="mb-12"
          />
        </FadeIn>

        <ScrollReveal className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sections.comingSoon.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]

            return (
              <Card key={index} hover className="h-full">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-neutral-900">
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </ScrollReveal>

        <FadeIn delay={0.4}>
          <div className="text-center">
            <Button variant="primary" size="lg">
              Join Free to Get Early Access
            </Button>
            <p className="mt-4 text-sm text-neutral-600">
              Join RSG free to get your Digital Business Card, Driver ID, and early access to Forums, Blogs, Travel Discounts & Merchandise
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
