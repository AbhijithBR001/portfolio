import React from 'react'
import Workitem from './Workitem'

const data=[
   {year:"2022",
    title:"Python Full Stack Development Trainee",
    duration:"Nov 2022-Feb 2023",
    details:"Building web applications using Django, Flask, and Angular.Actively participated in front-end and back-end development of web applications. Created a Management system which is basically a web application as a part of the intership project."
} 
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-10'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item,idx) =>
            <Workitem key={idx} 
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}
            />
        )}
    
    </div>
  
        )};

export default Work
