"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";
import { FloatingShape } from "./floating-shape";
import { TextParticles } from "./text-particles";

export function SceneContent() {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null!);
  const scroll = useScroll();

  // 스크롤 위치에 따른 효과
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scroll.offset * Math.PI * 2;
      groupRef.current.position.z = scroll.offset * -10;
    }
  });

  // 반응형 처리
  useEffect(() => {
    const handleResize = () => {
      // 화면 크기에 따른 처리
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <group ref={groupRef}>
      {/* 배경 파티클 */}
      <TextParticles
        text="DEVELOPER"
        position={[0, 0, -10]}
        scale={viewport.width * 0.1}
      />

      {/* 떠다니는 3D 오브젝트들 */}
      <FloatingShape
        geometry="dodecahedron"
        color="#3182ce"
        position={[-2, 1.5, -2]}
        scale={0.6}
      />
      <FloatingShape
        geometry="octahedron"
        color="#90cdf4"
        position={[2.5, -1, -3]}
        scale={0.8}
      />
      <FloatingShape
        geometry="icosahedron"
        color="#2c5282"
        position={[0, -2, -5]}
        scale={1.2}
      />

      {/* 앰비언트 라이트 */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#90cdf4" />
    </group>
  );
}
