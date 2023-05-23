import React from 'react'
import Paper from '../paper/paper'
import { certifications } from '../../data/certifications'
import { useTranslation } from 'react-i18next'
import LazyImage from '../lazy-image/lazy-image'

const SIZE_IMG = 250

export const Certifications = () => {
  const { t } = useTranslation()

  return (
      <Paper >  
        <div className='certifications'>
          {
            certifications.map((certification, index) => (
              <Paper key={index} elevation={2} additionalClassName='certifications__certification'>
                <LazyImage
                  width={SIZE_IMG}
                  alt='angular'
                  url={certification.img}
                  loader={<i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>}/>
                <div className='certifications__content-data'>
                  <p className='certifications__date'> {t('certifications:expedition')}: {certification.expedition}</p>
                  <p className='certifications__company'>{t('certifications:company')}: {certification.company}</p>
                  <a
                    href={certification.url}
                    className='certifications__link'>
                      {t('certifications:credentials')}
                  </a>
                </div>
            
               </Paper>
            ))
          }
        </div>
      </Paper>
  )
}
