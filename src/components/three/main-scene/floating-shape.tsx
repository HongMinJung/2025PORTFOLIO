"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingShapeProps {
  geometry:
    | "box"
    | "sphere"
    | "dodecahedron"
    | "octahedron"
    | "icosahedron"
    | "tetrahedron";
  color: string;
  position: [number, number, number];
  scale: number;
  speed?: number;
}

export function FloatingShape({
  geometry,
  color,
  position,
  scale,
  speed = 1,
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  // 각 오브젝트마다 약간 다른 회전 속도
  const rotationSpeed = {
    x: 0.01 * speed * (Math.random() * 0.5 + 0.5),
    y: 0.02 * speed * (Math.random() * 0.5 + 0.5),
    z: 0.005 * speed * (Math.random() * 0.5 + 0.5),
  };

  // 부드러운 움직임을 위한 sin/cos 애니메이션
  const initialY = position[1];
  const floatSpeed = 0.5 * speed * (Math.random() * 0.5 + 0.75);
  const floatAmplitude = 0.3 * (Math.random() * 0.5 + 0.5);

  // 애니메이션 실행
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // 회전 효과
      meshRef.current.rotation.x += rotationSpeed.x;
      meshRef.current.rotation.y += rotationSpeed.y;
      meshRef.current.rotation.z += rotationSpeed.z;

      // 부유 효과
      meshRef.current.position.y =
        initialY + Math.sin(clock.elapsedTime * floatSpeed) * floatAmplitude;
    }
  });

  // 선택된 형태에 따라 geometry 생성
  const getGeometry = () => {
    switch (geometry) {
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      case "sphere":
        return <sphereGeometry args={[1, 32, 32]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1]} />;
      case "octahedron":
        return <octahedronGeometry args={[1]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[1]} />;
      case "tetrahedron":
        return <tetrahedronGeometry args={[1]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {getGeometry()}
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
    </mesh>
  );
}
