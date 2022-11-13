import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Login from './view/loginPage/loginPage'
// import HomePage from './view/homePage/home/home'
import Application from './view/application/application'

function App() {
  return (
    <Application/>
    
    // <Router>
    //         <Routes>
    //           <Route exact path="/" element={<HomePage />} />
    //           <Route path="/sign-in" element={<Login />} />
    //           <Route path="/application" element={<Application/>} />
    //         </Routes>
    // </Router>
  )
}
export default App