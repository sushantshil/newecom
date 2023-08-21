import React from 'react'
import { toast } from 'react-hot-toast'
import {  useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate=useNavigate()
  const handleOnChange = ()=>{
     toast("Sent Success")
    
     navigate("/")
    }
  
  return (
    <div>
      <div className="w-full py-3 flex flex-col p-3 md:p-4 w-full max-w-sm bg-blue m-auto flex items-center flex-col p-4 font-bold text-4xl">
      Contact Us
      </div>
      <div>
      <form className="w-full py-3 flex flex-col p-3 md:p-4 w-full max-w-sm bg-white m-auto flex items-center flex-col p-4"  >
          <label htmlFor="firstName">Name</label>
          <input
            type={"text"}
            id="Name"
            name="Name"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type={"text"}
            id="PhoneNumber"
            name="PhoneNumber"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />
           <label htmlFor='description'>Description</label>
           <textarea rows={2}  
           className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
           name='description'>

           </textarea>
          

          

          <button className="w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4" onClick={handleOnChange}>
            Send
          </button>
        </form>
      </div>
       
       
         
       
    </div>
  )
}

export default Contact
