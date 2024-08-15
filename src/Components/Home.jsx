import React from 'react'
import image from '../images/Smart Health-Care.png'

const Home = () => {

 const icons = [
  {name:'fa-heart-pulse'},
  {name:'fa-suitcase-medical'},
  {name:'fa-stethoscope'},
  {name:'fa-receipt'},
  {name:'fa-syringe'},
  {name:'fa-comment-medical'}

 ]

  return (
    <div className='bg-slate-900 w-full font-[Poppins]h-auto'>

        <div className='bg-orange-300 group/item md:flex  mt-14 md:mt-16 p-8   items-center justify-between'>

          <div className='flex flex-col justify-center  items-center '>
            <h1 className='items-center text-gray-800 font-semibold  md:text-3xl xl:text-5xl '>All your health concerns <br /><span className='leading-relaxed'>in a single platform;</span> </h1>
            
            <h1 className='items-center text-blue-900 mt-1 md:mt-3 font-bold text-xl md:text-3xl xl:text-5xl'>Smart Health-Care!</h1>
          </div>

          <div className='flex items-center justify-between gap-0 mt-10 md:mt-0'>
              <div className=" grid grid-cols-2 ml-10 items-center  text-xl md:text-3xl ">
                 {
                  icons.map((icon)=>(
                    <li className=' list-none text-emerald-500 my-0 cursor-pointer mx-5 md:mx-0'>
                      <i className={`fa-solid ${icon.name} p-2 space-x-8 lg:p-4 `}></i>
                    </li>
                  ))
                 }
              </div>
              <div>
                <img className='hover-duration-500 w-1/2 md:w-[200px] lg:w-[300px] mx-8 md:ml-1' src={image} alt="" />
              </div>
          </div>    

        </div>

        <div>
          
        </div>
    </div>
  )
}

export default Home