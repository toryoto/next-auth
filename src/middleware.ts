import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { createClient } from './utils/supabase/server'

export async function middleware(request: NextRequest) {
  const res = await updateSession(request)

  if (request.nextUrl.pathname === '/') {
    const supabase = createClient()

    const { data: { session } } = await supabase.auth.getSession()

    if (session) {
      // ログイン済みの場合、ダッシュボードにリダイレクト
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}