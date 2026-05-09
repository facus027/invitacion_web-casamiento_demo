import { motion } from "framer-motion"
import type { ReactNode } from "react"

type RevealOnScrollProps = {
  children: ReactNode
  delay?: number
}

export const RevealOnScroll = ({ children, delay = 0 }: RevealOnScrollProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 1.1,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}