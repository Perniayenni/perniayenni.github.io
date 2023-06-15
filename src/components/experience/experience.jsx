import React from 'react'
import { Collapsible } from '../collapsible/collapsible'

export const ExperienceCard = (props) => {
  const { experience }= props

  const getCollapsibleTitle = () => {
    return (
      <div className='experience__content-first'>
        <img src={experience.img}/>
        <div className='experience__content-titles'>
          <label>{experience.position}</label>
          <span>{experience.company_name}</span>
          {`${experience.start_date}-${experience.end_date}`}
        </div>
        
      </div>
    )
  }

  return (
    <Collapsible
      id={experience.id}
      additionalClassName='experience'
      collapsibleTitle={getCollapsibleTitle()}
    >
      <div className='experience__content-text'>
        <div className='experience__text'>
          <p  dangerouslySetInnerHTML={{ __html: experience.functions }}></p>
        </div>
      </div>
    </Collapsible>
  )
}
