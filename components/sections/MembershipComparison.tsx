import Image from 'next/image'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { FadeIn } from '../animations/FadeIn'
import { Check, X } from 'lucide-react'
import { membershipComparison } from '@/lib/content'

export function MembershipComparison() {
  const { features, providers, value } = membershipComparison

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="See the Difference"
            heading="Membership Comparison"
            description="See how RSG stacks up against other digital business card providers and rideshare platforms."
            className="mb-12"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Desktop Table */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="px-4 py-4 text-left font-semibold text-neutral-900">
                    Feature
                  </th>
                   <th className="bg-accent-50 px-4 py-4 text-center font-bold text-accent-900">
                     <div className="flex flex-col items-center gap-2">
                       <Image
                         src="/images/logos/rsg-logo.png"
                         alt="RSG Logo"
                         width={40}
                         height={40}
                         className="h-10 w-auto"
                       />
                       <div className="text-xs font-normal text-accent-700">(free membership always)</div>
                     </div>
                   </th>
                  <th className="px-4 py-4 text-center font-semibold text-neutral-700">
                    {providers.blinq.name}
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-neutral-700">
                    {providers.platforms.name}
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-neutral-700">
                    {providers.social.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-neutral-100">
                    <td className="px-4 py-4 font-medium text-neutral-900">{feature}</td>
                    <td className="bg-accent-50 px-4 py-4 text-center">
                      {renderCell(providers.rsg.features[index])}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {renderCell(providers.blinq.features[index])}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {renderCell(providers.platforms.features[index])}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {renderCell(providers.social.features[index])}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-6 lg:hidden">
            {Object.entries(providers).map(([key, provider]) => (
               <Card
                 key={key}
                 variant={'highlight' in provider && provider.highlight ? 'elevated' : 'bordered'}
                 className={'highlight' in provider && provider.highlight ? 'border-2 border-accent-500' : ''}
               >
                 <div className="mb-4 flex items-center gap-3">
                   {key === 'rsg' && (
                     <Image
                       src="/images/logos/rsg-logo.png"
                       alt="RSG Logo"
                       width={40}
                       height={40}
                       className="h-10 w-auto"
                     />
                   )}
                   <div>
                     {key !== 'rsg' && (
                       <h3 className="text-xl font-bold text-neutral-900">
                         {provider.name}
                       </h3>
                     )}
                     {key === 'rsg' && (
                       <p className="text-xs text-accent-700">(free membership always)</p>
                     )}
                   </div>
                 </div>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-neutral-600">{feature}</span>
                      <div className="ml-4">
                        {renderCell(provider.features[index])}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Value Callout */}
          <Card variant="elevated" className="mt-8 bg-gradient-to-r from-primary-50 to-accent-50">
            <div className="text-center">
              <p className="text-lg font-semibold text-neutral-900">
                <span className="text-primary-600">Annual Value: {value.annual}</span>
                {' • '}
                <span className="text-success-600">Your Cost: {value.cost}</span>
              </p>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </section>
  )
}

function renderCell(value: boolean | string) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success-100">
          <Check className="h-4 w-4 text-success-600" />
        </div>
      </div>
    )
  }

  if (value === false) {
    return (
      <div className="flex justify-center">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100">
          <X className="h-4 w-4 text-neutral-400" />
        </div>
      </div>
    )
  }

  return <span className="text-sm text-neutral-700">{value}</span>
}
