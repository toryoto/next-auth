'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Session } from '@supabase/supabase-js'
import { createClient } from '@/utils/supabase/client'
import SignOutButton from './SignOutButton'

export default function Navbar({ initialSession }: { initialSession: any }) {
  const [session, setSession] = useState<Session | null>(initialSession)
  const supabase = createClient()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <header className="bg-white shadow-md z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Your App Name</div>
          <div className="flex items-center space-x-4">
            {session ? (
              <SignOutButton />
            ) : (
              <>
                <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Sign in
                </Link>
                <Link href="/signup" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-200">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}