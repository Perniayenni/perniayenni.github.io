import React from 'react'
import { Collapsible } from '../collapsible/collapsible'
import LazyImage from '../lazy-image/lazy-image'

export const ExperienceCard = (props) => {
  const { experience }= props

  const getCollapsibleTitle = () => {
    return (
      <div className='experience__content-first'>
        <LazyImage
          width={100}
          alt='lazy'
          url={experience.img}
          loader={<i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>}/>
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
