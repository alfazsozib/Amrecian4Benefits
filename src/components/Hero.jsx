import React from 'react'
import slide1 from "../images/multi-gen-family.webp"
import slide2 from "../images/multicultural-friends.webp"
import slide3 from "../images/union-folks.webp"
import slide4 from "../images/washington-skyline.webp"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Hero() {
  return (
    <div>
        
        <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showArrows={false}
            showIndicators={false}
        >
            <div>
                    <img src={slide1} />
                </div>
                <div>
                    <img src={slide2} />
                </div>
                <div>
                    <img src={slide3} />
                </div>
                <div>
                    <img src={slide4} />
                </div>
        </Carousel>
        <div className='content--section grid grid-cols-3 h-72 bg-blue-700 px-32 items-center'>
            <div className='box w-96 m-10'>
                <div className='mb-4 gap-2'>
                <h1 className='text-white text-2xl'>Contact Us</h1>
                <p className='text-white text-lg mt-4'>Please feel free to contact us with any questions.</p>
                </div>
                <button className='bg-red-700 border-2 border-red-900 hover:bg-red-900 hover:border-2 hover:border-white px-8 py-[10px] rounded-lg text-white text-lg'>Contact Us</button>                
            </div>
            <div className='box w-80 m-10'>
                <div className='mb-4 gap-2'>
                <h1 className='text-white text-2xl'>Flipbooks</h1>
                <p className='text-white text-lg mt-4'>You can review interesting Flipbooks on my site.</p>
                </div>
                <button className='bg-red-700 border-2 border-red-900 hover:bg-red-900 hover:border-2 hover:border-white px-8 py-[10px]  rounded-lg text-white text-lg'>View Flipbooks</button>                
            </div>
            <div className='box w-80 m-10'>
                <div className='mb-4 gap-2'>
                <h1 className='text-white text-2xl'>Videos</h1>
                <p className='text-white text-lg mt-4'>We have interesting videos for you to watch on my site.</p>
                </div>
                <button className='bg-red-700 border-2 border-red-900 hover:bg-red-900 hover:border-2 hover:border-white px-8 py-[10px]  rounded-lg text-white text-lg'>View Videos</button>                
            </div>
        </div>
    </div>
  )
}

export default Hero
