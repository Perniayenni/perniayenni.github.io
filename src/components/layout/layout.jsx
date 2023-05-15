import React from 'react'
import { Navbar } from './navbar'
import { Outlet } from 'react-router-dom'

export const Layout = (props) => {
  const { children, isTestEnv } = props

  return (
    <div className='layout'>
      <Navbar />
      
      <div className='layout__content'>
        { isTestEnv ? children : <Outlet/> } 
      </div>
    </div>
  )
}
