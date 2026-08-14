import React, { useState, useRef } from 'react'
import './App.css'
import Daythree from './DayThree/daythree';

const App = () => {

  const [a, seta] = useState(1);
  const [data, setdata] = useState({ user_name: "pankaj_kumar_saini  ", age: 21, email: "pkumarsaini178@Gmail.com" })
  function increasevalue() {
    seta(a + 1);
    console.log(a);
  }
  function dicresevalue() {
    seta(a - 1);
    console.log(a)
  }
  return (
    <Daythree/>
  )
}

export default App