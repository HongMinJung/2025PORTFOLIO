import { motion } from "framer-motion";
import { Award, Sprout } from "lucide-react";
import { skillDescriptions, SkillType, formatSkillDescription } from "@/data/skills";


interface SkillCardProps {
  title: SkillType;
  description: string;
  onClick: (e: React.MouseEvent) => void;
}

interface ContentCardProps {
  isInView: boolean;
  onSkillClick: (title: SkillType, description: string, e: React.MouseEvent) => void;
}

const SkillCard = ({ title, onClick }: SkillCardProps) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    onClick={onClick}
    className="flex flex-col items-center gap-2 p-10 bg-primary-300/30 dark:bg-secondary-400/30 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer"
  >
    <Award className="w-16 h-16 text-primary-500 dark:text-secondary-400" />
    <h4 className="font-bold text-xl text-gray-800 dark:text-white">{title}</h4>
    <div className="absolute inset-0 bg-primary-800 dark:bg-secondary-800 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <p className="text-md font-semibold text-white">CLICK</p>
    </div>
  </motion.div>
);

const hashtags = [
  "#신입", "#UIUX", "#반응형웹", "#성실함", "#호기심대마왕", "#커피러버☕️", "#지속가능한개발", "#성장형인재", "#인내심레벨MAX"
];

export const ContentCard = ({ onSkillClick }: ContentCardProps) => {
  return (
    <div className="relative w-full h-[38rem] md:w-auto mt-20 flex flex-col gap-10 md:gap-20">
      {/* 소개 */}
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <Sprout className=" text-green-700" />
          사용자의 경험을 생각하며 코드 한 줄에 고민을 담습니다. <br />
          기획과 디자인을 이해하며 코드 한 줄에 소통을 담습니다. <br />
          지속적인 학습을 바탕으로 코드 한 줄에 성장을 담습니다.
        </p>
      </div>
       {/* 기술 스택 */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-bold mb-10 text-gray-800 dark:text-white">
          기술 스택
        </h3> 
        <div className="w-full grid grid-cols-2 gap-3">
          {Object.entries(skillDescriptions).map(([key, skill]) => (
            <SkillCard
              key={key}
              title={key as SkillType}
              description={formatSkillDescription(skill)}
              onClick={(e) => onSkillClick(key as SkillType, formatSkillDescription(skill), e)}
            />
          ))}
        </div>
      </div>
      {/* 해쉬태그 */}
      <div className="w-full flex flex-wrap gap-2 justify-center">
        {hashtags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-primary-300/30 dark:bg-secondary-400/30 text-primary-800 dark:text-secondary-400 text-xs font-semibold shadow"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}; 