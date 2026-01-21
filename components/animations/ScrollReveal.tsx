'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface ScrollRevealProps {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}

export function ScrollReveal({ children, staggerDelay = 0.1, className }: ScrollRevealProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  )
}
