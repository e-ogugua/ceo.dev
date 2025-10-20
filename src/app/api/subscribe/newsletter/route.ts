import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json()

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Check if already subscribed to newsletter
    const { data: existingNewsletter } = await supabase
      .from('subscriptions')
      .select('id')
      .eq('email', email)
      .eq('type', 'newsletter')
      .single()

    if (existingNewsletter) {
      return NextResponse.json(
        { message: 'Already subscribed to newsletter' },
        { status: 200 }
      )
    }

    // Insert newsletter subscription
    const { error } = await supabase
      .from('subscriptions')
      .insert({
        email,
        name,
        type: 'newsletter',
        created_at: new Date().toISOString()
      })

    if (error) {
      console.error('Newsletter subscription error:', error)
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process newsletter subscription' },
      { status: 500 }
    )
  }
}
