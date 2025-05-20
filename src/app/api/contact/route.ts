// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, EmailData } from '@/lib/email-service'
import { errorResponse, validateRequestBody } from '@/lib/api-utils'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // 필수 필드 검증
    if (!validateRequestBody(body, ['name', 'email', 'subject', 'message'])) {
      return errorResponse({ 
        message: '모든 필드를 입력해주세요.', 
        status: 400 
      })
    }
    
    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return errorResponse({ 
        message: '유효한 이메일 주소를 입력해주세요.', 
        status: 400 
      })
    }
    
    // 이메일 전송
    const emailData: EmailData = {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message
    }
    
    const success = await sendContactEmail(emailData)
    
    if (!success) {
      return errorResponse({ 
        message: '메시지 전송에 실패했습니다. 나중에 다시 시도해주세요.', 
        status: 500 
      })
    }
    
    return NextResponse.json({ 
      message: '메시지가 성공적으로 전송되었습니다.' 
    })
    
  } catch (error) {
    return errorResponse(error as Error)
  }
}