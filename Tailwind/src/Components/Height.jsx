import React from 'react'

const Height = () => {
  return (
    <div className='h-screen'>{/* to use height of screen use h-screen class like full 1/2 1/3 1/4 etc */}
      <div className='bg-amber-200'>code step by step</div>
      <div className='bg-amber-300 h-30'>code step by step</div>
      <div className='bg-amber-400 h-40'>code step by step</div>

      <div className='bg-zinc-400 h-full'>code step by step</div>{/* used for full %age of screen height */}
      <div className='bg-zinc-300 h-1/2'>code step by step</div>
      <div className='bg-zinc-200 h-1/3'>code step by step</div>
      <div className='bg-zinc-100 h-1/4'>code step by step</div>
      {/* <div className='bg-zinc-900 h-dvw'>code step by step</div>{/* this is used for dynamic viewport height like how much you scroll like 100vh, 50vh, 25vh etc. it is used for responsive design. */}

      <div className='bg-pink-400 max-h-50 h-10'>max-hight means the maximum height it can use not more than that</div>
      <div className='bg-pink-400 min-h-50 h-10'>min-hight means the minimum height it should use not less than that</div>

    </div>
  )
}

export default Height
