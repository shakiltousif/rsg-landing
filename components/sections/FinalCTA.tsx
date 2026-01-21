import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Check, Mail, MessageSquare, Phone } from 'lucide-react'
import { contactInfo } from '@/lib/content'

export function FinalCTA() {
  const driverBenefits = [
    'FREE Digital Business Card',
    'Your Personal Driver ID #',
    'Access to The Don Reservations',
    'Listed in RSG Directory',
    'Community & Networking',
    'Keep 100% of Your Earnings',
  ]

  const riderBenefits = [
    'Find Verified Professional Drivers',
    'Save Your Favorite Drivers',
    'Direct Booking - No Surge Pricing',
    'Better Rates for You & Drivers',
    'Build Trusted Relationships',
  ]

  return (
    <section id="signup" className="bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 py-16 text-white lg:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Your Professional Transportation Business Starts Today
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-50 sm:text-xl">
            Join thousands of drivers and riders who are taking control of their transportation future.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          {/* Drivers */}
          <Card className="bg-white/10 backdrop-blur-sm">
            <h3 className="mb-6 text-2xl font-bold">For Drivers</h3>
            <div className="mb-6 space-y-3">
              {driverBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-success-500">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <Button
              variant="secondary"
              size="lg"
              fullWidth
              className="bg-white text-primary-600 hover:bg-neutral-50"
            >
              JOIN RSG FREE - GET YOUR DIGITAL BUSINESS CARD
            </Button>
          </Card>

          {/* Riders */}
          <Card className="bg-white/10 backdrop-blur-sm">
            <h3 className="mb-6 text-2xl font-bold">For Riders</h3>
            <div className="mb-6 space-y-3">
              {riderBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-success-500">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <Button
              variant="secondary"
              size="lg"
              fullWidth
              className="bg-white text-primary-600 hover:bg-neutral-50"
            >
              RIDERS: FIND YOUR DRIVER
            </Button>
          </Card>
        </div>

        {/* Support Section */}
        <Card className="bg-white/10 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="mb-6 text-2xl font-bold">Questions? We're Here to Help</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Mail className="h-6 w-6" />
                </div>
                <p className="font-semibold">Email Us</p>
                <p className="text-sm text-primary-100">{contactInfo.email}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <p className="font-semibold">Live Chat</p>
                <p className="text-sm text-primary-100">{contactInfo.liveChat}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Phone className="h-6 w-6" />
                </div>
                <p className="font-semibold">Text Support</p>
                <p className="text-sm text-primary-100">Available 24/7</p>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  )
}
