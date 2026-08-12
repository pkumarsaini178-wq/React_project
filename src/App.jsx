import React, { useState } from 'react'
import './App.css'
import CardEmpliment from './components/CardEmpliment.jsx'

const App = () => {

 const jobs = [
  {
    id: 1,
    logo: "https://t4.ftcdn.net/jpg/05/72/62/45/240_F_572624568_dqkvrkUfRckNY2eMLC6JmgTctncWWMFF.jpg",
    brandName: "AMAZON",
    timing: "Part-Time",
    position: "Senior UI/UX Designer",
    level: "Senior Level",
    pay: 120,
    payType: "per hour"
  },
  {
    id: 2,
    logo: "https://t4.ftcdn.net/jpg/05/72/62/45/240_F_572624568_dqkvrkUfRckNY2eMLC6JmgTctncWWMFF.jpg",
    brandName: "FLIPKART",
    timing: "Full-Time",
    position: "Senior UI/UX Designer",
    level: "Senior Level",
    pay: 120,
    payType: "per hour"
  },
  {
    id: 3,
    logo: "https://t4.ftcdn.net/jpg/05/72/62/45/240_F_572624568_dqkvrkUfRckNY2eMLC6JmgTctncWWMFF.jpg",
    brandName: "SHOPPY",
    timing: "Part-Time",
    position: "Senior UI/UX Designer",
    level: "Senior Level",
    pay: 120,
    payType: "per hour"
  },
  {
    id: 4,
    logo: "https://t4.ftcdn.net/jpg/05/72/62/45/240_F_572624568_dqkvrkUfRckNY2eMLC6JmgTctncWWMFF.jpg",
    brandName: "APPLE",
    timing: "Full-Time",
    position: "Junior UI/UX Designer",
    level: "Junior Level",
    pay: 100,
    payType: "per hour"
  },
  {
    id: 5,
    logo: "https://t4.ftcdn.net/jpg/05/72/62/45/240_F_572624568_dqkvrkUfRckNY2eMLC6JmgTctncWWMFF.jpg",
    brandName: "OTHER",
    timing: "On Hour",
    position: "Senior UI/UX Designer",
    level: "Senior Level",
    pay: 120,
    payType: "per hour"
  }
];
  return (
    <div className="jobs_grid">
      {jobs.map((job) => (
        <CardEmpliment logo={job.logo} brandName={job.brandName} timing={job.timing} position={job.position} level={job.level} pay={job.pay} payType={job.payType} />
      ))}
    </div>
  )
}

export default App