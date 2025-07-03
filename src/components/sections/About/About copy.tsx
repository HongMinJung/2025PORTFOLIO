"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { skillDescriptions, SkillType } from "@/data/skills";
import { SkillModal } from "@/components/modals/SkillModal";
import React from "react";
import { FaDownload } from "react-icons/fa";

export function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const [selectedSkill, setSelectedSkill] = useState<{ title: string; description: string } | null>(null);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const lineVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // 스킬 데이터를 배열로 변환
  const skills = Object.entries(skillDescriptions).map(([key, skill]) => ({
    ...skill,
    key: key as SkillType
  }));

  // 스킬 카드 클릭 핸들러
  const handleSkillClick = (skill: any) => {
    const description = `${skill.description}\n\n주요 기술:\n${skill.technologies.map((tech: any) => `• ${tech.name}`).join('\n')}`;
    setSelectedSkill({
      title: skill.title,
      description: description
    });
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setSelectedSkill(null);
  };

  const skillCardVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  return (
    <section ref={aboutRef} id="about" className="flex flex-col items-center justify-center min-h-screen md:min-h-[calc(100vh-112px)] snap-start py-16">
      <div className="max-w-8xl 3xl:max-w-10xl px-4 md:px-8 w-full">
        {/* 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex flex-col items-start justify-between gap-2 text-center md:text-right"
        >

          <div>
            <h2 className="text-4xl md:text-7xl font-bold">
              ABOUT
            </h2>
          </div>

          {/* 타이틀 소개 */}
          <motion.div
            className="text-lg md:text-xl font-semibold text-gray-500 space-y-0 md:space-y-2"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <motion.p variants={lineVariant}>
              사용자의 경험을 생각하며 코드 한 줄에 고민을 담습니다.
            </motion.p>
            <motion.p variants={lineVariant}>
              기획과 디자인을 이해하며 코드 한 줄에 소통을 담습니다.
            </motion.p>
            <motion.p variants={lineVariant}>
              지속적인 학습을 바탕으로 코드 한 줄에 성장을 담습니다.
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="flex flex-col tems-center justify-center gap-8 md:gap-10 2xl:gap-20 mt-14 md:mt-60">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 2xl:gap-20">
            {/* 프로필 이미지 */}
            <div className="flex flex-col items-center justify-center">
              <motion.div
                className="w-[230px] h-[250px] md:w-[280px] md:h-[300px] 2xl:w-[320px] 2xl:h-[410px]"
                variants={imageVariant}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                <div className="w-full h-full rounded-md overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    width={400}
                    height={450}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* 프로필 소개 */}
            <motion.div
              className="flex flex-col justify-between gap-4 md:gap-10"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {/* 프로필 이름과 직함 */}
              <div className="flex flex-row items-center justify-between gap-2 md:gap-6">
                <p className="text-xl md:text-2xl font-semibold text-primary-500 dark:text-secondary-500">
                  홍민정
                </p>
                <motion.p 
                  className="text-xl md:text-2xl font-semibold"
                  variants={lineVariant}
                  >
                  Frontend Developer
                </motion.p>
              </div>

              {/* 프로필 소개 텍스트 */}
              <div className="w-full flex flex-col gap-2">
                <div className="flex flex-row items-center justify-between gap-2 border-b border-primary-300 dark:border-secondary-700 pb-1 mb-1 md:pb-2 md:mb-2">
                  <p>생년월일</p>
                  <span className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">1999.04.15</span>
                </div>
                <div className="flex flex-row items-center justify-between gap-2 border-b border-primary-300 dark:border-secondary-700 pb-1 mb-1 md:pb-2 md:mb-2">
                  <p>연락처</p>
                  <span className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">010.5965.1504</span>
                </div>
                <div className="flex flex-row items-center justify-between gap-2">
                  <p>주소</p>
                  <span className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">서울시 중랑구</span>
                </div>
              </div>

              {/* 이력서 다운로드 버튼 */}
              <div className="flex flex-row items-center justify-center gap-2">
                <a href="/resume.pdf" download className="w-full">
                  <button className="w-full py-2 bg-primary-400 hover:bg-primary-700 dark:bg-secondary-600 dark:hover:bg-secondary-800 text-white rounded-md flex flex-row items-center justify-center gap-2 hover:bg-primary-600 dark:hover:bg-secondary-600 transition-all duration-300">
                    <FaDownload />
                    이력서 다운로드
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* 스킬 그리드 */}
          <div className="mx-auto w-auto flex-1 flex flex-col items-center gap-10">
            <motion.div 
              className="w-full grid grid-cols-2 gap-2 md:gap-4"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.key}
                  className="group py-8 px-4 md:p-10 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-primary-200 focus:border-primary-500 dark:hover:border-secondary-200 dark:focus:border-secondary-500 hover:shadow-lg transition-all duration-300 text-center h-auto md:h-[150px] flex flex-col"
                  variants={lineVariant}
                  onClick={() => handleSkillClick(skill)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center space-y-1 md:space-y-2 flex-1">
                    {/* 스킬 아이콘 */}
                    <div className="text-xl md:text-2xl">
                      {skill.technologies[0]?.icon && React.createElement(skill.technologies[0].icon)}
                    </div>

                    {/* 스킬 이름 */}
                    <h3 className="font-bold text-lg">
                      {skill.title}
                    </h3>

                    {/* 스킬 설명 */}
                    <p className="hidden md:block text-md text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                      {skill.description}
                    </p>
                  </div>

                  {/* 스킬 뱃지 */}
                  <div className="hidden md:flex justify-center gap-1 mt-auto">
                    {skill.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-100 text-primary-700 dark:bg-secondary-900 dark:text-secondary-300 text-xs rounded-full"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {skill.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-primary-200/30 text-primary-400 hover:bg-primary-300/30 hover:text-primary-500 dark:bg-secondary-800/30 dark:text-secondary-600 dark:hover:bg-secondary-500/30 dark:hover:text-secondary-500 text-xs rounded-full">
                        +{skill.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {selectedSkill && (
        <SkillModal
          isOpen={!!selectedSkill}
          onClose={handleCloseModal}
          title={selectedSkill.title}
          description={selectedSkill.description}
        />
      )}
    </section>
  );
}