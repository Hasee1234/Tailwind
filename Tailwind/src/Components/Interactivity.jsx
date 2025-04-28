import React from 'react'

const Interactivity = () => {
  return (
    <div>
      <button className='bg-blue-500 text-white  m-3 px-3 rounded-md'>Login</button>
      <button className='bg-blue-500 text-white  m-3 px-3 rounded-md hover:bg-blue-900'>Login</button>
      {/* focus: once you click it, it will stay like that until you click another button */}
      <button className='bg-blue-500 text-white  m-3 px-3 rounded-md focus:bg-yellow-900'>Login</button>
      {/*active: once you press it works like hover and immediately normal */}
      <button className='bg-blue-500 text-white  m-3 px-3 rounded-md active:bg-red-900'>Login</button>

      <button className='bg-blue-500 text-white  m-3 px-3 rounded-md active:bg-red-900 focus:bg-yellow-900 hover:bg-blue-900'>Login</button>

      {/* group hover: when you hover over the parent div, all the children will be affected */}

      <a href="" className='group'>
        <h1 className='group-hover:bg-amber-600 text-white'>heading</h1>
        <p className='group-hover:bg-amber-600 text-white'>para</p>
      </a>
    </div>
  )
}

export default Interactivity
