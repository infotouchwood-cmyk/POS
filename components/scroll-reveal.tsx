"use client"

import React, { useRef, useEffect } from "react"
import { motion, useAnimation, useInView, Variant } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleUp"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  className?: string
}

const variants: Record<string, { hidden: Variant; visible: Variant }> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
}

export function ScrollReveal({
  children,
  variant = "slideUp",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: threshold, once })

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        variants={variants[variant]}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1], // Smooth bezier for premium feel
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
