"use client";

import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3D 요소 로딩 시간 시뮬레이션
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          {/* 로딩 애니메이션 */}
          <div className="absolute inset-0 border-4 rounded-full border-t-primary-light dark:border-t-primary-dark border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>
        <p className="text-lg font-medium">로딩 중...</p>
      </div>
    </div>
  );
}
