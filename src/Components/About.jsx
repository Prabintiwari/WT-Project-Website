import React from 'react'
import image4 from "../images/Patient.png"

const About = () => {
  return (

    <div className=" p-10 md:p-20">
        
      <div className=" text-gray-800 items-center text-center">

         <h1 className='text-3xl md:text-5xl sm:text-4xl font-semibold mb-4 md:mb-8 '>Why choose &#8220;<span className='text-indigo-800'>Smart Health-Care</span>	
         &#8221;?</h1>
         
         <p className='text-xl'><span className='font-semibold'>Smart Health-Care</span> aimed to make healthcare services easy, fast and affordable.</p>
      </div>

        <div className="lg:flex items-center justify-between mt-10">
            <div className='lg:w-[30%] mb-10'>
                <div className='w-full h-48 flex justify-center items-center shadow-md rounded-sm bg-sky-100 hover:bg-gray-200 hover:scale-[1.01] duration-500'>
                  <img src={image4} alt="" />
                </div>
                <div className='mt-6'>
                    <h1 className='text-2xl font-semibold'>Patient-centered care:</h1>

                    <p className='mt-3 p-1'>We don't just care for your health conditions. We care about you. That means our providers take the time to listen to what's important to you before recommending next steps.</p>
                </div>
            </div>

            <div className='lg:w-[30%] mb-10'>
               <div className='w-full h-48 flex justify-center items-center shadow-md rounded-sm bg-sky-100 hover:bg-gray-200 hover:scale-[1.01] duration-500'>
                    <img src={image4} alt="" />
               </div>

               <div className='mt-6'>
                    <h1 className='text-2xl font-semibold'>Collaborative providers:</h1>

                    <p className='mt-3 p-1'>You'll get care from board-certified and fellowship trained experts who work together to create a treatment plan just for you. Only the highest standards ensure excellent outcomes.</p>
                </div>
            </div>


            <div className='lg:w-[30%] mb-10'>
               <div className='w-full h-48 flex justify-center items-center shadow-md rounded-sm bg-sky-100 hover:bg-gray-200 hover:scale-[1.01] duration-500'>
                    <img src={image4} alt="" />
               </div>

               <div className='mt-6'>
                    <h1 className='text-2xl font-semibold'>Safest online healthcare platform:</h1>

                    <p className='mt-3 p-1'>Safety of your information is our top priority. User's information on Hamro Doctor is highly confidential.</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default About