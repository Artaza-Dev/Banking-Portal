import React from 'react'

function Button({text, onclick}) {
  return (
   <>
    <button className='bg-purple-500 px-25 py-3 cursor-pointer rounded-2xl text-white font-bold text-xl' onClick={onclick}>{text}</button>
   </>
  )
}

export default Button