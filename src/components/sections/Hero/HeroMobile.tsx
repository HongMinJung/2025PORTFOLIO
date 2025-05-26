"use client";

import { Button } from "@/components/ui/Button/button";
import { Sparkles, Lightbulb, Heart, ArrowRight, MoveDown } from "lucide-react";
import { useState, useRef } from "react";
import { ContactModal } from "@/components/modals/ContactModal";
import { motion, useInView } from "framer-motion";

export default function HeroMobile({ className }: { className?: string }) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref} className={"flex flex-col items-center justify-between h-screen min-h-screen w-full pt-64 pb-20"  + (className || "") }>
      {/* top 텍스트 */}
      <motion.div 
        className="flex flex-col items-center mb-40"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1, delay: 1}}
      >
        <div className="font-extrabold text-3xl tracking-widest">2025</div>
        <div className="text-xs tracking-widest mt-[-2px]">DEVELOPER</div>
        <div className="text-xs tracking-widest mt-[-2px]">PORTFOLIO STIE</div>
      </motion.div>

      {/* 소개 텍스트 */}
      <motion.div 
        className="flex flex-row gap-6 w-full items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <Sparkles 
                key={i} 
                className="w-14 h-14 text-yellow-300 animate-twinkle" 
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}
          </div>
          <div className="text-xs mt-1 text-center">오늘도 저는</div>
          <div className="text-sm font-bold text-center leading-tight">
            "디자인의 감각을
            <br/>
            코드로 구현합니다."
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center gap-2"
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
          <div className="text-xs mt-1 text-center">오늘도 저는</div>
          <div className="text-sm font-bold text-center leading-tight">
            "끊임없이 고민하고<br/>배우며 성장합니다."
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <Heart 
                key={i} 
                className="w-14 h-14 text-red-400 animate-twinkle" 
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}
          </div>
          <div className="text-xs mt-1 text-center">오늘도 저는</div>
          <div className="text-sm font-bold text-center leading-tight">
            "커뮤니케이션을<br/>중요하게 생각합니다."
          </div>
        </motion.div>
      </motion.div>

      {/* 메인 타이틀 */}
      <motion.div 
        className="flex flex-col items-center justify-center flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.p 
          className="text-md mb-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          안녕하세요.
        </motion.p>
        <motion.h1 
          className="text-4xl font-extrabold text-center leading-tight mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          신입 개발자
          <br />
          HONG MINJEONG
          <span className="text-base font-normal block">입니다.</span>
        </motion.h1>
      </motion.div>

      {/* 하단 정보/버튼 */}
      <motion.div 
        className="w-full flex flex-col items-center gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* 하단 정보 */}
        <div className="flex flex-col items-center text-xs gap-1">
          <div className="flex gap-4">
            <span>STATUS</span>
            <span>JUNIOR</span>
          </div>
          <div className="flex gap-4">
            <span>POSITION</span>
            <span>FULL STACK DEVELOPER</span>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div>
          <Button
            className="flex items-center gap-2 border border-white px-6 py-3 rounded-lg bg-transparent text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setShowModal(true)}
          >
            CONTACT
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* 하단 스크롤 애니메이션 */}
        <div className="flex flex-col items-center text-sm animate-bounce pointer-events-none select-none mt-2">
          <p>SCROLL DOWN</p>
          <MoveDown className="w-8 h-8" />
        </div>
      </motion.div>
      
      {/* 상세 모달 */}
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
} 