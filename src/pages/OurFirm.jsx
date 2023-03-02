import React from 'react'
import firm from "../images/road_small.jpg"

function OurFirm() {
  return (
    <div id='ourfirm' className='firm-sec'>
        
        <div className='firm--content relative'>
            <div className='bg-purple-800 h-20 flex justify-end pr-24'>
                <button className='text-white'>Connect</button>
            </div>
        </div>
          
        <div className='px-44 py-10'>
            <h1 className='leading-10 text-3xl'>Our Firm</h1>
            <div className='flex gap-4 pt-12'>
                <img className='' src={firm} alt="" />
                <p className='text-gray-500 text-[17px]'>We are a full-service consulting firm committed to helping working people pursue and achieve their financial goals!  Our Benefits Specialists work to assist employees with defining, understanding and maximizing the basic benefits package offered through their employer.  We help employees thoughtfully explore supplemental benefit options in order to strategically fill in the gaps of the basic benefits package. Our goal is to provide every employee with customized </p>
                
            </div>
            <p className='text-gray-500'>
            and comprehensive benefit solutions.  Every tailored recommendation is intended to enhance our worker and their family for generations to come.
            </p>
        </div>
    </div>
  )
}

export default OurFirm
