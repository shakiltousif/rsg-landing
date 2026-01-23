import { Container } from '../ui/Container'
import { Youtube, Facebook, Instagram, Twitter } from 'lucide-react'
import { contactInfo } from '@/lib/content'

export function Footer() {
  const quickLinks = [
    { label: 'About RSG', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#blog' },
  ]

  const forDrivers = [
    { label: 'Join Free', href: '#signup' },
    { label: 'Get Driver ID #', href: '#driver-id' },
    { label: 'The Don Reservations', href: '#don-reservations' },
    { label: 'Drivers Directory', href: '#directory' },
  ]

  const forRiders = [
    { label: 'Find Drivers', href: '#find-drivers' },
    { label: 'How to Book', href: '#how-to-book' },
    { label: 'Safety & Trust', href: '#safety' },
    { label: 'Pricing', href: '#pricing' },
  ]

  const socialLinks = [
    { icon: Youtube, href: contactInfo.socialMedia.youtube, label: 'YouTube' },
    { icon: Facebook, href: contactInfo.socialMedia.facebook, label: 'Facebook' },
    { icon: Instagram, href: contactInfo.socialMedia.instagram, label: 'Instagram' },
    { icon: Twitter, href: contactInfo.socialMedia.tiktok, label: 'TikTok' },
  ]

  return (
    <footer className="border-t border-neutral-200 bg-neutral-900 text-neutral-300">
      <Container>
        {/* Main Footer Content */}
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-2xl font-bold text-white">RSG</h3>
            <p className="mb-4 text-sm">
              The professional platform for independent contractors, drivers and riders worldwide.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-colors hover:bg-primary-600"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: For Drivers */}
          <div>
            <h4 className="mb-4 font-semibold text-white">For Drivers</h4>
            <ul className="space-y-2">
              {forDrivers.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: For Riders */}
          <div>
            <h4 className="mb-4 font-semibold text-white">For Riders</h4>
            <ul className="space-y-2">
              {forRiders.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-primary-400"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="text-neutral-400">{contactInfo.liveChat}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-8">
          {/* Legal Disclaimer */}
          <div className="mb-6 text-xs text-neutral-400">
            <p className="mb-2">
              <strong>Important:</strong> RSG provides a platform for connecting drivers and
              riders. All drivers must maintain their own commercial insurance and required
              licenses. RSG does not provide insurance, vehicles, or employment.
            </p>
            <p>
              By using RSG, you acknowledge that all transactions are between drivers and
              riders directly. Please ensure compliance with local transportation regulations.
            </p>
          </div>

          {/* Copyright & Legal Links */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} RideShare Guides. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="transition-colors hover:text-primary-400">
                Privacy Policy
              </a>
              <a href="#terms" className="transition-colors hover:text-primary-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
