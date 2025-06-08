"use client";

import { motion } from "framer-motion";
import { Award, X, Code2, Server, Palette, Wrench } from "lucide-react";
import { skillDescriptions, SkillType } from "@/data/skills";

interface SkillModalProps {
  isOpen: boolean;
  onClose: (e: React.MouseEvent) => void;
  title: string;
  description: string;
}

export const SkillModal = ({
  isOpen,
  onClose,
  title,
  description,
}: SkillModalProps) => {
  if (!isOpen) return null;

  // 설명 텍스트를 메인 설명과 기술 목록으로 분리
  const descriptionLines = description.split("\n\n");
  const mainDescription = descriptionLines[0];

  // 기술 데이터 가져오기
  const skill = skillDescriptions[title as SkillType];

  // 기술 영역에 따른 아이콘 매핑
  const getIcon = (title: string) => {
    switch (title) {
      case "Frontend":
        return <Code2 className="w-20 h-20 text-primary" />;
      case "Backend":
        return <Server className="w-20 h-20 text-primary" />;
      case "Design":
        return <Palette className="w-20 h-20 text-primary" />;
      case "Tools":
        return <Wrench className="w-20 h-20 text-primary" />;
      default:
        return <Award className="w-20 h-20 text-primary" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 모달 컨텐츠 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="bg-white/90 dark:bg-black/90 dark:border dark:border-gray-900 rounded-2xl p-8 max-w-2xl w-full mx-4 relative shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="p-6 rounded-xl">{getIcon(title)}</div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300 px-12 pb-10">
            {mainDescription}
          </p>
          <div className="flex flex-wrap gap-3 justify-center border-t border-gray-200 dark:border-gray-700 p-10">
            {skill &&
              skill.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-1 px-2 py-3 text-gray-700 dark:text-gray-200 bg-primary-200/30 dark:bg-secondary-300/60 rounded-xl text-base font-medium shadow-sm"
                >
                  <tech.icon className="w-5 h-5" />
                  {tech.name}
                </span>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
