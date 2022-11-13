import React from 'react'
import Content from './content'
import Footer from './footer'
import Menu from './menu'
import NavBar from './navBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Layout = () => {
  return (
    <Router>
      <NavBar/>
      <div id="layoutSidenav">
          <Menu/>
          <div id="layoutSidenav_content">
            <Routes>
                <Route exact path="/" element={<Content />} />
            </Routes>
            <Footer/>
          </div>
      </div>
    </Router>
  )
}

export default Layout