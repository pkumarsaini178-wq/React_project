import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const leftsideofpage = () => {
  return (
    <>
      <div className='flex flex-col gap-4 bg-white w-1/5 h-210 mx-18 my-10 rounded-xl px-30 py-20 ' >
        <h1 className='text-black-700 text-7xl bold'>Positive</h1>
        <h1 className='text-black-700 text-7xl bold'>Customer</h1>
        <h1 className='text-black-700 text-7xl bold'>Segment</h1>
        <p className="text-2xl  font-normal leading-10">Depending on cutomer <br />
          satisfaction and access <br />to braking products,protectal target audience  can be  divided  on the   <br /> int to three group</p>
        <div className="flex items-center mt-auto ">
          <ArrowUpRight size={56} strokeWidth={2.5} className="text-black" />
        </div>
      </div>

    </>

  )
}

export default leftsideofpage