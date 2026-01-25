'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
  const t = useTranslations('header')
  const common = useTranslations('common')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t('menu.howItWorks'), href: '#how-it-works' },
    { label: t('menu.features'), href: '#features' },
    { label: t('menu.faq'), href: '#faq' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <Container >
        <div className="flex items-center justify-between py-4">
           {/* Logo */}
           <a href="/" className="flex items-center gap-3">
             <Image
               src="/images/logos/rsg-logo.png"
               alt="RideShare Guides Logo"
               width={120}
               height={40}
               className="h-10 w-auto"
               priority
             />
             <span className="text-xl font-bold text-neutral-900">
               RideShareGuides.com
             </span>
           </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons & Language Switcher */}
          <div className="hidden items-center gap-4 md:flex">
            <LanguageSwitcher />
            <Button variant="primary" size="sm" href="#signup">
              {common('joinFree')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex p-2 text-neutral-600 transition-colors hover:bg-neutral-100 rounded-lg md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-t border-neutral-100 bg-white px-4 py-6 shadow-xl md:hidden">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-neutral-600 transition-colors hover:text-primary-600"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-neutral-100" />
              <div className="flex flex-col gap-3">
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
                <Button variant="primary" size="lg" href="#signup" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
                  {common('joinFree')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
