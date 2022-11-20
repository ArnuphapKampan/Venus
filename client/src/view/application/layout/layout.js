import React from 'react'

import Footer from './footer'
import Menu from './menu'
import NavBar from './navBar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
      <>
      <NavBar/>
      <div id="layoutSidenav">
          <Menu/>
          <div id="layoutSidenav_content">
            <Outlet/>
            <Footer/>
          </div>
      </div>
    </>
  )
}

export default Layout