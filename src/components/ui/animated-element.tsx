"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { fadeIn } from "@/hooks/use-animations";

interface AnimatedElementProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export function AnimatedElement({
  children,
  direction = "up",
  delay = 0.2,
  ...props
}: AnimatedElementProps) {
  return (
    <motion.div
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
