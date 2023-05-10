import React, { useState } from 'react'
import SideBar from '../sidebar/sidebar'
import { SocialMedia } from './socialMedia'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
     <div className='navbar'>
        <div className='navbar__content-social-media'><SocialMedia/></div>
        <div className='navbar__menu-icon'>
          <i className="fa fa-bars" onClick={()=> setOpen(!open)}></i>
        </div>
    </div>
    { open &&
      <SideBar
        footer={<SocialMedia fontColor='white' fontSize='40px'/>}
        onClose={()=> setOpen(!open)} >
        <div className='sidebar__list'>
          <label>Inicio</label>
          <label>Sobre mi</label>
        </div>
      </SideBar>
    }
    </>
  )
}
