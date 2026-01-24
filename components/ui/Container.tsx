import React from 'react'
import { cn } from '@/lib/utils'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none'
  padding?: boolean
}

export function Container({
  children,
  maxWidth = 'xl',
  padding = true,
  className,
  ...props
}: ContainerProps) {
  const maxWidths = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
    none: '',
  }

  return (
    <div
      className={cn(
        'mx-auto',
        maxWidth !== 'none' ? maxWidths[maxWidth] : '',
        padding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
