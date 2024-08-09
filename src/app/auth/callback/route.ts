import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(`${requestUrl.origin}/login`)
  }

  const supabase = createClient()

  try {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    if (error) throw error

    // Successfully exchanged code for session
    return NextResponse.redirect(`${requestUrl.origin}/dashboard`)
  } catch (error) {
    console.error('Error exchanging code for session:', error)
    return NextResponse.redirect(`${requestUrl.origin}/login?error=AuthenticationFailed`)
  }
}