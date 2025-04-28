import React from 'react'
import image from '../assets/image1.jpg'


const Filter_in_images = () => {
  return (
    <div>
        {/* blur filter in images */}
        <h1 className='blur-sm'>Blue text</h1>
      <img className='size-50' src={image} alt="" />
      <img className='size-50 blur-sm' src={image} alt="" />
      <img className='size-50 blur-md' src={image} alt="" />
      <img className='size-50 blur-lg' src={image} alt="" />

      {/* brightness filter in images */}
        <h1 className=''>Bright text</h1>
        <img className='size-50 brightness-50' src={image} alt="" />
        <img className='size-50 brightness-150' src={image} alt="" />
        <img className='size-50 brightness-200' src={image} alt="" />
        <img className='size-50 brightness-300' src={image} alt="" />


        <h1 className=''>Contrast</h1>
        <img className='size-50 contrast-0' src={image} alt="" />
        <img className='size-50 contrast-50' src={image} alt="" />
        <img className='size-50 contrast-100' src={image} alt="" />
        <img className='size-50 contrast-200' src={image} alt="" />

        <h1 className=''>gray-scale</h1>
        <img className='size-50 grayscale' src={image} alt="" />

        <h1 className=''>invert colors</h1>
        <img className='size-50 invert' src={image} alt="" />

        <h1 className=''>Hue</h1>
        <img className='size-50 hue-rotate-60--15' src={image} alt="" />
    </div>
  )
}

export default Filter_in_images
