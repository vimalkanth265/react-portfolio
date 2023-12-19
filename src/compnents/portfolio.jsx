import React from 'react'
import todolist from '../assets/todolist.jpeg'

const Portfolio = () => {
  return (
    <div name="portfolio"
    className=' w-full h-screen bg-gradient-to-b from-black to-gray-800  text-white 
    '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full'>
        <div className='pb-8'>
            <p className='font-bold text-4xl inline border-b-4 border-gray-400'>portfolio</p>
            <p className='py-6'>check out some of my work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            <div className='shadow-md  shadow-gray-600 rounded-lg '>
                <img src={todolist} alt=""  className='rounded-md '/>
                <div className='flex items-center justify-center'>
                    <button > <a href="https://github.com/vimalkanth265/react-todo" target='_blank' alt="github_link" rel="noreferrer">Todolist</a></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
