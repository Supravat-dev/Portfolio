import React from 'react'
import pic from "../../public/abc.png"


import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";

import { ReactTyped,Typed } from "react-typed";

const Home = () => {
  return (
    <>
    <div
    name="Home"
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
                <h1 >Hello I'm a</h1>
                {/* <span className='text-red-700 font-bold'>Developer</span> */}
                <ReactTyped
                className='text-red-700 font-bold'
                strings={["Developer","Programmer","Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}

        />
            </div>
            <br />
            <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam mollitia iure tempore assumenda eveniet! Maiores ducimus beatae, officiis molestiae impedit veniam dolore aliquid? Obcaecati fugit, aliquam repellat dicta minima dolore, eligendi fugiat magnam inventore voluptas ipsum itaque esse doloribus maxime incidunt, a quis optio accusantium aut cumque? Nesciunt, optio nobis.

            </p>
            <br />

            {/* //social media icon */}
            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
            <div className='space-y-2 '>
                <h1 className='font-bold text-center'>Available On</h1>
                
                <ul className='flex space-x-5'>
                    <li> <a href='https://www.linkedin.com/in/supravatpal/' target="_blank"> 
                    <FaLinkedin className='text-2xl cursor-pointer'/></a></li>

                    <li><a href='https://github.com/Supravat-dev' target="_blank">
                    <FaGithubSquare className='text-2xl cursor-pointer'/></a></li>

                    <li><a href='mailto:supravatp01@gmail.com' target="_blank">
                    <MdEmail className='text-2xl cursor-pointer'/></a></li>

                    <li><a href='/My_resume.pdf' download target="_blank" rel="noopener noreferrer">
                    <FaFileAlt className='text-2xl cursor-pointer' title="View Resume" />
                    </a></li>
                </ul>
            </div>
            <div className='space-y-2'>
                <h1 className='font-bold'>Currently Working On</h1>
                
                <div className='flex justify-center space-x-5 '>
                    <FaReact className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    <SiMongodb className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    <FaNodeJs className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    <FaPhp className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                </div>
            </div>
            </div>

            </div>
            <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 '>
            <img src={pic} className='rounded-full md:w-[450px] md:h-[450px] object-cover border-4 border-gray-300' alt="" />
            </div>
        </div>
    </div>
    <br />
    
   
    <hr />
    </>
  )
}

export default Home
