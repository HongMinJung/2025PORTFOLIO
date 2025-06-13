import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { Download, MoveLeft } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import { ContentCard } from "./ContentCard";
import { SkillType } from "@/data/skills";
import { SkillModal } from "@/components/modals/SkillModal";

interface ProfileCardProps {
  isInView: boolean;
  isFlipped: boolean;
  setIsFlipped: (v: boolean) => void;
}

export const ProfileCard = ({ isInView, isFlipped, setIsFlipped }: ProfileCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", description: "" });
  const cardRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);
  const rotateY = useTransform(progress, [0, 1], [0, 180]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node) && !modalOpen) {
      setIsFlipped(false);
      progress.set(0);
    }
  }, [modalOpen, progress, setIsFlipped]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  const handleResumeDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open('/resume.pdf', '_blank');
  };

  const handleSkillClick = (title: SkillType, description: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setModalContent({ title, description });
    setModalOpen(true);
  };

  const handleModalClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalOpen(false);
  };

  return (
    <motion.div 
      className="w-full md:w-auto flex justify-center items-center"
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-full md:w-auto max-w-full perspective-1000">
        <motion.div
          ref={cardRef}
          onClick={(e) => {
            e.stopPropagation();
            if (!isFlipped) {
              setIsFlipped(true);
              progress.set(1);
            }
          }}
          style={{
            transformStyle: "preserve-3d",
            rotateY,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative w-full md:w-auto max-w-full rounded-2xl md:shadow-xl md:shadow-gray-200 md:dark:shadow-gray-700 hover:shadow-primary-300/50 dark:hover:shadow-secondary-300/50 md:border md:border-gray-100 dark:border-gray-800 p-20 group cursor-pointer"
        >
          {/* 카드 앞면*/}
          <div className="w-full" style={{ backfaceVisibility: "hidden" }}>
            <div className="relative w-[18rem] h-[18rem] md:w-[20rem] md:h-[24rem] lg:w-[26rem] lg:h-[32rem] mb-10 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                priority
                className="object-cover transition-all duration-300 group-hover:blur-none group-hover:grayscale-0 blur-sm grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-md font-semibold text-white">CLICK</p>
              </div>
            </div>
            <div className="text-center mt-10">
              <span className="text-2xl font-semibold">홍&nbsp;&nbsp;민&nbsp;&nbsp;정</span>
            </div>
            <div className="text-center mb-6">
              <span className="text-lg text-gray-500 dark:text-gray-300 font-medium">Frontend Developer</span>
            </div>
            <div className="w-full border-t border-primary-100 dark:border-secondary-800 my-4" />
            <div className="w-full flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400 mb-6 px-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 dark:text-gray-500">이메일</span>
                <span className="font-medium">hminjung99@gmail.com</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 dark:text-gray-500">연락처</span>
                <span className="font-medium">010.5965.1504</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 dark:text-gray-500">주소</span>
                <span className="font-medium">서울시 중랑구</span>
              </div>
            </div>
            <motion.button
              onClick={handleResumeDownload}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 font-semibold border border-gray-200 dark:border-gray-800 rounded-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              <span>이력서 다운로드</span>
            </motion.button>
          </div>

          {/* 카드 뒷면 */}
          <div 
            className="w-full h-full absolute inset-0 rounded-2xl  p-8"
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            <ContentCard 
              isInView={isInView} 
              onSkillClick={handleSkillClick} 
            />
            <div 
              className="absolute bottom-8 left-20 flex justify-center items-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
                progress.set(0);
              }}
            >
              <p className="text-sm font-semibold flex items-center gap-2 mb-8">
                <MoveLeft className="w-20 h-20" />&nbsp;앞면으로 이동
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skill Modal */}
      <SkillModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        title={modalContent.title}
        description={modalContent.description}
      />
    </motion.div>
  );
}; 