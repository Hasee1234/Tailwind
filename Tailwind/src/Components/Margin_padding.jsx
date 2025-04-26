import React from 'react'

const Margin_padding = () => {
  return (
    <div>
        <h1 className='bg-blue-500 m-[2px] p-[3px]'>use manullay class  of margin and padding</h1>
      {/* you can use any number of class for margin and padding like m-5 or p-5 or m-2 or p-2 etc. p-1=4px, p-2=8px, p-3=12px, p-4=16px, p-5=20px, p-6=24px, p-7=28px, p-8=32px, p-9=36px, p-10=40px */}
      <h1 className='bg-red-900 text-white p-5 m-5'>Heading tag 1</h1>
      <h1 className='bg-red-800 text-white px-20 mx-10'>Heading tag 1</h1>
      <h1 className='bg-red-700 text-white py-20 my-10'>Heading tag 1</h1>
      <h1 className='bg-red-600 text-white pt-20 mt-10'>Heading tag 1</h1>
      <h1 className='bg-red-500 text-white pb-20 mb-10'>Heading tag 1</h1>
      <h1 className='bg-red-500 text-white pl-20 ml-10'>Heading tag 1</h1>
      <h1 className='bg-red-500 text-white pr-20 mr-10'>Heading tag 1</h1>

      <span className='bg-red-500 text-white pr-20 pl-20 mr-10 ml-10'>span with margin and padding</span>
      {/* some features i span tag in padding and margin dont work properly so you should use block property */}
    </div>
  )
}

export default Margin_padding
