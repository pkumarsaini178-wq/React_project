import React from 'react'
import Navbar from './components/navbar'
import Divcontain from './components/Divcontain'
import './App.css'

 const name="pankaj";
   const midelname="kumar";
   const sername="saini";
export const App = () => {
  return (
  
    <div className='main_div'>
      <header className='app_header'>
        <h1 className='main_title'>Hello, this is my first React project! 🚀</h1>
        <p className='main_subtitle'>Exploring modern UI design and components</p>
      </header>

      <section className='section_container'>
        <h2 className='section_heading'>Navigation Items</h2>
        <div className='navbar_grid'>
          <Navbar user_name={name} Midel_name={midelname} serName={sername} />
          <Navbar  /> 
          <Navbar  />
          <Navbar  />
          <Navbar />
          <Navbar  />
        </div>
      </section>

      <section className='section_container'>
        <h2 className='section_heading'>Content Containers</h2>
        <div className='divcontain_grid'>
          <Divcontain title="React Fundamentals" description="Learning JSX, components, and props passing." icon="⚡" />
          <Divcontain title="State & Hooks" description="Managing local state with useState and useEffect." icon="🔄" />
          <Divcontain title="Component Props" description="Passing data dynamically from parent to child components." icon="📦" />
          <Divcontain title="Custom Styling" description="Building modern glassmorphism UI with CSS." icon="🎨" />
        </div>
      </section>
    </div>
  )
}
export default App