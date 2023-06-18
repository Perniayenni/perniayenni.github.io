import React, { useState } from 'react'
import SideBar from '../sidebar/sidebar'
import { SocialMedia } from './socialMedia'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Menu } from '../icons'
import useScreenSize from '../../hooks/useScreenSize'
import { MIN_DESKTOP } from '../../constants/general'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate();
  const screenSize = useScreenSize();

  const handleOnclick = (url) => {
    if( screenSize.width < MIN_DESKTOP ) setOpen(!open)
    navigate(url)
  }

  return (
    <>
     <div className='navbar'>
      <div className='navbar__content'>
       {screenSize.width > MIN_DESKTOP &&
        <div className='navbar__content-first'>
          <div className='navbar__list'>
            <label onClick={() => handleOnclick('/')}>{t('sidebarList:home')}</label>
            <label onClick={() => handleOnclick('/about-me')}>{t('sidebarList:about-me')}</label>
            <label onClick={() => handleOnclick('/experiences')}>{t('sidebarList:experience')}</label>
            <label onClick={() => handleOnclick('/certifications')}>{t('sidebarList:certifications')}</label>
          </div>
        </div>
       } 

        <div className='navbar__content-second'>
          <div className='navbar__content-social-media'>
            <SocialMedia fontColor='white' fontSize='30px'/>
          </div>
          { screenSize.width < MIN_DESKTOP &&
            <div className='navbar__menu-icon'>
              <Menu color='#FFFFFF' width='40' height='40' onClick={()=> setOpen(!open)}/>
            </div>
          }
        </div>
      </div>
    </div>
    { screenSize.width < MIN_DESKTOP && open &&
      <SideBar
        footer={<SocialMedia fontColor='white' fontSize='40px'/>}
        onClose={()=> setOpen(!open)}
        onClickOutside={()=> setOpen(!open)} >
        <div className='sidebar__list'>
          <label onClick={() => handleOnclick('/')}>{t('sidebarList:home')}</label>
          <label onClick={() => handleOnclick('/about-me')}>{t('sidebarList:about-me')}</label>
          <label onClick={() => handleOnclick('/experiences')}>{t('sidebarList:experience')}</label>
          <label onClick={() => handleOnclick('/certifications')}>{t('sidebarList:certifications')}</label>
        </div>
      </SideBar>
    }
    </>
  )
}
