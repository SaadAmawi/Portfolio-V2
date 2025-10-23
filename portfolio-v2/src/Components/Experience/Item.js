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
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                    <p className="stack">{job.Stack}</p>
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
                    <p className="degree">{edu.degree}</p>
                    <p className="degree">{edu.cgpa}</p>
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