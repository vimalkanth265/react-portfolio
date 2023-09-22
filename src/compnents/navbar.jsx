import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"; 
import {Link} from 'react-scroll'

const Navbar = () => {

    const [nav,setnav]= useState(false);
    const links =[
        {
            id:1,
            link : 'home'
        },
        {
            id:2,
            link : 'about'
        },
        {
            id:3,
            link : 'portfolio'
        },
        {
            id:4,
            link : 'experience'
        },
        {
            id:5,
            link : 'contact'
        },
    ]

  return (

    <div className='flex justify-between items-center w-full h-20 
       text-white bg-black fixed px-4'>
          <div>
              <h1 className='text-4xl font-signature'>VimalKanth</h1>
          </div>
        <ul className='hidden md:flex'>
            {links.map(({id,link}) =>(
                <li key={id}
                className='px-4 cursor-pointer capitalize font-medium hover:scale-105 '> 
                <Link to={link} smooth duration={400}>{link}</Link>
                </li>
            ))}
          
        </ul>

        <div onClick={()=> setnav(!nav)} className='pr-4 z-10 cursor-pointer md:hidden'>

            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full 
            h-screen  text-white bg-black'>
               {links.map(({id,link}) =>(
                    <li key={id}
                    className='cursor-pointer px-4 py-6 capitalize text-4xl'> 
                    <Link onClick={()=> setnav(!nav)} to={link} smooth duration={400}>{link}</Link>
                    </li>
                ))}
            </ul>
        )}
        

    </div>
  )
}

export default Navbar;
