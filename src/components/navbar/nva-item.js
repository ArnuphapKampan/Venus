import '../css/navbar.css';
import logo from '../../logo.svg';
function naveItems(){
    return(
        <div className="nav-items-me">
            <div className="logo-me"><img src={logo}  alt="logo" /></div>
            <ul>
                <li>Customer</li>
                <li>Building</li>
                <li><a href="#content">Gallory</a></li>
                <li><a href="#footer">Contact Us</a></li>
                <li>Sign in</li>
            </ul>
            <div className="logo-me"><img src={logo}  alt="logo" /></div>
        </div>
    );
}

export default naveItems;