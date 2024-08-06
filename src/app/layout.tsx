import './globals.css'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import SignOutButton from './components/SignOutButton'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      <body className="bg-gray-100 h-screen flex flex-col overflow-hidden">
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
        <main className="flex-grow overflow-auto">
          {children}
        </main>
      </body>
    </html>
  )
}