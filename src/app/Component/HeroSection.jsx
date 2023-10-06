'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


      


const HeroSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className=' place-self-center'>
      <h1 className='text-4xl lg:text-6xl font-extrabold mb-4'>Hello,i'm <span className='text transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500'>
        <br />
        <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Theo Lencer',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Wed developer',
          1000,
          'Mobile App developer',
          1000,
          'UI/UX Designer',
          1000
        ]}
        wrapper="span"
        speed={40}
        
        repeat={Infinity}
      />
   
</span></h1>
      <p className='text-gray-300 text-lg lg:text-xl'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat laborum delectus porro perferendis </p>


      <div className='mt-4 space-y-3'>
        <button className='px-6 py-3 bg-white  mr-4 hover:bg-slate-200 rounded-full sm:w-fit w-full bg-gradient-to-br from-blue-500 to-pink-500 text-white '>Hire Me</button>
        <button className='px-6 py-3 border border-white rounded-full sm:w-fit w-full'>Download Cv</button>
      </div>
      </div>

     

      <div className=' place-self-center mt-4 lg:mt-0'>
        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:[400px] lg:[400px] relative'>
        <Image 
        src="/hero-image.png"
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        width = {300}
        height={300}
        
        />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
