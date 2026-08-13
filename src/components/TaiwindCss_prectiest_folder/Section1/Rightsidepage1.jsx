import React from 'react'
import { MoveRight } from 'lucide-react'

const Rightsidepage1 = () => {
  return (

    <>
      <div className="relative w-1/6 h-200 rounded-3xl overflow-hidden shadow-xl border border-gray-100  mx-4 my-6 group">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src="https://images.pexels.com/photos/4061007/pexels-photo-4061007.jpeg"
          alt="Customer segmentation"
        />

        {/* 1. Top Left Circle Number Badge */}
        <div className="absolute top-5 left-5 w-9 h-9 rounded-full bg-white text-gray-900 font-bold text-sm flex items-center justify-center shadow-md z-10">
          1
        </div>

        {/* 2. Bottom Content Overlay with Dark Gradient */}
        <div className="absolute  bottom-0  p-6 flex flex-col justify-end ">

          {/* Paragraph Text Overlapped on Image */}
          <p className="text-white text-xs sm:text-sm font-normal  mb-6 ">
            Prime customers, that have access to bank credit and are satisfied with the current product.
          </p>

          {/* Bottom Pill Badge + Arrow Button */}
          <div className="flex items-center justify-between">
            <span className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
              Satisfied
            </span>

            <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all hover:scale-110">
              <MoveRight size={18} />
            </button>
          </div>

        </div>

      </div>
      <div className='relative w-1/6 h-200 rounded-3xl overflow-hidden shadow-xl border border-gray-100  mx-4 my-6 group '>

        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src="https://images.pexels.com/photos/4061007/pexels-photo-4061007.jpeg"
          alt="Customer segmentation"
        />
        <div className="absolute top-5 left-5 w-9 h-9 rounded-full bg-white text-gray-900 font-bold text-sm flex items-center justify-center shadow-md z-10">
          1
        </div>

        <div className=' absolute p-6 bottom-0  w-100'>

          <p className=' h-70 w-70  justify-center items-center text-amber-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum aut sint facilis, libero iure illum quibusdam tempora doloribus? Voluptatibus ex ipsum ratione aliquam doloribus inventore magni neque dolor sit.</p>
          <div className=' flex items-center justify-between '>
          <span className=' px-5 py-2.5  bottom-8  h-10 w-20 bg-amber-200 rounded-2xl flex items-center justify-center text-center 
            '>submit</span>  
          <button className=' px-0,py-10 bg-white/20  backdrop-blur-3xl  text-amber-50 items-center flex justify-center rounded-full h-10 w-10'><MoveRight size={20} /></button>
          </div>
        </div>
        
      </div>
    </>

  )
}

export default Rightsidepage1
