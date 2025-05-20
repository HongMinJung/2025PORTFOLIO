'use client'

import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

export function useThreePerformance() {
  const { gl, scene } = useThree()
  
  useEffect(() => {
    // 초기 설정
    gl.setPixelRatio(window.devicePixelRatio)
    
    // 모바일 디바이스 감지
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    if (isMobile) {
      // 모바일에서 성능 최적화
      gl.setPixelRatio(Math.min(1.5, window.devicePixelRatio))
      
      // 그림자 끄기
      gl.shadowMap.enabled = false
      
      // 안티앨리어싱 설정은 변경할 수 없으므로 제거
      // gl.antialias = false // 이 줄 제거
    }
    
    return () => {
      // 정리 작업
      gl.dispose()
    }
  }, [gl, scene])
}