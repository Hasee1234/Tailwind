import React from 'react'

const Width = () => {
  return (
    <div>
      <div className='bg-pink-300 '>code step by step</div>
      <div className='bg-pink-300 max-w-50'>code step by step</div>
      {/* that it should use maximum width of 50px not more than that */}
      <div className='bg-pink-300 min-w-100 w-20'>code step by step</div>
      {/* that it should use minimum width of 100px not less than that  ,here w-20 says use 20 but minw-100 property overpass and says it should use 100 less to less*/}
      <div className='bg-green-400 w-full'>in percentage</div>
      <div className='bg-green-400 w-1/2'>in percentage</div>
      <div className='bg-green-400 w-1/3'>in percentage</div>
      <div className='bg-green-400 w-1/4'>in percentage</div>
      <div className='bg-green-400 w-1/5'>in percentage</div>
      <div className='bg-green-400 w-1/6'>in percentage</div>

      <div className='bg-blue-500 w-xs'>small large etc</div>
      <div className='bg-blue-500 w-xl'>small large etc</div>
      <div className='bg-blue-500 w-2xl'>small large etc</div>
      <div className='bg-blue-500 w-3xl'>small large etc</div>
      <div className='bg-blue-500 w-4xl'>small large etc</div>

      <div className='bg-amber-500 w-[20px] hover:w-2xl'> hello</div>
    </div>
  )
}

export default Width
