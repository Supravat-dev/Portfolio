import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import ProjectShow from './components/ProjectShow'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <>
      <div>
        <Navbar/>
      <Home/>
      
      <About/>
      <ProjectShow/>
      <Contact/>
      <Footer/>
      </div>
      <Toaster/>
    </>
  )
}

export default App
