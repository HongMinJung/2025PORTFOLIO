"use client";

import { Button } from "@/components/ui/Button/button";
import { ArrowRight, MoveDown, Sparkles, Lightbulb, Heart } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { ContactModal } from "@/components/modals/ContactModal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HeroMobile = dynamic(() => import("./HeroMobile"), { ssr: false });

export function Hero({ className }: { className?: string }) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      {/* md 미만 */}
      <div className="block md:hidden">
        <HeroMobile className={className} />
      </div>
      
      {/* 데스크탑 */}
      <div className="hidden md:block">
        <section ref={ref} className={"relative w-full h-full snap-start overflow-hidden " + (className || "") }>
          <div className="min-h-[calc(100vh-112px)] flex flex-col justify-between gap-12 container mx-auto px-6 py-24">
            {/* top 텍스트 */}
            <motion.div 
              className="flex justify-end pt-4"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 1}}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="font-extrabold text-4xl tracking-widest">2025</div>
                <div className="text-xs tracking-widest mt-[-4px]">DEVELOPER</div>
                <div className="text-xs tracking-widest mt-[-4px]">PORTFOLIO STIE</div>
              </div>
            </motion.div>

            {/* middle 텍스트 */}
            <div className="flex flex-row justify-between items-center py-8">
              {/* 좌측 텍스트 */}
              <motion.div 
                className="flex flex-col justify-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div>
                  <motion.p 
                    className="text-lg mb-2 ml-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    안녕하세요.
                  </motion.p>
                  <motion.h1 
                    className="text-5xl font-extrabold leading-tight mb-2 space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    신입 개발자
                    <br />
                    HONG MIN JUNG
                    <span className="text-sm font-normal ">입니다.</span>
                  </motion.h1>
                </div>
              </motion.div>

              {/* 소개 텍스트 */}
              <motion.div 
                className="flex flex-col gap-8"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.div 
                  className="flex flex-col items-end"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <Sparkles
                        key={i}
                        className="w-16 h-16 text-yellow-300 animate-twinkle"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      />
                    ))}
                  </div>
                  <div className="text-xs mt-1">오늘도 저는</div>
                  <div className="text-lg font-bold text-right">
                    &quot; 디자인의 감각을
                    <br />
                    코드로 구현합니다. &quot;
                  </div>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-end"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <Lightbulb
                        key={i}
                        className="w-14 h-14 text-yellow-500 animate-twinkle"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      />
                    ))}
                  </div>
                  <div className="text-xs mt-1">오늘도 저는</div>
                  <div className="text-lg font-bold text-right">
                    &quot; 끊임없이 고민하고
                    <br />
                    배우며 성장합니다. &quot;
                  </div>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-end"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <Heart
                        key={i}
                        className="w-16 h-16 text-red-400 animate-twinkle"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      />
                    ))}
                  </div>
                  <div className="text-xs mt-1">오늘도 저는</div>
                  <div className="text-lg font-bold text-right">
                    &quot; 커뮤니케이션을
                    <br />
                    중요하게 생각합니다. &quot;
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* bottom 텍스트 */}
            <motion.div 
              className="flex flex-row justify-between items-center pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {/* bottom 좌측 텍스트 */}
              <div className="text-xs space-y-1">
                <div className="flex gap-4">
                  <span className="w-64">STATUS</span>
                  <span>JUNIOR</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-64">POSITION</span>
                  <span>FRONTEND DEVELOPER</span>
                </div>
              </div>

              {/* bottom 스크롤 안내 메시지 */}
              <div className="flex flex-col items-center text-sm animate-bounce pointer-events-none select-none mr-60">
                <p>SCROLL DOWN</p>
                <MoveDown className="w-20 h-20" />
              </div>

              {/* bottom 우측 버튼 */}
              <div>
                <Button
                  className="flex items-center gap-2 border border-black dark:border-white px-6 py-3 rounded-lg bg-transparent hover:border-primary-400 hover:text-primary-400 dark:hover:border-secondary-400 dark:hover:text-secondary-400 transition focus:outline-none focus:ring-2 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-secondary-400 dark:focus:ring-secondary-400"
                  onClick={() => setShowModal(true)}
                >
                  CONTACT
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* 상세 모달 */}
          <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </section>
      </div>
    </>
  );
}
