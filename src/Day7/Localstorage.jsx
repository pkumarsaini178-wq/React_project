import React from 'react'


const Localstorage = () => {
   
    const user={
        user_name:"pankaj kumar saini",
        user_age:22,
        user_email:"pankaj123@gmail.com",
        
    }
    


    localStorage.setItem("user_deatail", JSON.stringify(user))
     
    const showdata=JSON.parse(localStorage.getItem('user_deatail'))

    console.log(showdata)
    
  return (
    <div>Localstorage</div>
  )
}

export default Localstorage