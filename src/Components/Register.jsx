import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Register = () => {

  const [show, setShow] = useState(false);

  const setShowPassword = () => {
      setShow(!show);
  }

  return (
    <div className='bg-slate-300  h-screen flex justify-center items-center mt-14 md:mt-16 p-8'>
        <div className='border border-slate-400 rounded-md p-4 sm:p-14 shadow-2xl backdrop-filter backdrop-blur-sm relative'>
           <h1 className='text-3xl sm:text-4xl  font-bold text-center mb-8'>Login</h1>

            <form action="">
                <div className='relative my-8'>
                   <input type="email" placeholder='' className='block w-60 sm:w-72 py-2 px-0 border-0 focus:outline-none bg-transparent border-b-2 border-gray-400 dark:focus:border-blue-500 focus:border-blue-500 focus: peer' />
                   
                   <label htmlFor="" className='absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6'>Your Email</label>
                   <BiUser className='absolute top-3 right-4 ' />
                </div>
    
                <div className='relative my-8'>
                  <input type={show? 'text':'password'} placeholder='' className='block  w-60 sm:w-72 py-2 px-0 border-0 focus:outline-none border-b-2 bg-transparent border-gray-400 dark:focus:border-blue-500 focus:border-blue-500 focus: peer' />
                  
                  <label htmlFor="" className='absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6'>Enter Password</label>

                  <span onClick={setShowPassword} className="absolute top-3 right-4">{show ? <AiFillEyeInvisible /> : <AiFillEye/>}</span>
                </div>

                <div className='relative my-8'>
                  <input type={show? 'text':'password'} placeholder='' className='block  w-60 sm:w-72 py-2 px-0 border-0 focus:outline-none border-b-2 bg-transparent border-gray-400 dark:focus:border-blue-500 focus:border-blue-500 focus: peer' />
                  
                  <label htmlFor="" className='absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6'>Confirm Password</label>

                  <span onClick={setShowPassword} className="absolute top-3 right-4">{show ? <AiFillEyeInvisible /> : <AiFillEye/>}</span>
                </div>
    
                
                <div className='flex justify-between items-center  text-sm sm:text-base'>
                    <div className='flex items-center'>
                       <input type="checkbox" name='' id='' />
                       <label htmlFor="Remember me" className=' mx-2'>Remember me</label>
                    </div>
                </div>
                
                <button type='Submit' className='w-full mb-4 text-[18px] mt-6 p-2 text-gray-300 rounded-lg bg-indigo-700 hover:bg-indigo-750 hover:  duration-500'>Register</button>   

                <div>
                    <span className='my-4 text-sm sm:text-base '>Already Have an account? <Link to='/login' className='text-blue-500 text-sm sm:text-base' >Login</Link></span>
                </div> 
            </form>
        </div>
    </div>
  )
}

export default Register