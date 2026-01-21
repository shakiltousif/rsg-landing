'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
}

export interface TabsProps {
  tabs: TabItem[]
  defaultTab?: string
  className?: string
}

export function Tabs({ tabs, defaultTab, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  return (
    <div className={cn('w-full', className)}>
      {/* Tab List */}
      <div className="border-b border-neutral-200">
        <div className="flex space-x-2 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'relative px-6 py-3 text-sm font-semibold transition-colors',
                  'whitespace-nowrap',
                  isActive
                    ? 'text-primary-600'
                    : 'text-neutral-600 hover:text-neutral-900'
                )}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTabData?.content}
        </motion.div>
      </div>
    </div>
  )
}
