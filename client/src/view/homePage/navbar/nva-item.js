import '../../css/navbar.css';
import logo from '../../../logo.svg';
import { Link } from 'react-router-dom'
import { Link as Smooths } from 'react-scroll';
function NaveItems(){
    return(
        <div className="nav-items-me">
            <div className="logo-me"><img src={logo}  alt="logo" /></div>
            <ul>
                <li>Customer</li>
                <li>Building</li>
                <li><Smooths to="content">Gallory</Smooths></li>
                <li><Smooths to="footer">Contact Us</Smooths></li>
                <li><Link to={'/sign-in'}>Sign in</Link></li>
                
            </ul>
            <div className="logo-me"><img src={logo}  alt="logo" /></div>
        </div>
    );
}

export default NaveItems;