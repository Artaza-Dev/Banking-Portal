import React, {useState} from 'react'
import Input from '../../components/Input'
import Button from '../../components/button/Button'
import logo from '../../assets/logo.png'
function Login() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  return (
    <>
      <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-500 w-full min-h-screen flex items-center justify-center">
  <div className="w-[90%] sm:w-[50%] md:w-[35%] h-[480px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col items-center p-6">
    <div className="w-full flex flex-col items-center pt-4">
      <img src={logo} alt="Bank Logo" className="h-16 mb-3 mix-blend-screen opacity-90"/>
      <p className="text-3xl font-semibold text-white tracking-wide">Welcome Back</p>
      <p className="text-sm text-gray-200 mt-1">Sign in to your account</p>
    </div>

    <div className="w-full px-1 mt-8 space-y-4">
      <Input placeholder="Enter your email" className="bg-white/20 text-white placeholder-gray-300" />
      <Input placeholder="Enter your password" className="bg-white/20 text-white placeholder-gray-300" />
    </div>

    <div className="w-full flex flex-col items-center mt-8">
      <Button className="w-[80%] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300" text="Sign In" />
        
      <p className="text-white text-sm mt-3  hover:text-white">Don’t have an account? <span className="text-indigo-300 cursor-pointer">Sign Up</span></p>
    </div>
  </div>
</div>

    </>
  )
}

export default Login