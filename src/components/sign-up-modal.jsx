import { useState } from "react"
import { Eye, EyeOff, Calendar, Mail, X } from "lucide-react"

export default function SignUpModal({ isOpen, onClose, onSwitchToSignIn }) {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("student") // "student" or "teacher"
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userType,
        }),
      })

      const result = await response.json()

      if (result.success) {
        alert(`Sign up successful! Data saved to ${result.filePath}`)
        // Reset form
        setFormData({
          name: "",
          dob: "",
          email: "",
          password: "",
        })
        setUserType("student")
        onClose()
      } else {
        alert(`Error: ${result.error || "Failed to sign up"}`)
      }
    } catch (error) {
      console.error("Sign up error:", error)
      alert("An error occurred during sign up. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = () => {
    console.log("Sign up with Google")
    // Add your Google sign-up logic here
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
          {/* Left Side - Sign Up Form */}
          <div className="flex flex-1 flex-col justify-center px-8 sm:px-12 py-12">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-500" />
            </button>

            <div className="max-w-md mx-auto w-full">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Sign up</h1>
                <p className="text-gray-500 text-base">Sign up to enjoy the features of PRABHIM</p>
              </div>

              {/* User Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Sign up as</label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setUserType("student")}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                      userType === "student"
                        ? "border-orange-500 bg-orange-50 text-orange-600"
                        : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("teacher")}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                      userType === "teacher"
                        ? "border-orange-500 bg-orange-50 text-orange-600"
                        : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    Teacher
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSignUp} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Date of Birth Field */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Date of Birth</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                      placeholder="Date of birth"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-orange-500 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-orange-400 pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                      placeholder="Password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Sign Up Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors mt-6"
                >
                  {isLoading ? "Signing up..." : "Sign up"}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-gray-400 text-sm">or</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* Google Sign Up */}
              <button 
                onClick={handleGoogleSignUp}
                className="w-full border border-gray-300 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>

              {/* Sign In Link */}
              <p className="text-center text-gray-600 text-sm mt-6">
                Already have an account?{" "}
                <button 
                  onClick={onSwitchToSignIn}
                  className="text-orange-500 font-medium hover:underline"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>

          {/* Right Side - Welcome Panel */}
          <div className="hidden lg:flex w-1/2 bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-500 flex-col items-center justify-center px-8 py-12">
            <div className="text-center max-w-md">
              {/* Logo */}
              <div className="mb-12">
                <div className="flex justify-center mb-4">
                  <img
                    src="/assets/images/logo1.png"
                    alt="Prabhim Technologies Logo"
                    width={120}
                    height={120}
                    className="w-28 h-28 object-contain drop-shadow-lg"
                  />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 tracking-wider">PRABHIM</h2>
                <p className="text-orange-600 text-sm tracking-widest mt-1">TECHNOLOGIES</p>
              </div>

              {/* Welcome Text */}
              <h3 className="text-4xl font-bold text-white mb-4 leading-tight">Welcome to PRABHIM</h3>
              <p className="text-white text-lg mb-12">Enter your credentials to get started.</p>

              {/* Quote */}
              <blockquote className="mb-8">
                <p className="text-white text-xl font-bold leading-relaxed">
                  "Great design is where imagination meets precision."
                </p>
              </blockquote>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
