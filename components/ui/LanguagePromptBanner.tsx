'use client'

import { useState, useEffect } from 'react'
import { X, Globe } from 'lucide-react'
import { useLocale } from 'next-intl'
import { localeNames, localeFlags, type Locale } from '@/i18n'

const languageMap: Record<string, Locale> = {
  // Spanish
  'es': 'es',
  'es-ES': 'es',
  'es-MX': 'es',
  'es-AR': 'es',
  'es-CO': 'es',
  'es-CL': 'es',
  'es-PE': 'es',
  'es-VE': 'es',
  'es-EC': 'es',
  'es-GT': 'es',
  'es-CU': 'es',
  'es-BO': 'es',
  'es-DO': 'es',
  'es-HN': 'es',
  'es-PY': 'es',
  'es-SV': 'es',
  'es-NI': 'es',
  'es-CR': 'es',
  'es-PA': 'es',
  'es-UY': 'es',
  'es-PR': 'es',
  // French
  'fr': 'fr',
  'fr-FR': 'fr',
  'fr-CA': 'fr',
  'fr-BE': 'fr',
  'fr-CH': 'fr',
  'fr-LU': 'fr',
  'fr-MC': 'fr',
}

export function LanguagePromptBanner() {
  const currentLocale = useLocale() as Locale
  const [suggestedLocale, setSuggestedLocale] = useState<Locale | null>(null)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('language-banner-dismissed')
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    // Detect browser language
    const browserLang = navigator.language || (navigator as any).userLanguage
    const detectedLocale = languageMap[browserLang] || languageMap[browserLang.split('-')[0]]

    // Only suggest if different from current and is a supported language
    if (detectedLocale && detectedLocale !== currentLocale) {
      setSuggestedLocale(detectedLocale)
    }
  }, [currentLocale])

  const handleSwitch = () => {
    if (suggestedLocale) {
      document.cookie = `NEXT_LOCALE=${suggestedLocale};path=/;max-age=31536000`
      localStorage.setItem('language-banner-dismissed', 'true')
      window.location.reload()
    }
  }

  const handleDismiss = () => {
    setIsDismissed(true)
    localStorage.setItem('language-banner-dismissed', 'true')
  }

  if (isDismissed || !suggestedLocale) {
    return null
  }

  const messages: Record<Locale, { detected: string; switchBtn: string; dismiss: string }> = {
    en: {
      detected: `We detected you might prefer ${localeNames[suggestedLocale]}`,
      switchBtn: `Switch to ${localeNames[suggestedLocale]}`,
      dismiss: 'Stay in English',
    },
    es: {
      detected: `Detectamos que podrías preferir ${localeNames[suggestedLocale]}`,
      switchBtn: `Cambiar a ${localeNames[suggestedLocale]}`,
      dismiss: 'Mantener en Español',
    },
    fr: {
      detected: `Nous avons détecté que vous préférez peut-être ${localeNames[suggestedLocale]}`,
      switchBtn: `Passer au ${localeNames[suggestedLocale]}`,
      dismiss: 'Rester en Français',
    },
  }

  const msg = messages[currentLocale]

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md animate-slide-up">
      <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-2xl">
        <button
          onClick={handleDismiss}
          className="absolute right-3 top-3 rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
            <Globe className="h-5 w-5" />
          </div>

          <div className="flex-1 pr-6">
            <p className="text-sm font-medium text-neutral-900">
              {localeFlags[suggestedLocale]} {msg.detected}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={handleSwitch}
                className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              >
                {msg.switchBtn}
              </button>
              <button
                onClick={handleDismiss}
                className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
              >
                {msg.dismiss}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
