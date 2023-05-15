import React, { useState } from 'react'
import SideBar from '../sidebar/sidebar'
import { SocialMedia } from './socialMedia'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate();

  return (
    <>
     <div className='navbar'>
        <div className='navbar__content-social-media'><SocialMedia/></div>
        <div className='navbar__menu-icon'>
          <i className='fa fa-bars' onClick={()=> setOpen(!open)}></i>
        </div>
    </div>
    { open &&
      <SideBar
        footer={<SocialMedia fontColor='white' fontSize='40px'/>}
        onClose={()=> setOpen(!open)} >
        <div className='sidebar__list'>
          <label onClick={() => navigate('/')}>{t('sidebarList:home')}</label>
          <label onClick={() => navigate('/about-me')}>{t('sidebarList:about-me')}</label>
        </div>
      </SideBar>
    }
    </>
  )
}
