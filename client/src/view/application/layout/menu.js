import React from 'react'
import { NavLink } from 'react-router-dom'
import { decodeToken } from "react-jwt";
const Menu = () => {
    const decoded = decodeToken(localStorage.getItem('token'));

  return (
    <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion" style={{boxShadow:"0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)"}}>
            <div className="sb-sidenav-menu">
                <div className="nav">
        
                    <div className="sb-sidenav-menu-heading">Menu</div>
                    <NavLink style={({isActive})=>{return {borderRight: isActive?'5px solid skyblue':''}}} className="nav-link" to={""}>
                    <i className="fas fa-tachometer-alt"></i>
                        <div className="sb-nav-link-icon"></div>
                        Dashboard
                    </NavLink>
                    {/* <div className="sb-sidenav-menu-heading">Interface</div> */}
                    
                    <NavLink className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages" style={{color:'#6c757d'}}>
                        <i className="fas fa-book-open"></i>
                        <div className="sb-nav-link-icon"></div>
                        Pages
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </NavLink>
                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                            
                          {(decoded.user.role === "admin")
                            ?(<NavLink style={({isActive})=>{return {borderRight: isActive?'5px solid skyblue':''}}} className="nav-link" to={'register/'}>
                                    Register
                                </NavLink>)
                            :""
                          }
                            <NavLink style={{color:'#6c757d'}} className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                Authentication
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </NavLink>
                            <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <NavLink style={({isActive})=>{return {borderRight: isActive?'5px solid skyblue':''}}} className="nav-link" to="/Login">Login</NavLink>
                                    <NavLink style={({isActive})=>{return {borderRight: isActive?'5px solid skyblue':''}}} className="nav-link" to="/Register">Register</NavLink>
                                    <NavLink style={({isActive})=>{return {borderRight: isActive?'5px solid skyblue':''}}} className="nav-link" to="/Forgot-Password">Forgot Password</NavLink>
                                </nav>
                            </div>
                            <NavLink style={{color:'#6c757d'}} className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                Error
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </NavLink>
                            <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <NavLink style={({isActive})=>{return {borderRight: isActive?'5px solid skyblue':''}}} className="nav-link" to="/401">401 Page</NavLink>
                                    <NavLink style={({isActive})=>{return {borderRight: isActive?'5px solid skyblue':''}}} className="nav-link" to="/404">404 Page</NavLink>
                                    <NavLink style={({isActive})=>{return {borderRight: isActive?'5px solid skyblue':''}}} className="nav-link" to="/500">500 Page</NavLink>
                                </nav>
                            </div>
                        </nav>
                    </div>
                    
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Menu