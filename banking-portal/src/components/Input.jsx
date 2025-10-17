import React from 'react'

function Input({placeholder}) {
  return (
    <>
        <input type="text" placeholder={placeholder} className='w-full px-3 border border-white py-3.5 rounded-2xl placeholder:text-white outline-none mb-4'/>
    </>
  )
}

export default Input