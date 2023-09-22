import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to
     bg-gray-800  text-white'>
      <div className='max-w-screen-lg p-4 mx-auto h-full w-full flex flex-col justify-center'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact</p>
            <p className='py-6'>Get in touch</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <form action="https://getform.io/f/2d6fa59d-dfc0-4766-ace1-f3f4b280deb9"
            method='POST' className='w-full flex flex-col md:w-1/2'>
                <input type="text" name='text' placeholder='text' className='p-2 rounded-md
                bg-transparent border-2 text-white' />
                <input type="email" name="email" placeholder='email' className='p-2 rounded-md
                bg-transparent border-2 text-white my-4' />
                <textarea name="message" placeholder="Enter the message" id="" cols="30" rows="10"className='p-2 rounded-md
                bg-transparent border-2 text-white'></textarea>
                <button className='bg-gradient-to-b from-cyan-500 to-blue-500
                px-6 py-3 my-8 mx-auto flex rounded-md items-center'>Let's talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
