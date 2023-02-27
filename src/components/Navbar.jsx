import React from 'react'
import lgo from "../images/logo.jpg"
import { IoMdArrowDropdown } from "react-icons/io"

function Navbar() {
  return (
    <div className='nav w-[100%] max-w-[1644px] bg-white mx-auto flex items-center justify-between px-28 py-2'>
        <img src={lgo} alt="" />   
        <div>
            <ul className='flex gap-8 text-xl text-purple-800 '>
                <li><a href="/">Home</a></li>
                <li><a className='flex items-center' href="/">About Us<IoMdArrowDropdown size={30}/></a></li>
                <li><a className='flex items-center' href="/">Resources<IoMdArrowDropdown size={30}/></a></li>
                <li><a className='flex items-center' href="/">Request A Quote<IoMdArrowDropdown size={30}/></a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
        </div>     
    </div>
  )
}

export default Navbar
