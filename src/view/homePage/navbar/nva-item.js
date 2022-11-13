import '../../css/navbar.css';
import logo from '../../../logo.svg';
import { Link } from 'react-router-dom'
function NaveItems(){
    return(
        <div className="nav-items-me">
            <div className="logo-me"><img src={logo}  alt="logo" /></div>
            <ul>
                <li>Customer</li>
                <li>Building</li>
                <li><a href="#content">Gallory</a></li>
                <li><a href="#footer">Contact Us</a></li>
                <li><Link to={'/sign-in'}>Sign in</Link></li>
                
            </ul>
            <div className="logo-me"><img src={logo}  alt="logo" /></div>
        </div>
    );
}

export default NaveItems;