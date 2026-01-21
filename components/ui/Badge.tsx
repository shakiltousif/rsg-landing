import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'driver' | 'rider' | 'default' | 'success' | 'warning'
  size?: 'sm' | 'md' | 'lg'
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...props
}: BadgeProps) {
  const variants = {
    driver: 'bg-primary-100 text-primary-700 border-primary-200',
    rider: 'bg-success-100 text-success-700 border-success-200',
    default: 'bg-neutral-100 text-neutral-700 border-neutral-200',
    success: 'bg-success-100 text-success-700 border-success-200',
    warning: 'bg-accent-100 text-accent-700 border-accent-200',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-semibold',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
