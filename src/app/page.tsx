import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to Your App</h1>
        <p className="text-gray-600 mb-8">Experience the next generation of web applications.</p>
        <div className="space-y-4">
          <Link href="/login" className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200">
            Sign In
          </Link>
          <Link href="/signup" className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}