import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './view/loginPage/loginPage'
import HomePage from './view/homePage/home/home'
import Application from './view/application/application'
import Content from './view/application/layout/page/content'
import Register from './view/application/layout/page/register'

//Notify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
          <>
            <ToastContainer/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<LoginPage />} />
              <Route path="application/" element={<Application/>}>
                <Route  path="" element={<Content />} />
                <Route  path="register/" element={<Register />} />  
              </Route>
            </Routes>
           </>
  )
}
export default App