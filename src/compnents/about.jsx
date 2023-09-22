import React from 'react'

const About = () => {
  return (
    <div name="about" 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='w-full max-w-screen-lg p-4 mx-auto flex flex-col
            h-full justify-center '>
            <div className='pb-8'>
                    <p className='font-bold inline text-4xl border-b-4 border-b-white'>
                        About
                    </p>
            </div>
                <div>
                    <p>
                        hello this is vimalkanth
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quas porro doloribus minus sunt. Minus vitae placeat cupiditate quo et, adipisci tempora, 
                        alias libero inventore error eaque ipsa ea accusamus sequi.
                    </p>
                </div>
        </div>
    </div>
  )
}

export default About
