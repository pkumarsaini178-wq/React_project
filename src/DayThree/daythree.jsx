import React, { useState } from 'react'

const Daythree = () => {
  const [data, setdata] = useState({
    user_name: "pankaj",
    age: 21,
    email: "pkumarsaini178@gmail.com"
  })

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-screen bg-amber-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 flex flex-col gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div  className="bg-amber-50 text-amber-800 p-4 rounded-xl flex items-center justify-between shadow-sm">
            <p className="font-bold capitalize">{key}:</p>
            <span className="font-medium text-amber-600">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Daythree