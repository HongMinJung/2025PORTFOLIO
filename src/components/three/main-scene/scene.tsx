"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Preload } from "@react-three/drei";
import { SceneContent } from "./scene-content";
import { LoadingScreen } from "@/components/ui/loading-screen";

export function MainScene() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]} // 성능과 해상도 균형
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneContent />
          <Environment preset="city" />
          <Preload all />
        </Suspense>
      </Canvas>
      <LoadingScreen />
    </div>
  );
}
