import SignInForm from '../components/SignInForm'

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Welcome Back</h1>
        <p className="text-center text-gray-600 mb-8">Sign in to access your account</p>
        <SignInForm />
      </div>
    </div>
  )
}
