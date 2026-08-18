import axios from 'axios';
import React, { useEffect, useState } from 'react'

const newproject = () => {
    const [userdata, Setuserdata] = useState([])
    const [index,SetIndex]=userState(1)

    function page_increate( index){
        SetIndex(index+1)
        
    }
    function page_disreate(index)
    {
        if(index>1)
        {
            SetIndex(index-1)
        }
        
    }

    async function getdata() {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=50`);
        console.log("data aagya....");

        Setuserdata(response.data);
        console.log(response.data);
    }
    useEffect(function () {
        getdata();

    }, [index])



    return (
        <div className='bg-black h-full  w-full text-2xl font-bold text-cyan-200 p-12 py-10'>   hello bro

            <div className='flex flex-wrap  gap-4'>
                {userdata.map(function (e) {
                    return <div className=' overflow-hidden bg-gray-950 rounded-4xl border-amber-600 p-2'> <img className='w-40 h-40 ' src={e.download_url}></img>
                        <h1 className='text-xl'>{e.author}</h1>
                    </div>
                })}
            </div>
             <button 
          onClick={page_disreate}
          disabled={index === 1}
          className='bg-amber-600 disabled:bg-gray-700 text-white px-6 py-2 rounded-full font-bold cursor-pointer'
        >
          Prev
        </button>
        <span className='text-xl text-white font-bold'>Page {index}</span>
        <button 
          onClick={page_increate}
          className='bg-amber-600 text-white px-6 py-2 rounded-full font-bold cursor-pointer'
        >
          Next
        </button>

        </div>

        
           
    )
}

export default newproject