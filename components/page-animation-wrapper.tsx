"use client"

import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function PageAnimationWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Define routes that should NOT have animations
  const excludedPrefixes = ["/admin", "/pos"]
  const shouldAnimate = !excludedPrefixes.some(prefix => pathname?.startsWith(prefix))

  if (!shouldAnimate) {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1] // Apple-style smooth ease-out
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
