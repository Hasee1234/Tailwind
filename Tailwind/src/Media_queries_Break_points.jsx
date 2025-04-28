import React from 'react'

const Media_queries_Break_points = () => {
  return (
    <div className='h-screen'>
      {/* lg will work on large screens and above, md will work on medium screens and above, sm will work on small screens and above, and xs will work on extra small screens and above. */}
      {/* lg will work when width is 1024px and above, md will work when width is 768px and above, sm will work when width is 640px and above, and xs will work when width is 480px and above. */}
      <div className='bg-red-500 h-full lg:bg-amber-500
       md:bg-green-500
        sm:bg-zinc-500'>
      {/* here default is red and when the screen is 1024px it will be amber when screen is 768/md it will green same for sm*/}
      <h1 className='text-4xl sm:text-sm md:text-7xl lg:text-9xl'>code step by step</h1>

        </div>

    </div>
  )
}

export default Media_queries_Break_points
