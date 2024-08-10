import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from './server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // 認証不要のパスのリストを定義
  const publicPaths = [ '' ,'/login', '/signin', '/signup', '/forgot-password']
  
  if (!user && !publicPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}