import nodemailer from 'nodemailer'

// 이메일 설정 - 실제 배포 시 환경변수로 처리
const emailConfig = {
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-password',
  },
}

export interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  try {
    const transporter = nodemailer.createTransport(emailConfig)
    
    // 이메일 템플릿
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3182ce;">새로운 연락 요청</h2>
        <p><strong>이름:</strong> ${data.name}</p>
        <p><strong>이메일:</strong> ${data.email}</p>
        <p><strong>제목:</strong> ${data.subject}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f7fafc; border-radius: 5px;">
          <p><strong>메시지:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #718096;">
          이 이메일은 포트폴리오 웹사이트의 연락 양식을 통해 자동으로 전송되었습니다.
        </p>
      </div>
    `
    
    // 이메일 보내기
    await transporter.sendMail({
      from: `"포트폴리오 웹사이트" <${emailConfig.auth.user}>`,
      to: emailConfig.auth.user, // 자신의 이메일로 전송 (나중에 변경 가능)
      replyTo: data.email,
      subject: `포트폴리오 연락: ${data.subject}`,
      html: htmlContent,
    })
    
    return true
  } catch (error) {
    console.error('이메일 전송 오류:', error)
    return false
  }
}