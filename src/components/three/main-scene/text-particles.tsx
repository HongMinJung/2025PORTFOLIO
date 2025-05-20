"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface TextParticlesProps {
  text: string;
  position: [number, number, number];
  scale: number;
  color?: string;
}

export function TextParticles({
  text,
  position,
  scale,
  color = "#ffffff",
}: TextParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null!);

  // 텍스트를 파티클로 변환
  const { positions, colors } = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "bold 80px Pretendard";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const positions: number[] = [];
    const colors: number[] = [];
    const colorObj = new THREE.Color(color);

    // 픽셀 데이터를 파티클 위치로 변환
    for (let y = 0; y < canvas.height; y += 4) {
      for (let x = 0; x < canvas.width; x += 4) {
        const i = (y * canvas.width + x) * 4;
        if (data[i] > 128) {
          // 위치 정규화
          const x2 = (x / canvas.width - 0.5) * 10;
          const y2 = -(y / canvas.height - 0.5) * 2.5;
          const z2 = 0;

          positions.push(x2, y2, z2);
          colors.push(colorObj.r, colorObj.g, colorObj.b);
        }
      }
    }

    return { positions, colors };
  }, [text, color]);

  // 파티클 애니메이션
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const particles = pointsRef.current;
      const positions = particles.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        // 변수를 선언하지 않고 직접 z 값만 수정
        const i3 = i / 3;

        // z 값만 수정 (x, y는 사용하지 않으므로 변수로 선언하지 않음)
        positions[i + 2] =
          positions[i + 2] + Math.sin((i3 + clock.elapsedTime) * 0.1) * 0.05;
      }

      particles.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef} position={position} scale={scale}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={new Float32Array(positions)}
          itemSize={3}
          args={[new Float32Array(positions), 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={new Float32Array(colors)}
          itemSize={3}
          args={[new Float32Array(colors), 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} vertexColors transparent opacity={0.8} />
    </points>
  );
}
