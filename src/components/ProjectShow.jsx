import React from 'react';
import proj1 from "../../public/project1.png"; // Replace with your actual image path
import proj2 from "../../public/css.jpg"; // Example for a second project

const ProjectShow = () => {
  return (
    <div name="My Projects"
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-4xl font-bold  mb-12 text-center text-gray-800'>🚀 My Projects</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Project 1 */}
        <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105'>
          <a href='https://your-live-link1.com' target='_blank' rel='noopener noreferrer'>
            <img src={proj1} alt='Project 1' className='w-full h-60 object-cover' />
          </a>
          <div className='p-4'>
            <h3 className='text-lg font-semibold text-gray-800 text-center'>Analog Clock</h3>
            <p className='text-sm text-gray-600 mt-2 text-center'>An Analog Clock built using html,css and javascript which shows the actual time.</p>
            <div className='mt-4 text-center'>
              <a href='https://myanalogclock123.netlify.app/' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>Live Demo</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        {/* <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105'>
          <a href='https://your-live-link2.com' target='_blank' rel='noopener noreferrer'>
            <img src={proj2} alt='Project 2' className='w-full h-48 object-cover' />
          </a>
          <div className='p-4'>
            <h3 className='text-lg font-semibold text-gray-800 text-center'>Portfolio Website</h3>
            <p className='text-sm text-gray-600 mt-2 text-center'>A personal portfolio to showcase my skills, projects, and achievements. Built with React and Tailwind.</p>
            <div className='mt-4 text-center'>
              <a href='https://your-live-link2.com' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>Live Demo</a>
            </div>
          </div>
        </div> */}

{/* 
         <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105'>
          <a href='https://your-live-link2.com' target='_blank' rel='noopener noreferrer'>
            <img src={proj2} alt='Project 2' className='w-full h-48 object-cover' />
          </a>
          <div className='p-4'>
            <h3 className='text-lg font-semibold text-gray-800 text-center'>Portfolio Website</h3>
            <p className='text-sm text-gray-600 mt-2 text-center'>A personal portfolio to showcase my skills, projects, and achievements. Built with React and Tailwind.</p>
            <div className='mt-4 text-center space-x-4'>
              <a href='https://your-live-link2.com' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>Live Demo</a>
              <a href='https://github.com/yourusername/project2' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:underline'>GitHub</a>
            </div>
          </div>
        </div> */}

        {/* Project 3 */}
         {/* <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105'>
          <a href='https://your-live-link1.com' target='_blank' rel='noopener noreferrer'>
            <img src={proj1} alt='Project 1' className='w-full h-48 object-cover' />
          </a>
          <div className='p-4'>
            <h3 className='text-lg font-semibold text-gray-800 text-center'>E-Commerce Website</h3>
            <p className='text-sm text-gray-600 mt-2 text-center'>An Amazon clone built using React, Tailwind CSS, and Firebase with payment integration.</p>
            <div className='mt-4 text-center space-x-4'>
              <a href='https://your-live-link1.com' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>Live Demo</a>
              <a href='https://github.com/yourusername/project1' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:underline'>GitHub</a>
            </div>
            


            <div className='mt-4 grid grid-cols-2 gap-2'>
              <img src={proj1} alt='Project 1 Screenshot 2' className='rounded-md object-cover h-32 w-full' />
              <img src={proj2} alt='Project 1 Screenshot 3' className='rounded-md object-cover h-32 w-full' />
              <img src={proj2} alt='Project 1 Screenshot 3' className='rounded-md object-cover h-32 w-full' />
            </div>
          </div>
        </div> */}

        {/* Add more projects below by duplicating a card */}

      </div>
    </div>
  );
};

export default ProjectShow;

