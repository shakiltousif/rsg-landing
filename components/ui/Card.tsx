import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  className,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-white shadow-md',
    bordered: 'bg-white border-2 border-neutral-200',
    elevated: 'bg-white shadow-lg',
  }

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const hoverEffect = hover
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
    : ''

  return (
    <div
      className={cn(
        'rounded-xl',
        variants[variant],
        paddings[padding],
        hoverEffect,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
