"use client";

import { useState, useEffect, useRef } from "react";
import { useDeviceDetect } from "@/hooks/use-device-detect";

export function DebugPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const deviceInfo = useDeviceDetect();
  const [fpsCount, setFpsCount] = useState(0);

  // FPS 계산 로직 추가
  const fpsRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(performance.now());
  const frameCountRef = useRef<number>(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastFpsUpdate = performance.now();

    const calculateFps = () => {
      const now = performance.now();
      frameCountRef.current++;

      // 1초(1000ms)마다 FPS 계산
      if (now - lastFpsUpdate > 1000) {
        fpsRef.current = Math.round(
          (frameCountRef.current * 1000) / (now - lastFpsUpdate)
        );
        setFpsCount(fpsRef.current);
        frameCountRef.current = 0;
        lastFpsUpdate = now;
      }

      lastTimeRef.current = now;
      animationFrameId = requestAnimationFrame(calculateFps);
    };

    animationFrameId = requestAnimationFrame(calculateFps);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transition-all ${
        isOpen ? "w-80" : "w-10"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute text-gray-500 top-2 right-2 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        {isOpen ? "X" : "D"}
      </button>

      {isOpen && (
        <div className="mt-4">
          <h3 className="mb-2 font-medium">디버그 정보</h3>
          <ul className="space-y-1 text-sm">
            <li>
              디바이스:{" "}
              {deviceInfo.isMobile
                ? "모바일"
                : deviceInfo.isTablet
                ? "태블릿"
                : "데스크톱"}
            </li>
            <li>방향: {deviceInfo.isLandscape ? "가로" : "세로"}</li>
            <li>FPS: {fpsCount}</li>
            <li>
              해상도: {window.innerWidth} x {window.innerHeight}
            </li>
            <li>픽셀 비율: {window.devicePixelRatio}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
