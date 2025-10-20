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

    // Check if already subscribed to learning content
    const { data: existingLearn } = await supabase
      .from('subscriptions')
      .select('id')
      .eq('email', email)
      .eq('type', 'learn')
      .single()

    if (existingLearn) {
      return NextResponse.json(
        { message: 'Already subscribed to learning content' },
        { status: 200 }
      )
    }

    // Insert learn subscription
    const { error } = await supabase
      .from('subscriptions')
      .insert({
        email,
        name,
        type: 'learn',
        created_at: new Date().toISOString()
      })

    if (error) {
      console.error('Learn subscription error:', error)
      return NextResponse.json(
        { error: 'Failed to subscribe to learning content' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to learning content!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Learn subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process learning subscription' },
      { status: 500 }
    )
  }
}
