"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion"; // framer-motion 설치 필요
import { FullpageSection } from "@/components/layout/fullpage-section";
import { SectionTitle } from "@/components/ui/section-title";
import Image from "next/image";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <FullpageSection id="about" background="light">
      <div className="w-full max-w-6xl mx-auto" ref={ref}>
        <SectionTitle
          title="About Me"
          subtitle="풀스택 개발자로서의 저의 이야기를 소개합니다"
        />

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {/* 프로필 이미지 및 기본 정보 */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 mb-6 overflow-hidden border-4 rounded-full border-primary-light dark:border-primary-dark">
              <Image
                src="/images/profile.jpg"
                alt="홍민정의 프로필 이미지"
                fill
                sizes="(max-width: 768px) 100vw, 256px"
                className="object-cover"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="mb-2 text-2xl font-bold">홍민정</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                풀스택 신입 개발자
              </p>

              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="w-24 font-medium">교육</span>
                  <span>OO대학교 컴퓨터공학과</span>
                </p>
                <p className="flex items-center">
                  <span className="w-24 font-medium">위치</span>
                  <span>서울, 대한민국</span>
                </p>
                <p className="flex items-center">
                  <span className="w-24 font-medium">이메일</span>
                  <span>example@example.com</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* 소개 내용 */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>
              사용자 중심의 웹 애플리케이션 개발에 열정을 가진 풀스택
              개발자입니다. 프론트엔드와 백엔드 기술을 모두 활용하여 완결성 있는
              솔루션을 만드는 것을 지향합니다.
            </p>

            <p>
              React와 Next.js를 활용한 프론트엔드 개발에 강점이 있으며, Node.js
              기반의 백엔드 시스템 구축 경험을 갖추고 있습니다. 사용자 경험을
              향상시키기 위해 Three.js와 같은 시각화 라이브러리를 적극적으로
              활용합니다.
            </p>

            <h4 className="mt-6 mb-2 text-xl font-semibold">주요 관심 분야</h4>
            <ul className="ml-2 space-y-1 list-disc list-inside">
              <li>반응형 웹 애플리케이션 개발</li>
              <li>인터랙티브 사용자 인터페이스 구현</li>
              <li>웹 성능 최적화</li>
              <li>모던 웹 프레임워크 및 라이브러리</li>
            </ul>

            <h4 className="mt-6 mb-2 text-xl font-semibold">
              취미 및 기타 활동
            </h4>
            <p>
              개발 외에도 디자인, 사진 촬영, 음악 감상 등 다양한 분야에 관심이
              있습니다. 새로운 기술을 배우고 적용하는 것을 즐기며, 개발자
              커뮤니티 활동에도 적극적으로 참여하고 있습니다.
            </p>
          </motion.div>
        </div>

        {/* 주요 특징/가치 */}
        <motion.div
          className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-3"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="p-6 rounded-lg bg-surface-light dark:bg-surface-dark">
            <h4 className="mb-3 text-lg font-semibold">사용자 중심</h4>
            <p className="text-gray-600 dark:text-gray-400">
              모든 개발의 중심에는 사용자 경험이 있습니다. 직관적이고 접근성
              높은 인터페이스를 지향합니다.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-surface-light dark:bg-surface-dark">
            <h4 className="mb-3 text-lg font-semibold">지속적 학습</h4>
            <p className="text-gray-600 dark:text-gray-400">
              빠르게 변화하는 웹 개발 환경에서 새로운 기술과 방법론을 지속적으로
              학습하고 적용합니다.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-surface-light dark:bg-surface-dark">
            <h4 className="mb-3 text-lg font-semibold">협업과 소통</h4>
            <p className="text-gray-600 dark:text-gray-400">
              명확한 커뮤니케이션과 효과적인 협업을 통해 팀의 성과를
              극대화합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </FullpageSection>
  );
}
