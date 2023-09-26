import React from 'react'
import Projectitem from './Projectitem'
import movieapp1Img from '../assets/movieapp1.png'
import movieapp2Img from '../assets/movieapp4.png'
import movieapp3Img from '../assets/movieapp5.png'




const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Crafted Comprehensive Software Solutions - As a full-stack developer, I've successfully managed both front-end and back-end aspects, from designing user-friendly interfaces to implementing server-side logic, databases, and APIs. My work ensures cohesive and efficient 
          software solutions that prioritize user experience and functionality</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <Projectitem img={movieapp1Img} title='Movie app'/>
        <Projectitem img={movieapp2Img} title='Ripness Detection using OpenCV'/>
        <Projectitem img={movieapp3Img} title='Hospital Management system'/>
      </div>
    </div>
  )
}

export default Projects