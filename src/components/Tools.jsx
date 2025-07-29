
import React from 'react';
import {  FaCss3Alt, FaJs, FaNodeJs, FaReact,FaHtml5,FaPython,FaPhp,FaDatabase, } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss,SiDotnet } from 'react-icons/si';




const tools = [
{ icon: <FaHtml5 size={28} className="text-orange-600" />, name: 'HTML5', desc: 'Markup Language' },
  { icon: <FaCss3Alt size={28} className="text-blue-600" />, name: 'CSS', desc: 'User Interface' },
  { icon: <FaJs size={28} className="text-yellow-400" />, name: 'JavaScript', desc: 'Interaction' },
  { icon: <FaNodeJs size={28} className="text-green-600" />, name: 'NodeJS', desc: 'Web Server' },
  { icon: <SiExpress size={28} className="text-gray-800" />, name: 'ExpressJS', desc: 'Node Framework' },
  { icon: <SiMongodb size={28} className="text-green-700" />, name: 'MongoDB', desc: 'Database' },
  { icon: <FaReact size={28} className="text-blue-400" />, name: 'React', desc: 'Framework' },
  { icon: <SiTailwindcss size={28} className="text-sky-500" />, name: 'TailwindCSS', desc: 'User Interface' },
  { icon: <FaPython size={28} className="text-blue-500" />, name: 'Python', desc: 'Programming Language' },
  { icon: <FaPhp size={28} className="text-indigo-600" />, name: 'PHP', desc: 'Server-side Language' },
  { icon: <FaDatabase size={28} className="text-orange-500" />, name: 'SQL', desc: 'Database Query' },
  { icon: <SiDotnet size={28} className="text-purple-700" />, name: '.NET', desc: 'Web Framework' },
];

const Tools = () => {
  return (
    <div className="bg-white text-gray-900 pt-16 px-6 md:px-2">
      <h2 className="text-2xl font-semibold text-green-600 mb-4 ">💻 Essential Tools I use</h2>
      <p className="text-gray-600 mb-10 max-w-xl">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-gray-100 hover:shadow-xl transition-all p-5 rounded-xl flex items-start space-x-4"
          >
            <div className="text-3xl">{tool.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{tool.name}</h3>
              <p className="text-sm text-gray-500">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>

    
  );
};

 
export default Tools;
