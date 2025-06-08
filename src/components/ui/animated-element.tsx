"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";

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
  const variants: Variants = {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
