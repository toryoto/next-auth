'use client'

import SignUpForm from '../components/SignUpForm'

export default function SignUp() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Create an Account</h1>
        <SignUpForm />
      </div>
    </div>
  )
}