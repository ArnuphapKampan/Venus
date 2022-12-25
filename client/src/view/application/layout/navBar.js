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
    <nav className="shadow-none sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link className="shadow-none navbar-brand" to="" align="center">{ (user.role)?user.role.toUpperCase():"" }</Link>
        <button className="shadow-none btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" onClick={handleTrigger}><i className="shadow-none fas fa-bars"></i></button>
    
        <form className="shadow-none d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            {/* <div className="shadow-none input-group">
                <input className="shadow-none form-control shadow-none" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="shadow-none input-group-append">
                    <button className="shadow-none btn btn-primary" type="button"><i className="shadow-none fas fa-search"></i></button>
                </div>
            </div> */}
        </form>
    
        <ul className="shadow-none navbar-nav ml-auto ml-md-0">
            <li className="shadow-none nav-item dropdown">
            <Link className="shadow-none nav-link dropdown-toggle" id="userDropdown" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={ image} width="40" height="40" className="shadow-none rounded-circle" alt="" />
            </Link>
                <div className="shadow-none dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <Link className="shadow-none dropdown-item" to={`profile/${user.id}`}>Profile</Link>
                    <Link className="shadow-none dropdown-item" to="#">Activity Log</Link>
                    <div className="shadow-none dropdown-divider"></div>
                    <Link className="shadow-none dropdown-item" to="/" onClick={ handleLogout }>Logout</Link>
                </div>
            </li>
        </ul>

       
      </nav>
  )
}

export default NavBar