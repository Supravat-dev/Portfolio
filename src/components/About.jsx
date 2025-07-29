import React from 'react';
import pic from "../../public/certi1.png"
import pic1 from "../../public/IBM.jpg"
import pic2 from "../../public/NIIT.jpg"
import Tools from './tools';



const About = () => {
  return (
  
    <div 
     name="About Me"
     className='scroll-mt-50 max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      {/* Main Heading */}
      <h1  className='text-4xl font-bold mb-6 text-center text-gray-800'>About Me</h1>

      {/* Bio Section */}
      <p className='text-gray-700 text-lg leading-relaxed text-justify'>
        Hello! I'm a passionate full-stack developer with a strong foundation in React, Node.js, and MongoDB. I love building dynamic web applications, learning new technologies, and solving real-world problems through clean, efficient code. With a background in computer science and experience in both front-end and back-end development, I aim to create impactful digital experiences.
      </p>

      {/* Divider */}
      <hr className='my-10 border-t-2 border-gray-300' />

      {/* Education Section */}
      <h2 className='text-2xl font-semibold text-green-600 mb-4'>🎓 Education</h2>

      <div className='space-y-6'>
  {/* B.Sc Block */}
  <div className='bg-gray-100 p-4 rounded-xl shadow-md relative'>
    <span className='absolute top-2 right-4 text-lg font-semibold text-gray-600'>Percentage-80%</span>
    <h3 className='text-lg font-bold'>B.Sc in Computer Science</h3>
    <p className='text-md text-gray-600'>Midnapore College (Autonomous) | 2022 - 2025</p>
    <p className='text-gray-700 mt-1'>
      Graduated with distinction. Focused on software engineering, DBMS, algorithms, and full-stack development.
    </p>
  </div>

  {/* Higher Secondary Block */}
  <div className='bg-gray-100 p-4 rounded-xl shadow-md relative'>
    <span className='absolute top-2 right-4 text-lg font-semibold text-gray-600'>Percentage-91%</span>
    <h3 className='text-lg font-bold'>Higher Secondary (Class XII from WBCHSE Board)</h3>
    <p className='text-md text-gray-600'>Tatarpur High School | 2020 - 2022</p>
    <p className='text-gray-700 mt-1'>
      Science stream with Physics, Chemistry with strong foundation in Math and programming basics.
    </p>
  </div>

  {/* Secondary Block */}
  <div className='bg-gray-100 p-4 rounded-xl shadow-md relative'>
    <span className='absolute top-2 right-4 text-lg font-semibold text-gray-600'>Percentage-86.57%</span>
    <h3 className='text-lg font-bold'>Secondary (Class X from WBBSE Board)</h3>
    <p className='text-md text-gray-600'>Tatarpur High School | 2020 - 2022</p>
    <p className='text-gray-700 mt-1'>
      Science stream with Physics, Chemistry with strong foundation in Math and programming basics.
    </p>
  </div>
</div>



      {/* Optional Skills*/}
      <div>
        <Tools/>
      </div>
      

        {/* Achievements & Certification*/}
      <hr className='my-10 border-t-2 border-gray-300' />

      <h2 className='text-2xl font-semibold text-green-600 mb-4'>🏆 Achievements & Certifications</h2>
      <div className='grid md:grid-cols-3 gap-6'>

        {/* Certificate 1 */}

        <div className='bg-white rounded-lg shadow-lg p-4'>
          <a href='https://moonshot.scaler.com/s/sl/wrzwccBifs?_gl=1*16vt246*_gcl_au*MTIzOTMwOTU4NC4xNzUxMTgyMjc3*FPAU*MTIzOTMwOTU4NC4xNzUxMTgyMjc3*_ga*MTk3NjQ1ODc2MS4xNzUxMTgyMjc2*_ga_53S71ZZG1X*czE3NTMyOTYzODUkbzQkZzEkdDE3NTMyOTY0NTAkajYwJGwwJGgzMDk0ODEyMTc.' target='_blank' rel='noopener noreferrer'>
            <img
              src={pic} // Place image in public/certificates folder
              alt='Scaler DBMS Certificate'
              className='rounded-md w-full h-48 object-cover mb-2 hover:scale-105 duration-200'
            />
          </a>
          <p className='mt-5 font-semibold text-sm text-gray-700 text-center'>Scaler Academy – DBMS Certification</p>

        </div>
        
        {/* Certificate 2*/}

         <div className='bg-white rounded-lg shadow-lg p-4'>
          <a href='https://www.credly.com/go/7WlxSi1rqzt9nfZvkbaS3g' target='_blank' >
            <img
              src={pic1} // Place image in public/certificates folder
              alt='Scaler DBMS Certificate'
              className='rounded-md w-full h-48 object-cover mb-2 hover:scale-105 duration-200'
            />
          </a>
          
          <p className='mt-5 text-sm text-gray-700 font-semibold text-center'>IBM SkillsBuild-Web Development Fundamentals</p>
          </div>

          {/* Certificate 3 */}

         <div className='bg-white rounded-lg shadow-lg p-4'>
          <a href='https://example.com/certificate-link1' target='_blank' rel='noopener noreferrer'>
            <img
              src={pic2} // Place image in public/certificates folder
              alt='Scaler DBMS Certificate'
              className='rounded-md w-full h-48 object-cover mb-2 hover:scale-105 duration-200'
            />
          </a>
          <p className='mt-5 text-sm font-semibold text-gray-700 text-center'>NIIT Foundation – Program In Professional Edge</p>

        </div>
        

          
          
          
          {/* Certificate-1 */}
        {/* <div className="w-100 mx-auto">
    <div className="relative group rounded-xl shadow-md overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
        <a
          href="https://example.com/certificate-link1"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
        <img
          src={pic1}    
          alt="Scaler DBMS Certificate"
          className="w-full h-64 object-contain p-2 transition-transform duration-300     group-hover:scale-105"
          />
        </a>

        <div className="p-2">
          <h3 className="text-sm text-gray-700 font-semibold text-center">
            Scaler Academy – DBMS Certification
        </h3>
      </div>
    </div>
     </div> */}




        </div>
        

        
      <hr className='my-10 border-t-2 border-gray-300'/>
    </div>
    
   
    
    
  );
};

export default About;
