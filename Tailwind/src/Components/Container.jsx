import React from 'react'

const Container = () => {
  return (
    <div>
        <div className='bg-amber-500'>
            <ul className='flex justify-end [&>*]:p-4'>
                <li ><a href="">Home</a></li>
                <li ><a href="">About</a></li>
                <li ><a href="">Contact</a></li>
                <li ><a href="">Login</a></li>
            </ul>
        </div>
        {/* it is aminly used to give responsiveness like auto margin  */}
      <div className='text-3xl bg-amber-700 container mx-auto'>Container class</div>
    </div>
  )
}

export default Container
