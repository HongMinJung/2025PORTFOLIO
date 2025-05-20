"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function MouseFollow() {
  const mousePos = useRef(new THREE.Vector3(0, 0, 0));
  const groupRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // 정규화된 마우스 위치 (-1 ~ 1)
      mousePos.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // 마우스 위치에 따라 그룹 회전
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePos.current.x * 0.2,
        0.05
      );

      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePos.current.y * 0.2,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, -5]} scale={3}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          color="#3182ce"
          roughness={0.3}
          metalness={0.7}
          wireframe
        />
      </mesh>
    </group>
  );
}
