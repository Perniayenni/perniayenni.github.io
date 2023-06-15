import React from 'react'
import { ExperienceCard } from '../experience/experience'
import { experiences } from '../../data/experiences'
import Paper from '../paper/paper'

export const Experiences = () => {
    return (
      <Paper>
        <div className='experiences'>
          {experiences.map((experience, index) => (
            <div>
              <ExperienceCard key={index} experience={experience}/>
            </div>
          ))}
        </div>
      </Paper>
    )
  }
