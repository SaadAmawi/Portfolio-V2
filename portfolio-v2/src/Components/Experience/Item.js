import {workData, educationData} from './data'
import React from 'react'

function Item({active}) {
  return (
   
    <div>
         {active === "Work" ? (
            <div className="timeline fade">
              {workData.map((job, i) => (
                <div className="timeline-item" key={i}>
                  <div className="logo">
                    <img src={job.logo} alt={job.company} />
                  </div>
                  <div className="details">
                    <p className="date">{job.date}</p>
                    <h3>{job.company}</h3>
                    <p className="role">{job.role}</p>
                    <ul>
                      {job.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="timeline fade">
              {educationData.map((edu, i) => (
                <div className="timeline-item" key={i}>
                  <div className="logo">
                    <img src={edu.logo} alt={edu.institution} />
                  </div>
                  <div className="details">
                    <p className="date">{edu.date}</p>
                    <h3>{edu.institution}</h3>
                    <p className="role">{edu.degree}</p>
                    <ul>
                      {edu.details.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
  )
}

export default Item