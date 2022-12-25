import React from 'react'
import { NavLink } from 'react-router-dom'
import { decodeToken } from "react-jwt";
import { useSelector } from 'react-redux'
const Menu = () => {
    const decoded = decodeToken(localStorage.getItem('token'));
    const { userStorage } = useSelector((state) => ({ ...state }))
  return (
    <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion" style={{boxShadow:"0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)"}}>
            <div className="sb-sidenav-menu">
                <div className="nav">
        
                    <div className="sb-sidenav-menu-heading">Menu</div>
                    <NavLink style={{borderRight: (userStorage.activeMenu === "dashboard")?'5px solid skyblue':'',color: (userStorage.activeMenu === "dashboard")?'#007bff':'#6c757d'}} className="nav-link" to={""}>
                    <i className="fas fa-tachometer-alt"></i>
                        <div className="sb-nav-link-icon"></div>
                        Dashboard
                    </NavLink>
                    <NavLink style={{borderRight: (userStorage.activeMenu === "message")?'5px solid skyblue':'',color: (userStorage.activeMenu === "message")?'#007bff':'#6c757d'}} className="nav-link" to={"message/"}>
                    <i className="fas fa-comments"></i>
                        <div className="sb-nav-link-icon"></div>
                        Message<sup><i className="fa fa-bell text-danger"></i><sup><span className="badge rounded-pill badge-notification bg-danger">10</span></sup></sup>
                    </NavLink>
                    <NavLink style={{borderRight: (userStorage.activeMenu === "map")?'5px solid skyblue':'',color: (userStorage.activeMenu === "map")?'#007bff':'#6c757d'}} className="nav-link" to={"map/"}>
                    <i className="fas fa-map-marked-alt"></i>
                        <div className="sb-nav-link-icon"></div>
                        Map
                    </NavLink>
                    {/* <div className="sb-sidenav-menu-heading">Interface</div> */}
                    
                    <NavLink className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages" style={{color:'#6c757d'}}>
                        <i className="fas fa-cogs"></i>
                        <div className="sb-nav-link-icon"></div>
                        Management
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </NavLink>
                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                          {(decoded.user.role === "admin")
                            ?(<NavLink style={{borderRight: (userStorage.activeMenu === "user")?'5px solid skyblue':'',color: (userStorage.activeMenu === "user")?'#007bff':'#6c757d'}} className="nav-link" to={'user/'}><i className="fas fa-users"></i><div className="sb-nav-link-icon"></div>User Management</NavLink>)
                            :""
                          }
                          {(decoded.user.role === "admin")
                            ?(<NavLink style={{borderRight: (userStorage.activeMenu === "mapManage")?'5px solid skyblue':'',color: (userStorage.activeMenu === "mapManage")?'#007bff':'#6c757d'}} className="nav-link" to={'mapManage/'}><i className="fas fa-map-marker-alt"></i><div className="sb-nav-link-icon"></div>Map Management</NavLink>)
                            :""
                          }
                            {/* <NavLink style={{color:'#6c757d'}} className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
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
                            </div> */}
                        </nav>
                    </div>
                    
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Menu