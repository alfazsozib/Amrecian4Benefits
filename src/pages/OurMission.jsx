import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import shakeHand from "../images/shaking_hands.jpg"
function OurMission() {
  return (
    <div id='ourmission' className='mission-sec'>
        
        <div className='mission--content relative'>
            <div className='bg-purple-800 h-20 flex justify-end pr-24'>
                <button>Connect</button>
            </div>
        </div>
          
        <div className='px-44 py-10'>
            <h1 className='leading-10 text-3xl'>Our Mission Statement</h1>
            <div className='flex gap-4 pt-12'>
                <img className='border-black border-2' src={shakeHand} alt="" />
                <p className='text-gray-500 '>We are committed to maintaining the highest standards of integrity and professionalism in our relationship with you, our client. We endeavor to know and understand your financial situation and provide you with only the highest quality information, services, and products to help you reach your goals.</p>
            </div>
        </div>
    </div>
  )
}

export default OurMission
