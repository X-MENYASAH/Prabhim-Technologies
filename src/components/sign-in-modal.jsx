import { useState, useEffect } from "react"
import { Eye, EyeOff, X } from "lucide-react"

export default function SignInModal({ isOpen, onClose, onSwitchToSignUp }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)
  const [activeQuote, setActiveQuote] = useState(0)

  const quotes = [
    '"Great design is where imagination meets precision."',
    '"Innovation drives excellence in every project."',
    '"Building the future, one line of code at a time."',
  ]

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setActiveQuote((prev) => (prev + 1) % quotes.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isOpen])

  const handleSignIn = (e) => {
    e.preventDefault()
    console.log("Sign in with:", { email, password, keepLoggedIn })
    // Add your sign-in logic here
  }

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google")
    // Add your Google sign-in logic here
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex min-h-[600px]">
          {/* Left Side - Sign In Form */}
          <div className="flex flex-1 flex-col justify-center px-8 py-12 sm:px-12 lg:px-16">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-500" />
            </button>

            <div className="w-full max-w-sm">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Sign in</h1>
                <p className="text-gray-500">Please login to continue to your account.</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSignIn} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-orange-500 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enteryour@gmail.com"
                    className="w-full px-4 py-3 border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-500 text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-300 text-gray-900 placeholder-gray-400"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Keep Logged In Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="keepLoggedIn"
                    checked={keepLoggedIn}
                    onChange={(e) => setKeepLoggedIn(e.target.checked)}
                    className="w-5 h-5 border-2 border-gray-300 rounded cursor-pointer"
                  />
                  <label htmlFor="keepLoggedIn" className="ml-3 text-gray-700 cursor-pointer">
                    Keep me logged in
                  </label>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Sign in
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-3 text-gray-500 text-sm">or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Google Sign In */}
              <button
                onClick={handleGoogleSignIn}
                className="w-full border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fill="currentColor">
                    G
                  </text>
                </svg>
                Continue with Google
              </button>

              {/* Sign Up Link */}
              <p className="text-center mt-6 text-gray-600">
                Don't have an account?{" "}
                <button 
                  onClick={onSwitchToSignUp}
                  className="text-orange-500 hover:text-orange-600 font-semibold"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>

          {/* Right Side - Brand Panel */}
          <div className="hidden lg:flex flex-1 flex-col justify-between bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-500 p-12">
            {/* Logo and Branding */}
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <img
                  src="/assets/images/logo1.png"
                  alt="Prabhim Technologies Logo"
                  width={120}
                  height={120}
                  className="w-28 h-28 object-contain drop-shadow-lg"
                />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-1">PRABHIM</h2>
              <p className="text-orange-700 text-sm tracking-widest font-semibold">TECHNOLOGIES</p>
            </div>

            {/* Welcome Section */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-3">Welcome to PRABHIM</h3>
              <p className="text-white text-lg">Enter your credentials to get started.</p>
            </div>

            {/* Quote Section */}
            <div className="text-center">
              <p className="text-white text-2xl font-bold mb-6 min-h-16 flex items-center justify-center">
                {quotes[activeQuote]}
              </p>
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveQuote(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeQuote ? "bg-white w-8" : "bg-white/50"
                    }`}
                    aria-label={`Quote ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
