"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FullpageSection } from "@/components/layout/fullpage-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { skills, Skill } from "@/data/skil";
import Image from "next/image";

export function SkillsSection() {
  const [filter, setFilter] = useState<
    "all" | "frontend" | "backend" | "other"
  >("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // 필터링된 스킬
  const filteredSkills = skills.filter((skill) =>
    filter === "all" ? true : skill.category === filter
  );

  return (
    <FullpageSection id="skills" background="dark">
      <div className="w-full max-w-6xl mx-auto" ref={ref}>
        <SectionTitle
          title="Skills & Technologies"
          subtitle="저의 기술 스택과 능력을 소개합니다"
          centered
        />

        {/* 필터 버튼 */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            variant={filter === "all" ? "primary" : "outline"}
            onClick={() => setFilter("all")}
          >
            전체
          </Button>
          <Button
            variant={filter === "frontend" ? "primary" : "outline"}
            onClick={() => setFilter("frontend")}
          >
            프론트엔드
          </Button>
          <Button
            variant={filter === "backend" ? "primary" : "outline"}
            onClick={() => setFilter("backend")}
          >
            백엔드
          </Button>
          <Button
            variant={filter === "other" ? "primary" : "outline"}
            onClick={() => setFilter("other")}
          >
            기타
          </Button>
        </motion.div>

        {/* 스킬 카드 그리드 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </FullpageSection>
  );
}

interface SkillCardProps {
  skill: Skill;
  index: number;
  isInView: boolean;
}

function SkillCard({ skill, index, isInView }: SkillCardProps) {
  return (
    <motion.div
      className="overflow-hidden transition-shadow rounded-lg shadow-md bg-surface-light dark:bg-surface-dark hover:shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * (index % 8) }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 mr-4">
            <Image
              src={`/images/skills/${skill.icon}.svg`}
              alt={`${skill.name} 아이콘`}
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">{skill.name}</h3>
            <div className="flex mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full mr-1 ${
                    i < skill.level
                      ? "bg-primary-light dark:bg-primary-dark"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {skill.description}
        </p>
      </div>
    </motion.div>
  );
}
