import React, { useState } from 'react'
import lgo from "../images/logo.jpg"
import { IoMdArrowDropdown } from "react-icons/io"

function Navbar() {
  const [prevNav, setPrevNav] = useState(false)

  const handleSetPrev =()=>{
    setPrevNav(true)
  }

  return (
    <>
    <div className='nav w-[100%] max-w-[1644px] bg-white mx-auto flex items-center justify-between px-24'>
        <img src={lgo} alt="" />   
        <div>
            <ul className='flex gap-8 text-xl text-purple-800 relative '>
                <li  className='py-8'><a href="/">Home</a></li>
                <li className='py-8' onMouseEnter={handleSetPrev} onMouseLeave={()=>setPrevNav(false)}><a className='flex items-center' href="/">About Us<IoMdArrowDropdown size={30}/></a></li>
                <li className='py-8'><a className='flex items-center' href="/">Resources<IoMdArrowDropdown size={30}/></a></li>
                <li className='py-8'><a className='flex items-center' href="/">Request A Quote<IoMdArrowDropdown size={30}/></a></li>
                <li className='py-8'><a href="/">Contact Us</a></li>
            </ul>
        </div>    
        
    </div>

    {prevNav &&
    <div onMouseEnter={()=>setPrevNav(true)} onMouseLeave={()=>setPrevNav(false)} className='w-[100%] h-60 absolute top-22 z-10 bg-purple-800'>
        <ul className='grid grid-cols-3 gap-4 text-center p-5 w-[100%]'>
          <li className='p-2 hover:bg-purple-500 border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Our Mission Statement</a></li>
          <li className='p-2 hover:bg-purple-500 border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Our Associates</a></li>
          <li className='p-2 hover:bg-purple-500 border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Our Location</a></li>
          <li className='p-2 hover:bg-purple-500 border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Our Firm</a></li>
          <li className='p-2 hover:bg-purple-500 border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Our Services</a></li>
          <li className='p-2 hover:bg-purple-500 border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Our Qualifications</a></li>
          <li className='p-2 hover:bg-purple-500 border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Other Locations</a></li>
          <li className='p-2 hover:bg-purple-500 border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Featured Links</a></li>
          <li className='p-2 hover:bg-purple-500 border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Tell A Friend</a></li>
        </ul>
    </div> 
    }
    </>
  )
}

export default Navbar
