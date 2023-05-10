import React from 'react'
import { Navbar } from './navbar'
import { Outlet } from 'react-router-dom'

export const Layout = (props) => {
  const { children, isTestEnv } = props

  return (
    <div>
      <Navbar />
      
      <div className='layout_content'>
        { isTestEnv ? children : <Outlet/> } 
      </div>
    </div>
  )
}
