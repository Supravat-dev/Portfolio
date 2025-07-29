import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

const Contact = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo={
        name:data.name,
        email:data.email,
        message:data.message
    }
    try {
        await axios.post("https://getform.io/f/bpjpwlob",userInfo);
        toast.success("Your message has been sent");
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
        
    }
  }

  return (
    <>
    <div name="Contacts" 
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-4xl font-bold mb-6 text-center text-gray-800'>Contact Me</h1>
        <span className='flex justify-center items-center text-center '>Please fill out the form to contact me</span>


     {/* creating the form */}

        <form
        onSubmit={handleSubmit(onSubmit)} 
        // action="https://getform.io/f/bpjpwlob" 
        // method="POST"
        className="bg-slate-200 p-6 rounded-lg shadow-md max-w-xl mx-auto">
  <h1 className="text-2xl font-semibold text-center mb-6">Send your Message</h1>

  <div className="mb-4">
    <label className="block text-gray-800 font-medium mb-2" htmlFor="fullName">
      Full Name
    </label>
    <input
      {...register("name", { required: true })}
      type="text"
      id="name"
      name="name"
      placeholder="Enter your full name"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
    {errors.name && <span>This field is required</span>}
  </div>

  <div 
  name="Contacts"
  
  className="mb-4">
    <label className="block text-gray-800 font-medium mb-2" htmlFor="email">
      Email Address
    </label>
    <input
    {...register("email", { required: true })}
      type="email"
      name="email"
      id="email"
      placeholder="Enter your email"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
    {errors.email && <span>This field is required</span>}
  </div>

  <div className="mb-4">
    <label className="block text-gray-800 font-medium mb-2" htmlFor="message">
      Message
    </label>
    <textarea
    {...register("message", { required: true })}
      id="message"
      name="message"
      type="text"
      rows="4"
      placeholder="Type your message here"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    ></textarea>
    {errors.message && <span>This field is required</span>}
  </div>

  <div className="text-center">
    <button
      type="submit"
      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
    >
      Send
    </button>
  </div>
</form>


    </div>
    </>
  )
}

export default Contact
