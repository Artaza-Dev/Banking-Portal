import React from 'react'

function Button({text}) {
  return (
   <>
    <button className='bg-purple-500 px-25 py-3 rounded-2xl text-white font-bold text-xl'>{text}</button>
   </>
  )
}

export default Button