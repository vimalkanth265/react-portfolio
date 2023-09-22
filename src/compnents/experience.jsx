import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.jpeg'
import javascript from '../assets/javascript.png'
import reactjs from '../assets/reactjs.png'

const Experience = () => {

    const techs=[
        {
            id:1,
            src: html,
            title:'html',
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title:'css',
            style:"shadow-blue-500"
        },
        {
            id:3,
            src: javascript,
            title:'javascript',
            style:"shadow-yellow-500"
        },
        {
            id:1,
            src: reactjs,
            title:'reacjs',
            style:"shadow-blue-500"
        },
    ]
  return (
    <div name="experience"
    className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black  
    '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
      w-full h-full text-white'>
        <div >
            <p className='font-bold text-4xl inline border-b-4 border-gray-500 p-2'>Experience</p>
            <p className='py-6'>These are the technologies I'm worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8
        text-center py-8 px-12 sm:px-0'>
        {techs.map(({id,style,src,title})=>(
            <div key={id} className={`shadow-md py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='flex items-center justify-center mt-4'>{title}</p>
            </div>

        ))}
        
            
                
            
        </div>
      </div> 
    </div>
  )
}

export default Experience
