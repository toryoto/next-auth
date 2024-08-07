'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function SignOutButton() {
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      router.refresh()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }
  
  return (
    <button 
      onClick={handleSignOut}
      className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md"
    >
      Sign out
    </button>
  )
}