import React from 'react'

const Positions = () => {
  return (
    <div>
        {/* absolue  */}
      {/* size is usedforboth hight and width  */}
      {/* <div className="bg-red-200 size-50 absolute bottom-0 right-0">1</div>
      <div className="bg-green-200 size-50 absolute bottom-0 left-0">1</div>
      <div className="bg-blue-200 size-50 absolute top-0 right-0">1</div>
      <div className="bg-yellow-200 size-50 absolute top-0 left-0">1</div> */}

      {/* relative if you wat these boxes in one box then use relative class on parent div */}
      <div className="bg-amber-300 size-96 relative">
      <div className="bg-red-200 size-30 absolute bottom-0 right-0">1</div>{/* size is usedforboth hight and width  */}
      <div className="bg-green-200 size-30 absolute bottom-0 left-0">1</div>
      <div className="bg-blue-200 size-30 absolute top-0 right-0">1</div>
      <div className="bg-yellow-200 size-30 absolute top-0 left-0">1</div>

    </div>

      {/* fixed */}
      <div className='bg-zinc-600 size-96'>
        <h1 className='bg-red-900 fixed z-29'>fixed</h1>
      </div>


        {/* use inset instead of top, bottom, left, right */}
        <div className="bg-green-800 size-96 relative">
            <div className="bg-red-200 size-30 absolute inset-10">inset</div>{/* size is usedforboth hight and width  */}
      </div>

    </div>
  )
}

export default Positions
