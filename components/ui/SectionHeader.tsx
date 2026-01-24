import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionHeaderProps {
  eyebrow?: string
  heading: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={cn('space-y-0', alignments[align], className)}>
      {eyebrow && (
        <div className="text-sm font-bold uppercase tracking-wider text-primary-600 mb-1">
          {eyebrow}
        </div>
      )}
      <h2 className="text-5xl font-black text-neutral-900 sm:text-6xl lg:text-7xl mb-3">
        {heading}
      </h2>
      {description && (
        <p className="mx-auto max-w-3xl text-lg text-neutral-600 sm:text-xl mt-3">
          {description}
        </p>
      )}
    </div>
  )
}
