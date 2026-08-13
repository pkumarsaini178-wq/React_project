import React, { useState } from 'react'

const JobCard = ({ job }) => {
  const [saved, setSaved] = useState(job.isSaved || false)

  return (
    <>
    <h2>JobCard</h2>
     <div className="job_card">
      
   </div>
    </>
  )
}

export default JobCard
