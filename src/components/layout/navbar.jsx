import React, { useState } from 'react'
import SideBar from '../sidebar/sidebar'
import { SocialMedia } from './socialMedia'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Menu } from '../icons'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate();

  return (
    <>
     <div className='navbar'>
      <div className='navbar__content'>
        <div className='navbar__content-social-media'><SocialMedia fontColor='white' fontSize='30px'/></div>
          <div className='navbar__menu-icon'>
            <Menu color='#FFFFFF' width='40' height='40' onClick={()=> setOpen(!open)}/>
            {/* <i className='fa fa-bars' onClick={()=> setOpen(!open)}></i> */}
          </div>
        </div>
    </div>
    { open &&
      <SideBar
        footer={<SocialMedia fontColor='white' fontSize='40px'/>}
        onClose={()=> setOpen(!open)}
        onClickOutside={()=> setOpen(!open)} >
        <div className='sidebar__list'>
          <label onClick={() => navigate('/')}>{t('sidebarList:home')}</label>
          <label onClick={() => navigate('/about-me')}>{t('sidebarList:about-me')}</label>
          <label onClick={() => navigate('/experiences')}>{t('sidebarList:experience')}</label>
          <label onClick={() => navigate('/certifications')}>{t('sidebarList:certifications')}</label>
        </div>
      </SideBar>
    }
    </>
  )
}
