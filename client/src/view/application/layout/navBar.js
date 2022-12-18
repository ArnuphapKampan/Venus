import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../../../reducer/userReducer';
const NavBar = () => {
    const dispatch = useDispatch();
    const { userStorage } = useSelector((state) => ({ ...state }))
    const user = userStorage.user;
    const image = (user.image)?user.image:"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg";
    
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
   
    const handleTrigger = () => 
    {
        if(!isOpen){
            document.body.className = 'sb-sidenav-toggled'
        }else{
            document.body.className = ''
        }
        setIsOpen(!isOpen);
    }

    const handleLogout = () => {
        dispatch(logout())
        navigate("/");
    }
    
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand" to="" align="center">{ (user.role)?user.role.toUpperCase():"" }</Link>
        <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" onClick={handleTrigger}><i className="fas fa-bars"></i></button>
    
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            {/* <div className="input-group">
                <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                </div>
            </div> */}
        </form>
    
        <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" id="userDropdown" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={ image} width="40" height="40" className="rounded-circle" alt="" />
            </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <Link className="dropdown-item" to={`profile/${user.id}`}>Profile</Link>
                    <Link className="dropdown-item" to="#">Activity Log</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/" onClick={ handleLogout }>Logout</Link>
                </div>
            </li>
        </ul>

       
      </nav>
  )
}

export default NavBar