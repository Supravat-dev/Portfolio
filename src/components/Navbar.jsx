import React, { useState } from 'react'
import pic from "../../public/photo.avif"
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { Link } from 'react-scroll';


const Navbar = () => {
    const [menu, setMenu]=useState(false);
    const navItems=[
    {
        id:1,
        text:"Home"
    },
    {
        id:2,
        text:"About Me"
    },
    {
        id:3,
        text:"My Projects"
    },
    
    {
        id:5,
        text:"Contacts"
    },
    {
        id:5,
        text:"My Resume"
    }
]
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>
                    Suprava<span className='text-green-500 text-2xl'>t</span>
                <p className='text-sm'>Web Developer</p>
                </h1>
            </div>

            {/* laptop user */}

            <div>
                <ul className='hidden md:flex space-x-8'>
                    {
                    navItems.map(({id,text})=>(
                        <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                            <Link to={text}
                            smooth={true}
                            duration={500}
                            offset={-120}
                            activeClass='active'
                            
                            >{text}</Link>
                        </li>
                    ))
                }
                </ul>
                <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                    {menu?<IoClose size={24}/>:<IoMenuSharp size={24}/>
}
                </div>
            </div>
        </div>


        {/* mobile user */}
        {menu && (
        <div className='bg-white'>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                {
                    navItems.map(({id,text})=>(
                        <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>

                           <Link
                           onClick={()=>setMenu(!menu)}
                           to={text}
                            smooth={true}
                            duration={500}
                            activeClass='active'
                            
                            >{text}</Link> 
                            </li>
                    ))
                }
            </ul>
        </div>
        )}
    </div>
    </>
  )
}

export default Navbar
