import React from 'react'

function Input({placeholder, type, onchange, value}) {
  return (
    <>
        <input type={type} value={value} placeholder={placeholder} onChange={onchange} className='w-full px-3 border border-white py-3.5 text-white rounded-2xl placeholder:text-white outline-none mb-4'/>
    </>
  )
}

export default Input