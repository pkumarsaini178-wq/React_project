import React, { useState } from 'react'

const JobCard = ({ job }) => {
  const [saved, setSaved] = useState(job.isSaved || false)

  return (
    <div className="job_card">
      <div className="job_card_header">
        <div className="company_logo" style={{ backgroundColor: job.bgColor || '#f1f5f9' }}>
          {job.logoText ? (
            <span className="logo_text" style={{ color: job.logoColor || '#1e293b' }}>
              {job.logoText}
            </span>
          ) : (
            <img src={job.logoUrl} alt={job.company} className="logo_img" />
          )}
        </div>
        <button
          className={`save_btn ${saved ? 'saved' : ''}`}
          onClick={() => setSaved(!saved)}
        >
          {saved ? 'Saved 🔖' : 'Save 🔖'}
        </button>
      </div>

      <div className="company_meta">
        <span className="company_name">{job.company}</span>
        <span className="post_date">• {job.postedTime}</span>
      </div>

      <h3 className="job_title">{job.title}</h3>

      <div className="job_tags">
        {job.tags && job.tags.map((tag, idx) => (
          <span key={idx} className="tag_badge">{tag}</span>
        ))}
      </div>

      <div className="job_card_footer">
        <div className="salary_meta">
          <div className="salary">{job.salary}</div>
          <div className="location">{job.location}</div>
        </div>
        <button className="apply_btn">Apply now</button>
      </div>
    </div>
  )
}

export default JobCard
