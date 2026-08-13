import React from 'react'

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="navbar_wrapper">
    <nav>
      <button onClick={() => setCurrentPage('home')}>Home</button>
      
      {/* Tailwind CSS pe click hone par state 'tailwind' ho jayegi */}
      <button onClick={() => setCurrentPage('tailwind')}>
        Tailwind CSS
      </button>
      <button onClick={()=>setCurrentPage('jobcard')}>job_card</button>
    </nav>
    </div>
  )
}

export default Navbar