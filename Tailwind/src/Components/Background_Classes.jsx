import React from 'react'
import image from '../assets/image1.jpg'

const Background_Classes = () => {
  return (
    <div>
        {/* to implemet image in backround like a background color  */}
        <div className='bg-blue-200 size-96 bg-no-repeat bg-center cover'style={{ backgroundImage: `url(${image})` }}
        >Hello Tailwind</div>
        {/* use gradietnt color in background */}
        <div className='gradient size-96 bg-gradient-to-b to-amber-400 from-red-950 '></div>

        <div className='gradient size-96 bg-gradient-to-l to-green-400 from-red-950 '></div>

    {/* for daigonal gradient color */}
        <div className='gradient size-96 bg-gradient-to-tr to-green-400 from-red-950 '></div>

        {/* shadow  */}
        <div className='size-96 m-3 shadow-orange-500 shadow-2xl '></div>
        <div className='size-96 m-3 shadow-orange-500 shadow-inner '></div>

        {/* shadow  */}
    </div>
  )
}

export default Background_Classes
