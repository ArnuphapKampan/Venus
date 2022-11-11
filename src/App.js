import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/loginPage/loginPage'
import HomePage from './components/homePage/home/home'
function App() {
  return (
    <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<Login />} />
            </Routes>
    </Router>
  )
}
export default App