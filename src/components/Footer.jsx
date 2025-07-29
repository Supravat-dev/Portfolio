import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center'>
              <div className='flex space-x-4'>
                <FaLinkedin size={24}/>
                <FaGithubSquare size={24}/>
                <MdEmail size={24}/>
                <FaFileAlt size={24}/>
              </div>
              <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                <p className='text-sm'>
                    &copy;2025 supravat protfolio.All rights are reserved
                </p>
                <p className='text-sm'>created by supravat 💖 </p>
              </div>
            </div>
         </div>
    </footer>
    </>
  )
}

export default Footer
