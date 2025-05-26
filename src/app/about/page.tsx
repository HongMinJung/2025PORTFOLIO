"use client";

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        About Me
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 프로필 섹션 */}
        <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-4">프로필</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">이름</h3>
              <p className="text-gray-600 dark:text-gray-400">홍민정</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">직무</h3>
              <p className="text-gray-600 dark:text-gray-400">프론트엔드 개발자</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">이메일</h3>
              <p className="text-gray-600 dark:text-gray-400">hminjung99@gmail.com</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">위치</h3>
              <p className="text-gray-600 dark:text-gray-400">서울시 중랑구</p>
            </div>
          </div>
        </div>

        {/* 경력 섹션 */}
        <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-4">경력</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">회사명</h3>
              <p className="text-gray-600 dark:text-gray-400">근무 기간</p>
              <p className="text-gray-600 dark:text-gray-400">주요 업무</p>
            </div>
          </div>
        </div>

        {/* 교육 섹션 */}
        <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-4">교육</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">학교명</h3>
              <p className="text-gray-600 dark:text-gray-400">전공</p>
              <p className="text-gray-600 dark:text-gray-400">졸업년도</p>
            </div>
          </div>
        </div>

        {/* 취미/관심사 섹션 */}
        <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-4">취미/관심사</h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              취미와 관심사를 작성해주세요.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 