import React from 'react'
import image from '../assets/image1.jpg'

const Columns = () => {
  return (
    
    // <div className='columns-2'>
        <div>
            {/* wheb the coilmn are 4 it will first by pairs like 1st 2 in one column and 3rd and 4th in another column */}
    <div className='columns-3'>
      <h1 className='bg-red-300'>Heading 1</h1>
      <h1 className='bg-red-600'>Heading 2</h1>
      <h1 className='bg-red-900'>Heading 3</h1>
    </div>
    {/* <div className='columns-3 lg:columns-4 md:columns-3 sm:columns-2'>
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
    </div> */}

    <div className='columns-md gap-10 '>
        {/* gap=0 to remove gap between images  */}
        {/* md sm gives size of images according to size of screen in documentation */}
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
    </div>
        </div>
  )
}

export default Columns
