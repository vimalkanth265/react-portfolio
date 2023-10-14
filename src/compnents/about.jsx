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
                        I am currently working as project engineer at wipro technologies, I 
                        have completed by B.E computer science in Park college of Engineering 
                        and Technology. I have an experience in configuring RAID, VCS clusters
                        and install RHEL linux OS in servers.
                    </p>
                </div>
        </div>
    </div>
  )
}

export default About
