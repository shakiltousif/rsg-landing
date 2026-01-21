export interface FAQ {
  question: string
  answer: string
}

export interface Testimonial {
  quote: string
  author: string
  role: 'driver' | 'rider'
  location: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface BenefitItem {
  text: string
  icon?: string
}

export interface SectionContent {
  eyebrow?: string
  heading: string
  description?: string
  content?: string
}

export interface CTAButton {
  text: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export interface FAQCategory {
  category: string
  questions: FAQ[]
}
