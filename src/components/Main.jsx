import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa'


const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://img.freepik.com/free-vector/realistic-white-golden-geometric-background_79603-2032.jpg?w=740&t=st=1695710331~exp=1695710931~hmac=eabffae2b9f66f0735ea255e8ba8ebffbc829c7412905adf632b92462d3af9ef" alt="" />
        <div className='w-full h-screen absolute top-0 bg-white/0'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:itens-start items-center'>
                <h1 className='sm:text-5xl font-bold text-gray-800'>Hi,I'm Abhijith BR</h1>
                <h2 className='flex sm:text -3xl text-2xl pt-4 text-gray-800'>
                    I'm
                      <TypeAnimation
                      sequence={[               
                        'a Tech Enthusiast',
                        1000, 
                        'a Coder',
                        1000,
                        'a Developer',
                        1000,
                        'an Electronics and Communication Engineer ',
                        1000
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: '1em', paddingLeft:'5px'}}
                      repeat={Infinity}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                  <FaTwitter className='cursor-pointer' size={20}/>
                  <FaFacebookF className='cursor-pointer' size={20}/>
                  <FaInstagram className='cursor-pointer' size={20}/>
                  <FaLinkedinIn className='cursor-pointer' size={20}/>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Main