import { NextResponse } from 'next/server'

export type ApiError = {
  message: string
  status: number
}

export function errorResponse(error: ApiError | Error, status = 500): NextResponse {
  console.error(`API 오류: ${error.message}`)
  
  if ('status' in error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status }
    )
  }
  
  return NextResponse.json(
    { error: error.message || '서버 오류가 발생했습니다.' },
    { status }
  )
}

// any 대신 Record<string, unknown> 사용
export function validateRequestBody(body: Record<string, unknown>, requiredFields: string[]): boolean {
  if (!body) return false
  
  for (const field of requiredFields) {
    if (!body[field]) return false
  }
  
  return true
}