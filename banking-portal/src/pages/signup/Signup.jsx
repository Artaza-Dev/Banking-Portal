import React,{useState} from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import userStore from '../../store/usersStore'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Signup() {
  const navigate = useNavigate()
  const { registerUser, users } = userStore()
  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[phone, setPhone] = useState("")
  const[password, setPassword] = useState("")

  async function signupHandler(e){
    e.preventDefault()
    let data = {
      username,
      email,
      phone,
      password,
      balance : 0
    }
    let register = users.find((user)=> data.email === user.email)
    if (register) {
      navigate('/')
      console.log('You have already registered. Please Login!');
      
    }else{
      await registerUser(data)
      console.log('You are register successfully. Please Login!');
      
      navigate('/')
    }
    setUsername("")
    setEmail("")
    setPhone("")
    setPassword("")
    

  }
  
console.log('all users register',users);

  return (
    <>      <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-500 w-full min-h-screen flex items-center justify-center">
  <div className="w-[90%] sm:w-[50%] md:w-[35%] h-[550px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col items-center p-6">
    <div className="w-full flex flex-col items-center pt-4">
      <FontAwesomeIcon icon={faBuildingColumns} className='text-6xl text-white mb-2 shadow-2xl'/>
      <p className="text-3xl font-semibold text-white tracking-wide">Welcome Back</p>
      <p className="text-sm text-gray-200 mt-1">Sign in to your account</p>
    </div>

    <div className="w-full px-0  mt-3 space-y-2">
      <Input type="text" value={username} placeholder="Enter your username" className="bg-white/20 text-white placeholder-gray-300" onchange={(e)=> setUsername(e.target.value)} />
      <Input type="text" value={email} placeholder="Enter your email" className="bg-white/20 text-white placeholder-gray-300" onchange={(e)=> setEmail(e.target.value)} />
      <Input type="text" value={phone} placeholder="Enter your phone no" className="bg-white/20 text-white placeholder-gray-300" onchange={(e)=> setPhone(e.target.value)} />
      <Input type="password" value={password} placeholder="Enter your password" className="bg-white/20 text-white placeholder-gray-300" onchange={(e)=> setPassword(e.target.value)} />
    </div>

    <div className="w-full flex flex-col items-center ">
      <Button className="w-[80%] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300" text="Sign Up" onclick={signupHandler} />
      <p className="text-white text-sm mt-2 ">Do you have an account? <NavLink to="/" className="text-indigo-300 cursor-pointer hover:text-zinc-800">Sign In</NavLink></p>
    </div>
  </div>
</div>

    </>
  )
}

export default Signup