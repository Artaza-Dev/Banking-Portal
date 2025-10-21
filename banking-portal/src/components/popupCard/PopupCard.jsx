import React from 'react'
import Input from '../input/Input'

function PopupCard({onclick, text}) {
  return (
    <>
        <div className="absolute inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
                    <div className="w-[80%] sm:w-[400px] bg-white rounded-2xl p-6 shadow-xl text-center">
                      <h2 className="text-xl font-semibold text-gray-800">
                        Add Money
                      </h2>
                      <div className='flex flex-col'>
                        <input type="text" className='border rounded-2xl py-3 px-5' placeholder=''  />
                      <button
                        onClick={onclick}
                        className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
                      >
                        {text}
                      </button>
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default PopupCard