import React from 'react'

const Flex = () => {
  return (
    <div className='h-screen'>
      {/* <div className='bg-gray-200 size-full
       flex 
        justify-center 
         items-center'>
            
        <div className="bg-red-400 size-20"></div>
        <div className="bg-green-400 size-20"></div>
        <div className="bg-blue-400 size-20"></div>
        <div className="bg-yellow-400 size-20"></div>
      </div> */}
        {/* justify-center items-center they both make the divs in centre of screen justify centre is used for horizontal alignment and items center is used for vertical alignment according to flex direction */}
        {/* justify-between to make space between the divs and items center to make them in centre of screen  */}

        <div className="size-full bg-pink-100 
        flex
        flex-wrap
        content-start
        flex-col
        sm:flex-row
        ">
            {/* flex-wrap is used to make the divs in next line if there is no space in the current line  */}

            {/* content-start is used to make the divs in start of the line and remove the space between the divs */}

            {/* if you wnat that  in mobile screen it should in column  first do it flex-col and then query for larger screen and make it md:flex-row */}
                <div className="bg-green-400 size-32"></div>
                <div className="bg-blue-400 size-32"></div>
                <div className="bg-yellow-400 size-32"></div>
                <div className="bg-green-400 size-32"></div>
                <div className="bg-blue-400 size-32"></div>
                <div className="bg-purple-400 size-32"></div>
                <div className="bg-green-400 size-32"></div>
                <div className="bg-blue-400 size-32"></div>
                <div className="bg-pink-400 size-32"></div>
                <div className="bg-orange-400 size-32"></div>
                <div className="bg-yellow-400 size-32"></div>
                <div className="bg-blue-400 size-32"></div>
                <div className="bg-violet-400 size-32"></div>
        </div>
    </div>
  )
}

export default Flex
