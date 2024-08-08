import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const signUpSuccess = requestUrl.searchParams.get('signUpSuccess')
  const signInSuccess = requestUrl.searchParams.get('signInSuccess')


  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  if (signUpSuccess || signInSuccess) {
    console.log(1111);
    return NextResponse.redirect(`${requestUrl.origin}/dashboard`)
  }

  return NextResponse.redirect(`${requestUrl.origin}/login?error=AuthenticationFailed`)
}