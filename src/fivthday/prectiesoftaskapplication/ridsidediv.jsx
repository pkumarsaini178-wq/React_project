import React from 'react'
import Demo_project_of_task_application from './demo_project_of_task_application'

const ridsidediv = ({title,note,index , deletehandler}) => {

  return (
    <>
    <div className="">
   <div  key={index}  className="relative bg-white bg-cover bg-center h-70 w-70 px-10 py-10 rounded-3xl mx-2 my-5 content-start text-2xl font-bold flex flex-wrap gap-2 overflow-auto  [] [&&::-webkit-scrollbar]:hidden text-black">
   <h3 className='text-3xl font-bold'>Title:- {title}</h3>
   <br />
   <h3 className='text-xl font-medium'>Note:- {note}</h3>
</div>
<br />
<button  onClick={()=>deletehandler(index)} className='bg-amber-600 text-2xl font-bold px-4 py-2 rounded-full mx-2 my-2'>Delete</button>
</div>
</>

  )
}

export default ridsidediv