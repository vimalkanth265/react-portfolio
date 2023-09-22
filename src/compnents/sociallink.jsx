import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Sociallink = () => {

    const links =[
        {
            id:1,
            child:(
                <>
                Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href:"https://www.linkedin.com",
        },
        {
            id:2,
            child:(
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href:"mailto:vimalkanth265@gmail.com",
        },
        {
            id:3,
            child:(
                <>
                Resume<BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:"/VIMALKANTH VS.pdf",
            download:true,
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

        {links.map(({id,child,href,download})=>(
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 hover:rounded
            ml-[-100px] hover:ml-[-10px]' >
                <a className='flex justify-between items-center w-full text-white' 
                    href={href}
                    download={download}
                    target='_blank'
                    rel='noreferrer'>
                    {child}
                </a>
            </li>
        ))}
        
      </ul>
    </div>
  )
}

export default Sociallink
