import React, { useState } from 'react'
import RightsideDiv from './RightsideDiv'

const notesapplication = () => {


    const [title,setTitle]= useState('')
    const [note,setNote]= useState('')
    const[task ,Settask]= useState([])

    function submithandle(e){
        e.preventDefault()
        console.log("hello your form is submited ",title,note)
        const copytask=([...task])
        copytask.push({title,note})
        Settask(copytask)
        console.log(task)
        
    }


  return (
    <div className='bg-black text-white h-[100vh] flex'>
        <form className='flex flex-col gap-2' onSubmit={(e)=>{
            submithandle(e);
        }}>
            <input type="text" placeholder="Enter NotesHeading" className='bg-gray-400 font-bold text-black px-1 py-10 mx-10 my-10 h-20 w-200 border-4 border-white rounded-lg text-4xl' value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }} />
            <textarea type="text" placeholder="Enter Your Notes" className='bg-gray-400 font-bold text-black mx-10  h-60 w-200 border-4 border-white rounded-lg text-4xl' value={note} onChange={(e)=>{
                setNote(e.target.value)
            }}></textarea>
            <button type="submit" className=' bg-gray-400 font-bold h-20 w-130 text-black mx-10 my-10 h-20 w-200 font-bold text-4xl'>Submit</button>
        </form>
        <div className='border-2 border-white'>
        </div>
        
        <div className='border-2 border-white h-full w-500 bg-black-400 overflow-y-auto gap-x-6 content-start  gap-y-4 flex flex-wrap p-8 '>
            <h1 className='p-2.5  h-20 w-full flex justify-center text-5xl font-extrabold'>Your Notes</h1>
            {task.map(function(e){
                return <RightsideDiv title={e.title} note={e.note}  />
            })}
            
             
           
             </div>
    </div>
  )
}

export default notesapplication