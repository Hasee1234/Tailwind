import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className='
        bg-black 
        text-white 
        m-0
        flex
        [&>*]:flex '//this property in class is used to select all child elements
        >
            <li ><a className='p-3 hover:bg-zinc-900' href="">Home</a></li>
            <li ><a className='p-3 hover:bg-zinc-900' href="">News</a></li>
            <li ><a className='p-3 hover:bg-zinc-900' href="">Contact</a></li>
            <li ><a className='p-3 hover:bg-zinc-900' href="">About</a></li>
        </ul>
    </div>
  )
}

export default Navbar
