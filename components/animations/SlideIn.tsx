'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface SlideInProps {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  duration?: number
  distance?: number
  className?: string
}

export function SlideIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 50,
  className,
}: SlideInProps) {
  const directions = {
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
