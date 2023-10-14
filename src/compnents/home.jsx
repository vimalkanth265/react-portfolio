import React from 'react'
import sampleimage from '../assets/dp-pic.jpg'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen  bg-gradient-to-b to-gray-800 from-black
    text-white '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center 
      justify-center md:flex-row h-full px-4'>
        <div className='flex flex-col h-full justify-center'>
            <h2 className='text-4xl sm:text-7xl text-white font-bold'>I'm a Aspiring full stack developer</h2>
            <p className='py-4 max-w-md'> I have 2 years of experience in installing OS 
                and troubleshooting. Have experience in configuring VCS
                cluster </p>
        </div>
        <div>
          <img src={sampleimage} alt="my profile" className='rounded-md mx-auto w-2/3 md:w-96'/>
        </div>
        
      </div>
    </div>
  )
}

export default Home
