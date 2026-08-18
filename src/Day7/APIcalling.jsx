import React, { useState } from 'react'

const APIcalling = () => {

 const [cityname ,setcityname] = useState("")

 
 function submitdata(e){
    e.preventDefault()
    
 }

  async function fechhdata(cityname){
    
  const data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=2c76954f93979470840733fa033e08ce`)
  const response= await data.json()
  console.log(response.weather)
  }

  return (
    <>
    <div>APIcalling</div>
    <form  onSubmit={(e)=>{
      submitdata(e)
    }}>
        <input type="text" className='px-3 py-10 bg-amber-400 h-20 w-90' placeholder='Enter the city name' value={cityname} onChange={(e)=>setcityname(e.target.value)} />
         <button className='bg-blue-400 text-amber-100 w-30 h-20 px-12 py-20 mx-10 my-10 rounded-full ' onClick={fechhdata(cityname)} >call api</button>
    </form>
    <div>
        {data.map(function(e){
            return <><h3> e.main.temp</h3>
              <h3> e.weather.main</h3>
              <h3> e.wind.speed</h3>
            </>
        })}
    </div>
   
    </>
  )
}

export default APIcalling