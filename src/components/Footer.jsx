import React from 'react'

function Footer() {
  const returnWindow=()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='footer max-w-[1644px] mx-auto relative'>

        <div className='bg-blue-800 w-[100%] h-80'>
            <div>
                <h1 className='text-white absolute bottom-28  left-4'><a href="/"> Site Map</a></h1>
            </div>    
            <button onClick={()=>returnWindow()} className='text-black absolute bottom-2 right-2 px-2  bg-white'>BACK TO TOP</button>         
        </div>        
    </div>
  )
}

export default Footer
