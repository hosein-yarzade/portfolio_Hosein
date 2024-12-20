import React from 'react'
import { Spotlight } from './ui/Spotlight'

function Hero() {
  return (
    <div className='pb-20 pt-36'> 
    <div>
      <Spotlight className='-top-40 -left-10 md:-left-10 md:-top-5 h-screen' fill='white'/>
      <Spotlight className='-top-40 -left-10  h-screen' fill='purple'/>
      <Spotlight className='-top-10 -left-50  md:-top-30 h-[80vh] w-[50vw]' fill='yellow'/>
      <Spotlight className='-top-40 -left-10 h-[80vh] w-[20vw]' fill='blue'/>
      <Spotlight className='-top-10 -right-10 h-[80vh] w-[20vw]' fill='blue'/>
      </div>
      </div>
  )
}

export default Hero