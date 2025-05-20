import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Box 컴포넌트의 props 타입 정의
type BoxProps = JSX.IntrinsicElements["mesh"] & {
  color?: string;
};

function Box(props: BoxProps) {
  const { color = "#3182ce", ...meshProps } = props;
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.2;
    // 부드러운 위아래 움직임 추가
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <mesh
      {...meshProps}
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
      scale={clicked ? 1.2 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "#f56565" : color} />
    </mesh>
  );
}

export default function ThreeCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkMobile();

    // 윈도우 크기 변경 감지
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="bg-transparent"
        gl={{
          powerPreference: "high-performance",
          antialias: !isMobile,
          alpha: true,
        }}
        dpr={isMobile ? [1, 1.5] : [1, 2]} // 모바일에서는 픽셀 비율 제한
      >
        <color attach="background" args={["transparent"]} />

        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} color="#90cdf4" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />

        {/* 성능 모니터 (개발 중에만 사용) */}
        {/* <Stats /> */}
      </Canvas>

      {/* 선택적: 모바일 장치를 위한 안내 텍스트 */}
      <div className="absolute left-0 right-0 text-xs text-center text-gray-500 pointer-events-none bottom-2 dark:text-gray-400">
        <p>클릭하여 상호작용 | 드래그하여 회전</p>
      </div>
    </div>
  );
}
