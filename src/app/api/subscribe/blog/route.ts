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

    // Check if already subscribed to blog updates
    const { data: existingBlog } = await supabase
      .from('subscriptions')
      .select('id')
      .eq('email', email)
      .eq('type', 'blog')
      .single()

    if (existingBlog) {
      return NextResponse.json(
        { message: 'Already subscribed to blog updates' },
        { status: 200 }
      )
    }

    // Insert blog subscription
    const { error } = await supabase
      .from('subscriptions')
      .insert({
        email,
        name,
        type: 'blog',
        created_at: new Date().toISOString()
      })

    if (error) {
      console.error('Blog subscription error:', error)
      return NextResponse.json(
        { error: 'Failed to subscribe to blog updates' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to blog updates!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Blog subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process blog subscription' },
      { status: 500 }
    )
  }
}
