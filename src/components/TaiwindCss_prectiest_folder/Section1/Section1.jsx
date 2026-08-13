import React from 'react'
import Navbarwithcomponent from './navbarwithcomponent'
import Pagecontain1 from './Pagecontain1'

const Section1 = () => {
  return (
    <div className="h-screen w-full bg-white p-4">
      <Navbarwithcomponent />
       <Pagecontain1/>
    </div>

  )
}

export default Section1