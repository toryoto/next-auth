'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function SignOutButton() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  console.log(supabase)

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }
  
  return (
    <button 
      onClick={handleSignOut}
      className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md"
    >
      Sign out11
    </button>
  )
}