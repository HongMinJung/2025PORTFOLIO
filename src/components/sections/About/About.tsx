"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ProfileCard } from "./ProfileCard";

export function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const titleRef = useRef(null);

  const titleInView = useInView(titleRef, { once: false, amount: 0.3 });

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen md:min-h-[calc(100vh-112px)] snap-start overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          <motion.div 
            ref={titleRef}
            className="absolute top-28 left-1/2 md:left-1/3 -translate-x-1/2 md:-translate-x-1/3 z-10 flex items-center gap-3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isFlipped ? 0 : 1, x: titleInView ? 0 : -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 className="font-bold text-3xl md:text-5xl text-black bg-primary-100/60 dark:bg-secondary-100/60 shadow-lg shadow-black/20 dark:shadow-gray-700 p-10 rounded-xl relative">
              <motion.span
                className="absolute top-[-16px] left-[-2px] text-3xl md:text-4xl"
                animate={{ y: [0, -14, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                💕
              </motion.span>
              ABOUT
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <ProfileCard isInView={titleInView} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
          </motion.div>

          <motion.div
            className="absolute bottom-30 md:bottom-1/3 right-1/2 md:right-1/4 translate-x-1/2 md:translate-x-0 md:-translate-y-1/3 md:-translate-x-1/4 z-10 flex items-center gap-3"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isFlipped ? 0 : 1, x: titleInView ? 0 : 100 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          >
            <motion.h2 className="font-bold text-3xl md:text-5xl text-black bg-primary-100/60 dark:bg-secondary-100/60 shadow-lg shadow-black/20 dark:shadow-gray-700 p-10 rounded-xl relative">
              <motion.span
                className="absolute top-[-20px] right-[-2px] text-3xl md:text-4xl"
                animate={{ y: [0, -14, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                💭
              </motion.span>
              MINN&nbsp;JUNG
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
