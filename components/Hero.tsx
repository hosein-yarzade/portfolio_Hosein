import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

function Hero() {
  return (
    <div className='pb-20 pt-36'> 
    <div>
       <Spotlight className='-top-40 -left-10  h-screen' fill='white'/>
      <Spotlight className='-top-40 -right-10  h-screen' fill='purple'/> 
      <Spotlight className='h-[80vh] w-[50vw] top-10 left-full' fill='orange'/> 
      <Spotlight className='w-40 h-96 left-44 right-1 ' fill='blue'/>
      <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue'/>
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Created with Next.js
          </p>

          <TextGenerateEffect
            words=" Hi! I&apos;m Hosein Yarzade, a front end Developer. "
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />


          </div>
        </div>
      </div>
  )
}

export default Hero