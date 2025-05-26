"use client";

export function Skills() {
  return (
    <section className="min-h-screen max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20 scroll-snap-start">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
        {/* 예시 스킬 아이콘/텍스트 */}
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl">⚛️</span>
          <span className="mt-2 text-sm md:text-base">React</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl">🟦</span>
          <span className="mt-2 text-sm md:text-base">TypeScript</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl">🎨</span>
          <span className="mt-2 text-sm md:text-base">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl">🌐</span>
          <span className="mt-2 text-sm md:text-base">Next.js</span>
        </div>
        {/* ...더 많은 스킬 추가 가능 */}
      </div>
    </section>
  );
} 