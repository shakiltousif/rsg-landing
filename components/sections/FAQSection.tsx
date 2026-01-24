'use client'

import { useState, useMemo } from 'react'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Tabs } from '../ui/Tabs'
import { Accordion } from '../ui/Accordion'
import { Card } from '../ui/Card'
import { FadeIn } from '../animations/FadeIn'
import { Search, X } from 'lucide-react'
import { faqsForDrivers, faqsForRiders, faqsGeneral } from '@/lib/content'
import type { FAQ } from '@/types'

export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter FAQs based on search query
  const filterFAQs = (faqs: FAQ[]) => {
    if (!searchQuery.trim()) return faqs

    const query = searchQuery.toLowerCase()
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    )
  }

  // Drivers Tab Content
  const driversContent = (
    <div className="space-y-8">
      {/* Money & Earnings */}
      <div>
        <h3 className="mb-4 text-xl font-bold text-neutral-900">💰 Money & Earnings</h3>
        <Accordion
          items={filterFAQs(faqsForDrivers.moneyEarnings).map((faq, idx) => ({
            id: `money-${idx}`,
            title: faq.question,
            content: faq.answer,
          }))}
          allowMultiple
        />
      </div>

       {/* Digital Business Card */}
       <div>
         <h3 className="mb-4 text-xl font-bold text-neutral-900">📱 RSG Digital Business Card</h3>
        <Accordion
          items={filterFAQs(faqsForDrivers.digitalCard).map((faq, idx) => ({
            id: `card-${idx}`,
            title: faq.question,
            content: faq.answer,
          }))}
          allowMultiple
        />
      </div>

      {/* Personal Driver ID */}
      <div>
        <h3 className="mb-4 text-xl font-bold text-neutral-900">🎫 Personal Driver ID #</h3>
        <Accordion
          items={filterFAQs(faqsForDrivers.driverId).map((faq, idx) => ({
            id: `id-${idx}`,
            title: faq.question,
            content: faq.answer,
          }))}
          allowMultiple
        />
      </div>

      {/* The Don Reservations System */}
      <div>
        <h3 className="mb-4 text-xl font-bold text-neutral-900">🚗 The Don Reservations System</h3>
        <Accordion
          items={filterFAQs(faqsForDrivers.donReservations).map((faq, idx) => ({
            id: `don-${idx}`,
            title: faq.question,
            content: faq.answer,
          }))}
          allowMultiple
        />
      </div>

      {/* Community & Networking */}
      <div>
        <h3 className="mb-4 text-xl font-bold text-neutral-900">👥 Community & Networking</h3>
        <Accordion
          items={filterFAQs(faqsForDrivers.community).map((faq, idx) => ({
            id: `community-${idx}`,
            title: faq.question,
            content: faq.answer,
          }))}
          allowMultiple
        />
      </div>

      {/* RSG Drivers Directory */}
      <div>
        <h3 className="mb-4 text-xl font-bold text-neutral-900">📂 RSG Drivers Directory</h3>
        <Accordion
          items={filterFAQs(faqsForDrivers.directory).map((faq, idx) => ({
            id: `directory-${idx}`,
            title: faq.question,
            content: faq.answer,
          }))}
          allowMultiple
        />
      </div>
    </div>
  )

  // Riders Tab Content
  const ridersContent = (
    <div className="space-y-8">
      {/* Pricing & Savings */}
      <div>
        <h3 className="mb-4 text-xl font-bold text-neutral-900">💵 Pricing & Savings</h3>
        <Accordion
          items={filterFAQs(faqsForRiders.pricingSavings).map((faq, idx) => ({
            id: `pricing-${idx}`,
            title: faq.question,
            content: faq.answer,
          }))}
          allowMultiple
        />
      </div>

      {/* Safety & Trust */}
      <div>
        <h3 className="mb-4 text-xl font-bold text-neutral-900">🛡️ Safety & Trust</h3>
        <Accordion
          items={filterFAQs(faqsForRiders.safetyTrust).map((faq, idx) => ({
            id: `safety-${idx}`,
            title: faq.question,
            content: faq.answer,
          }))}
          allowMultiple
        />
      </div>

      {/* Using the Platform */}
      <div>
        <h3 className="mb-4 text-xl font-bold text-neutral-900">📱 Using the Platform</h3>
        <Accordion
          items={filterFAQs(faqsForRiders.usingPlatform).map((faq, idx) => ({
            id: `using-${idx}`,
            title: faq.question,
            content: faq.answer,
          }))}
          allowMultiple
        />
      </div>

      {/* Benefits for Riders */}
      <div>
        <h3 className="mb-4 text-xl font-bold text-neutral-900">🎯 Benefits for Riders</h3>
        <Accordion
          items={filterFAQs(faqsForRiders.benefits).map((faq, idx) => ({
            id: `benefits-${idx}`,
            title: faq.question,
            content: faq.answer,
          }))}
          allowMultiple
        />
      </div>
    </div>
  )

  // General Tab Content
  const generalContent = (
    <div>
      <Accordion
        items={filterFAQs(faqsGeneral).map((faq, idx) => ({
          id: `general-${idx}`,
          title: faq.question,
          content: faq.answer,
        }))}
        allowMultiple
      />
    </div>
  )

  const tabs = [
    { id: 'drivers', label: 'For Drivers', content: driversContent },
    { id: 'riders', label: 'For Riders', content: ridersContent },
    { id: 'general', label: 'General', content: generalContent },
  ]

  // Count total filtered results
  const totalResults = useMemo(() => {
    const drivers = Object.values(faqsForDrivers).flat()
    const riders = Object.values(faqsForRiders).flat()
    const all = [...drivers, ...riders, ...faqsGeneral]

    if (!searchQuery.trim()) return all.length

    return filterFAQs(all).length
  }, [searchQuery])

  return (
    <section id="faq" className="py-10 lg:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Got Questions?"
            heading="Frequently Asked Questions"
            description="Everything you need to know about RSG, digital business cards, and The Don Reservations system."
            className="mb-12"
          />
        </FadeIn>

        {/* Search Bar */}
        <FadeIn delay={0.1}>
          <Card className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search FAQs... (e.g., 'How much can I make?')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border-2 border-neutral-200 py-3 pl-12 pr-12 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-primary-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors hover:text-neutral-600"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-neutral-600">
                Found {totalResults} result{totalResults !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
            )}
          </Card>
        </FadeIn>

        {/* FAQ Tabs */}
        <FadeIn delay={0.2}>
          {totalResults === 0 ? (
            <Card className="py-12 text-center">
              <p className="text-lg text-neutral-600">
                No results found for "{searchQuery}". Try a different search term.
              </p>
            </Card>
          ) : (
            <Tabs tabs={tabs} defaultTab="drivers" />
          )}
        </FadeIn>

        {/* Still Have Questions CTA */}
        <FadeIn delay={0.3}>
          <Card variant="bordered" className="mt-12 border-primary-300 bg-primary-50 text-center">
            <h3 className="mb-2 text-xl font-bold text-neutral-900">
              Still Have Questions?
            </h3>
            <p className="mb-4 text-neutral-600">
              Our support team is here to help 7 days a week.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:support@rideshareguides.com"
                className="inline-flex items-center rounded-lg bg-primary-500 px-6 py-2 font-semibold text-white transition-colors hover:bg-primary-600"
              >
                Email Support
              </a>
              <button className="inline-flex items-center rounded-lg border-2 border-primary-500 px-6 py-2 font-semibold text-primary-600 transition-colors hover:bg-primary-50">
                Live Chat
              </button>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </section>
  )
}
