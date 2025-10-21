import React, {useState} from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom'
import usersStore from '../../store/usersStore'
function Login() {
  const navigate = useNavigate()
  const { users } = usersStore()
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  function loginHandler(e){
    e.preventDefault()
    let data = {
      email,
      password
    }
    const isValidation = users.find((u) => u.email === data.email && u.password === data.password);
    if (isValidation) {
        localStorage.setItem("isAuthenticated", "true");
        navigate('/dashboard')
    }else{
      console.log('Email or password is incorrect')
    }
    setEmail("")
    setPassword("")

  }

  return (
    <>
      <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-500 w-full min-h-screen flex items-center justify-center">
  <div className="w-[90%] sm:w-[50%] md:w-[35%] h-[480px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col items-center p-6">
    <div className="w-full flex flex-col items-center pt-4">
      <FontAwesomeIcon icon={faBuildingColumns} className='text-6xl text-white mb-3 shadow-2xl'/>
      <p className="text-3xl font-semibold text-white tracking-wide">Welcome Back</p>
      <p className="text-sm text-gray-200 mt-1">Sign in to your account</p>
    </div>

    <div className="w-full px-1 mt-8 space-y-4">
      <Input type="text" placeholder="Enter your email" className="bg-white/20 text-white placeholder-gray-300" onchange={(e)=> setEmail(e.target.value)} />
      <Input type="password" placeholder="Enter your password" className="bg-white/20 text-white placeholder-gray-300" onchange={(e)=> setPassword(e.target.value)} />
    </div>

    <div className="w-full flex flex-col items-center mt-5">
      <Button className="w-[80%] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300" text="Sign In" onclick={loginHandler} />
        
      <p className="text-white text-sm mt-3  hover:text-white">Don't have an account? <NavLink to="/signup" className="text-indigo-300 cursor-pointer">Sign Up</NavLink></p>
    </div>
  </div>
</div>

    </>
  )
}

export default Login