import React from 'react'

const RightsideDiv = ({title,note}) => {
  return (
     <div className='bg-white  text-black h-90 w-90 rounded-3xl px-3 py-3 '>
        <h3 className='text-3xl font-bold'>title-: {title}</h3>
        <p className='text-xl font-medium '>notes-{note}</p>
     </div>
  )
}

export default RightsideDiv