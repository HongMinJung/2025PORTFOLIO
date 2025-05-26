"use client";

const skills = {
  frontend: [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "MongoDB", level: 65 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 80 },
  ],
};

export default function SkillsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 프론트엔드 스킬 */}
        <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-6">프론트엔드</h2>
          <div className="space-y-4">
            {skills.frontend.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 백엔드 스킬 */}
        <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-6">백엔드</h2>
          <div className="space-y-4">
            {skills.backend.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 도구 */}
        <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-6">도구</h2>
          <div className="space-y-4">
            {skills.tools.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 