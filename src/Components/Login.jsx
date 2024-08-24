import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Validation from './Validation'


const Login = () => {

    const [show, setShow] = useState(false);

    const setShowPassword = () => {
        setShow(!show);
    }
    const [values, setValues] = useState({
        name:'',
        email:'', 
        password:'',
 
     })

    function handelInput (event){
        const newObj = {...values, [event.target.name]:event.target.value}
        setValues(newObj)
      } 

      const [errors, setErrors] = useState({})
    function handleValidation (event){
      event.preventDefault();
     setErrors(Validation(values));
    }
    
  return (
    <div className='bg-slate-300  h-screen flex justify-center items-center mt-14 md:mt-16 p-8'>


        <div className='group border border-slate-400 rounded-md p-4 sm:p-14 shadow-2xl backdrop-filter backdrop-blur-sm relative'>
           <h1 className='text-3xl sm:text-4xl  font-bold text-center mb-8'>Login</h1>

            <form onSubmit={handleValidation}>
                <div className='relative my-8'>
                   <input type="email" placeholder='' name='email' className='block w-60 sm:w-72 py-2 px-0 border-0 focus:outline-none bg-transparent border-b-2 border-gray-400 dark:focus:border-blue-500 focus:border-blue-500 focus: peer' onChange={handelInput} />
                   
                   {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                   
                   <label for="email" className='absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6'>Your Email</label>
                   <BiUser className='absolute top-3 right-4 ' />
                </div>
    
                <div className='relative my-8'>
                  <input  type={show? 'text':'password'} name='password' placeholder='' className='block  w-60 sm:w-72 py-2 px-0 border-0 focus:outline-none border-b-2 bg-transparent border-gray-400 dark:focus:border-blue-500 focus:border-blue-500 focus: peer' onChange={handelInput} />

                  {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
                  
                  <label for="password" className='absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6'>Enter Password</label>

                  <span onClick={setShowPassword} className="absolute top-3 right-4">{show ? <AiFillEyeInvisible /> : <AiFillEye/>}</span>
                </div>
    
                
                <div className='flex justify-between items-center  text-sm sm:text-base'>
                    <div className='flex items-center'>
                       <input type="checkbox" name='' id='' />
                       <label for="Remember me" className=' mx-2'>Remember me</label>
                    </div>
                    <Link to='' className='text-blue-500 hover:underline'>Forget password?</Link>
                </div>
                
                <button type='Submit' className='w-full mb-4 text-[18px] mt-6 p-2 text-gray-300 rounded-lg bg-indigo-700 hover:bg-indigo-900  duration-500'>Login</button>   

                <div>
                    <span className='m-4 text-sm sm:text-base '>New Here? <Link to='/register' className='text-blue-500 text-sm sm:text-base' >Create an Account</Link></span>
                </div> 
            </form>
        </div>

    </div>
  )
}

export default Login