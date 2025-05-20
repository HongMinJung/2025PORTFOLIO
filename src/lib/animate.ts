import * as THREE from 'three'

export const easing = {
  // 이징 함수 모음
  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => t * (2 - t),
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t: number) => t * t * t,
  easeOutCubic: (t: number) => --t * t * t + 1,
  easeInOutCubic: (t: number) => 
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

export const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t
}

export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}

export const mapRange = (
  value: number, 
  inMin: number, 
  inMax: number, 
  outMin: number, 
  outMax: number
) => {
  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin)
}

// Three.js 관련 애니메이션 유틸리티 함수들

// Vector3 선형 보간
export const lerpVector3 = (
  start: THREE.Vector3, 
  end: THREE.Vector3, 
  alpha: number
): THREE.Vector3 => {
  const result = new THREE.Vector3();
  return result.copy(start).lerp(end, alpha);
}

// 색상 보간
export const lerpColor = (
  startColor: THREE.Color, 
  endColor: THREE.Color, 
  alpha: number
): THREE.Color => {
  const result = new THREE.Color();
  return result.copy(startColor).lerp(endColor, alpha);
}

// 쿼터니언 회전 보간
export const slerpQuaternion = (
  start: THREE.Quaternion, 
  end: THREE.Quaternion, 
  alpha: number
): THREE.Quaternion => {
  const result = new THREE.Quaternion();
  return result.copy(start).slerp(end, alpha);
}

// 메쉬 위치 애니메이션
export const animateMeshPosition = (
  mesh: THREE.Mesh,
  targetPosition: THREE.Vector3,
  duration: number = 1,
  easingFn: (t: number) => number = easing.easeOutCubic
): () => boolean => {
  const startPosition = mesh.position.clone();
  const startTime = Date.now();
  
  return () => {
    const elapsed = (Date.now() - startTime) / 1000;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easingFn(progress);
    
    mesh.position.copy(
      lerpVector3(startPosition, targetPosition, easedProgress)
    );
    
    return progress >= 1; // 애니메이션 완료 여부 반환
  };
}