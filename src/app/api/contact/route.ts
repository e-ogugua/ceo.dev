import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, service, budget, timeline, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Check if SMTP credentials are available
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('SMTP credentials not configured - email functionality disabled')
      return NextResponse.json(
        { message: 'Message received (email notification disabled)' },
        { status: 200 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // e.ogugua.dev@gmail.com
        pass: process.env.SMTP_PASS, // zrazkyqliynbqqze
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.ORDER_EMAIL_FROM || process.env.SMTP_USER, // e.ogugua.dev@gmail.com
      to: process.env.ORDER_NOTIFICATIONS_EMAIL || 'emmachuka@gmail.com', // emmachuka@gmail.com
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1e293b; color: #e2e8f0; padding: 20px;">
          <h1 style="color: #10b981; text-align: center; margin-bottom: 30px;">New Contact Form Submission</h1>

          <div style="background: #334155; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #10b981; margin-top: 0;">Contact Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #10b981;">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          </div>

          <div style="background: #334155; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #10b981; margin-top: 0;">Project Details</h2>
            ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
          </div>

          <div style="background: #334155; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #10b981; margin-top: 0;">Message</h2>
            <div style="background: #475569; padding: 15px; border-radius: 5px; border-left: 4px solid #10b981;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #475569;">
            <p style="color: #64748b; font-size: 14px;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
      // Also send a confirmation email to the user
      replyTo: email,
    }

    // Prepare confirmation email options
    const confirmationMailOptions = {
      from: process.env.ORDER_EMAIL_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for your inquiry - Emmanuel Ogugua',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1e293b; color: #e2e8f0; padding: 20px;">
          <h1 style="color: #10b981; text-align: center; margin-bottom: 30px;">Thank You for Reaching Out!</h1>

          <p>Hi ${name},</p>

          <p>Thank you for your interest in working together! I've received your message and I'm excited to learn more about your project.</p>

          <div style="background: #334155; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #10b981; margin-top: 0;">What happens next?</h3>
            <ul style="color: #e2e8f0;">
              <li>I'll review your project details within 24 hours</li>
              <li>We'll schedule a call to discuss your requirements</li>
              <li>I'll provide a detailed proposal and timeline</li>
              <li>We'll start building something amazing together!</li>
            </ul>
          </div>

          <p>In the meantime, feel free to:</p>
          <ul style="color: #e2e8f0;">
            <li>Explore my <a href="https://your-portfolio-url.com/portfolio-ventures" style="color: #10b981;">portfolio</a> to see my work</li>
            <li>Read my <a href="https://your-portfolio-url.com/blog" style="color: #10b981;">blog posts</a> for insights</li>
            <li>Check out my <a href="https://emmanuelos.vercel.app/" style="color: #10b981;">developer dashboard</a></li>
          </ul>

          <p>Looking forward to creating something amazing together!</p>

          <p>Best regards,<br>Emmanuel Chukwuka Ogugua</p>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #475569;">
            <p style="color: #64748b; font-size: 14px;">
              Software Engineer & Business Strategist
            </p>
          </div>
        </div>
      `,
    }

    // Send email (wrapped in try-catch for build compatibility)
    try {
      await transporter.sendMail(mailOptions)
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError)
      // Continue without failing the request
    }

    // Also send a confirmation email to the user (wrapped in try-catch)
    try {
      await transporter.sendMail(confirmationMailOptions)
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError)
      // Continue without failing the request
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
