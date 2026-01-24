import Image from 'next/image'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { FadeIn } from '../animations/FadeIn'
import { ScrollReveal } from '../animations/ScrollReveal'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/content'

export function Testimonials() {
  const avatarImages = [
    '/images/testimonials/avatar-1.png',
    '/images/testimonials/avatar-2.png',
    '/images/testimonials/avatar-3.png',
    '/images/testimonials/avatar.png',
  ]

  return (
    <section id="testimonials" className="bg-neutral-50 py-10 lg:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Success Stories"
            heading="What Our Members Say"
            description="Real experiences from drivers and riders who are building their transportation businesses on RSG."
            className="mb-12"
          />
        </FadeIn>

        <ScrollReveal className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover variant="elevated" className="relative">
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                <Quote className="h-5 w-5 text-primary-600" />
              </div>

              {/* Quote Text */}
              <blockquote className="mb-6 text-lg leading-relaxed text-neutral-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-neutral-200 pt-4">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={avatarImages[index] || avatarImages[0]}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-neutral-600">{testimonial.location}</p>
                </div>
                <Badge
                  variant={testimonial.role === 'driver' ? 'driver' : 'rider'}
                  size="md"
                >
                  {testimonial.role === 'driver' ? 'Driver' : 'Rider'}
                </Badge>
              </div>
            </Card>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  )
}
