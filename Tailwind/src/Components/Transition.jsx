import React from 'react'
import image from '../assets/image1.jpg'

const Transition = () => {
  return (
    <div>
      <button  className='bg-red-400 p-2 m-10 text-white rounded hover:bg-red-900' >Login  
      </button>

      <button  className='bg-red-400 p-2 m-10 text-white rounded hover:bg-red-900
      transition duration-500
      ' >Login  
      </button>

      <button  className='bg-red-400 p-2 m-10 text-white rounded hover:opacity-50
      transition duration-1000
      ' >Login  
      </button>
      <button  className='bg-red-400 p-2 m-10 text-white rounded 
      transition-transform duration-1000
      hover:rotate-45
      ' >Login  
      </button>
      <button  className='bg-red-400 p-2 m-10 text-white rounded 
      transition-transform duration-1000
      hover:scale-150
      ' >Login  
      </button>
      <button  className='bg-red-400 p-2 m-10 text-white rounded 
      transition-transform duration-1000
      hover:scale-x-150 hover:scale-y-50
      ' >Login  
      </button>
        
        <img className='w-50 h-50 hover:rotate-45 transition-transform hover:scale-125 duration-1000' src={image} alt="" />
    </div>
  )
}

export default Transition
