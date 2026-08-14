import React from 'react'
import { MoveRight } from 'lucide-react'

const Rightsidepage1 = (props) => {
  return (
    <>
      
      <div  id="right"className='relative w-1/4 h-200 rounded-3xl overflow-hidden shadow-xl border border-gray-100  mx-4 my-6 group '>

        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={props.image}
          alt="Customer segmentation"
        />
        <div className="absolute top-5 left-5 w-9 h-9 rounded-full bg-white text-gray-900 font-bold text-sm flex items-center justify-center shadow-md z-10">
          {props.indexValue}
        </div>

        <div className=' absolute p-6 bottom-0  w-100'>

          <p className=' h-70 w-70  justify-center items-center text-amber-50'>{props.text}</p>
          <div className=' flex items-center justify-between '>
          <span className=' px-5 py-2.5  bottom-8  h-10 w-20 bg-amber-200 rounded-2xl flex items-center justify-center text-center 
            '>{props.submit}</span>  
          <button className=' px-0,py-10 bg-white/20  backdrop-blur-3xl  text-amber-50 items-center flex justify-center rounded-full h-10 w-10'><MoveRight size={20} /></button>
          </div>
        </div>
        
      </div>
    </>

  )
}

export default Rightsidepage1
