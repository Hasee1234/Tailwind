import React from 'react'

const  Colors = () => {
  return (
    <div>
        <div>

      <p className='text-blue-50'>text color</p>
      {/* this is a tailwind class for text background color but the property is according to given suggestion like blue-500 */}
      <p className='text-blue-100'>text color</p>
      <p className='text-blue-200'>text color</p>
      <p className='text-blue-300'>text color</p>
      <p className='text-blue-400'>text color</p>
      <p className='text-blue-500 '>text color</p>
      <p className='text-blue-600'>text color</p>
      <p className='text-blue-700'>text color</p>
      <p className='text-blue-800'>text color</p>
      <p className='text-blue-900'>text color</p>
      </div>


    <div>
      <p className='text-blue-50 bg-red-50'>background colors</p>
        
      {/* this is a tailwind class for text background color but the property is according to given suggestion like blue-500 */}
      <p className='text-blue-100 bg-red-100'>background colors</p>
      <p className='text-blue-200 bg-red-200'>background colors</p>
      <p className='text-blue-300 bg-red-300'>background colors</p>
      <p className='text-blue-400 bg-red-400'>background colors</p>
      <p className='text-blue-500 
      bg-red-500'>background colors</p>
      <p className='text-blue-600 bg-red-600'>background colors</p>
      <p className='text-blue-700
      bg-red-700'>background colors</p>
      <p className='text-blue-800
      bg-red-800'>background colors</p>
      <p className='text-blue-900
      bg-red-900'>background colors</p>
      </div>

      <div>
        <p className='border-green-50 border-4'>border color</p>
        <p className='border-green-100 border-4'>border color</p>
        <p className='border-green-200 border-4'>border color</p>
        <p className='border-green-300 border-4'>border color</p>
        <p className='border-green-400 border-4'>border color</p>
        <p className='border-green-500 border-4'>border color</p>
        <p className='border-green-600 border-4'>border color</p>
      </div>
      
      <div>
        {/* <p className='outline-yellow-700 outline outline-8'>outline</p>
        <p className='outline-yellow-500 outline outline-8'>outline</p>
        <p className='outline-yellow-300 outline outline-8'>outline</p> */}
      </div>
    </div>
  )
}

export default Colors
