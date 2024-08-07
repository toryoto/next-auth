import './globals.css'
import { createClient } from '../utils/supabase/server'
import Link from 'next/link'
import SignOutButton from './components/SignOutButton'
import Navbar from './components/Navbar'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      <body className="bg-gray-100 h-screen flex flex-col overflow-hidden">
        <Navbar initialSession={session} />
        <main className="flex-grow overflow-auto">
          {children}
        </main>
      </body>
    </html>
  )
}