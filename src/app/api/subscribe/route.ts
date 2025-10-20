import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { email, name, type = 'newsletter' } = await request.json()

    // Validate required fields
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const { data: existingSubscription } = await supabase
      .from('subscriptions')
      .select('id')
      .eq('email', email)
      .eq('type', type)
      .single()

    if (existingSubscription) {
      return NextResponse.json(
        { message: 'Already subscribed to this list' },
        { status: 200 }
      )
    }

    // Insert subscription into database
    const { error: insertError } = await supabase
      .from('subscriptions')
      .insert({
        email,
        name,
        type,
        created_at: new Date().toISOString()
      })

    if (insertError) {
      console.error('Database error:', insertError)
      return NextResponse.json(
        { error: 'Failed to save subscription' },
        { status: 500 }
      )
    }

    // Send confirmation email using existing nodemailer setup
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.default.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      const confirmationEmail = {
        from: process.env.SMTP_USER,
        to: email,
        subject: `Welcome to ${type === 'newsletter' ? 'Newsletter' : type === 'blog' ? 'Blog Updates' : 'Learning Hub'}!`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1e293b; color: #e2e8f0; padding: 20px;">
            <h1 style="color: #10b981; text-align: center; margin-bottom: 30px;">
              Welcome to ${type === 'newsletter' ? 'Newsletter' : type === 'blog' ? 'Blog Updates' : 'Learning Hub'}!
            </h1>

            <p>Hi ${name},</p>

            <p>Thank you for subscribing! You're now part of our exclusive community.</p>

            <div style="background: #334155; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #10b981; margin-top: 0;">What you'll receive:</h3>
              <ul style="color: #e2e8f0;">
                ${type === 'newsletter' ? `
                  <li>Weekly insights on tech and business strategy</li>
                  <li>Exclusive content and early access to new projects</li>
                  <li>Industry trends and analysis</li>
                ` : type === 'blog' ? `
                  <li>New blog posts and articles</li>
                  <li>Technical deep-dives and tutorials</li>
                  <li>Project case studies and insights</li>
                ` : `
                  <li>Educational content and tutorials</li>
                  <li>Learning resources and guides</li>
                  <li>Workshop announcements and materials</li>
                `}
              </ul>
            </div>

            <p>You can unsubscribe at any time by clicking the unsubscribe link in any email you receive from us.</p>

            <p>Best regards,<br>Emmanuel Chukwuka Ogugua</p>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #475569;">
              <p style="color: #64748b; font-size: 14px;">
                Software Engineer & Business Strategist
              </p>
            </div>
          </div>
        `,
      }

      try {
        await transporter.sendMail(confirmationEmail)
      } catch (emailError) {
        console.error('Failed to send confirmation email:', emailError)
        // Continue without failing the request
      }
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    )
  }
}
