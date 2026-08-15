import React from 'react'
import { useState } from 'react'
import Ridsidediv from './ridsidediv'
const demo_project_of_task_application = () => {

    const [title,settitle]= useState("")
    const[detail,setdetail]= useState("")
    const[task,settask]= useState([])
 
    function submithandling(e){
         e.preventDefault()

        const copytask=[...task]
        copytask.push({title:title,detail:detail})
        settask(copytask)
        console.log(task)

        
    }
    function deletehandler(index){
        const copytask=[...task]
        copytask.splice(index,1)
        settask(copytask)
    }


    return (
        <div className='flex h-[100vh] w-screen  bg-amber-100 gap-2' >
            <br />
           
            <form className='flex flex-col gap-2 px-10  py-10' onSubmit={(e)=>{
                submithandling(e);
            }}>
                 <h1 className='text-4xl font-bold text-black mx-10 my-10 text-center w'> Today Task </h1>
            <br />
                <input type="text" placeholder='enter the title' className=' h-20 w-200 bg-amber-500 rounded-3xl px-8 text-2xl font-bold ' value={title} onChange={(e)=>{
                    settitle(e.target.value)
                }} />
                <br />
                <textarea type="text" placeholder='enter the note' className=' h-40 w-200 bg-amber-500 rounded-3xl px-8 py-4 text-2xl font-bold '
                 value={detail} onChange={(e)=>{
                    setdetail(e.target.value)
                 }}
                />
                <br />
                <button type="submit" className=' h-20 w-200 bg-amber-500 rounded-3xl px-4 text-4xl font-bold text-black mx- my-10 ' >Submit</button>
            </form>
            <div className='h-full bg-black border-5'></div>
            <div className='border-2 border-white h-full w-500 bg-amber-500 overflow-y-auto gap-x-6 content-start  gap-y-4 flex flex-wrap p-8 '>
        
                <h1 className='text-4xl font-bold text-black mx-10 my-10 text-center w-360'> Your Task </h1>
                <br />
               {task.map(function( call,index){
                 
                return<Ridsidediv key={index} index={index} title={call.title} note={call.detail} deletehandler={deletehandler}/>
               })}
            </div>
        </div>
    )
}

export default demo_project_of_task_application