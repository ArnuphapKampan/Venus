import '../../css/footerContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import ReCAPTCHA from "react-google-recaptcha"
import { toast } from 'react-toastify';
import React, { useState, useRef } from 'react';

function Footer(){
    const token = useRef(null);
    const [verified,setVerified] = useState(false);
    const reCAPTCHA = (token) => {
        if(!token){
            setVerified(false);
            toast.warning("Time out verify reCAPTCHA");
        }else{
            setVerified(true);
        }
    }
    const sendMessage = () =>{
        setVerified(false);
        const idLoading = toast.loading("Sending ...")
        setTimeout(function(){
            toast.update(idLoading, {
                render: 'Your message has been sent.',
                type: toast.TYPE.SUCCESS,
                autoClose: 5000,
                closeButton: true,
                isLoading: false
             });
             token.current.reset();
        }, 3000);
    }
    return(
        <div className="footer-content" id="footer">
            <div className="footer-left">
                <h1>Get In Touch</h1>
                <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                </p>
            </div>
            <div className="footer-address">
                <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} /> 
                    <p>(+66) 921-811-563</p>
                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} /> 
                    <p>venus_info@hotmail.com</p>
                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faPaperPlane} /> 
                    <p>154 Village No.7 Maenaruea Sub-district,<br></br>
                        Phayao District,
                        Phayao Province,
                        56000 </p>
                </div>
            </div>
            <div className="footer-right">
                <h1>Contact Us</h1>
                <div className="footer-right-item">
                    <label>Name:</label><input type="text" name="name"></input><br/>
                </div>   
                <div className="footer-right-item">
                    <label>Email:</label><input type="text" name="email"></input><br/>
                </div>
                <div className="footer-right-item">
                    <label>Telephone:</label><input type="text" name="tel"></input><br/>
                </div>
                <div className="footer-right-item">
                    <label>Description:</label><textarea rows={5} cols={5}/><br/>
                 </div>
                 <div className="footer-right-item mb-2">
                    <ReCAPTCHA style={{width: '100%'}}
                    ref={token}
                    size="normal"
                    sitekey={process.env.REACT_APP_SITE_KEY} 
                    onChange={ (token) => reCAPTCHA(token)}
                    />
                 </div>
                 <div className="footer-right-item send">
                 {verified && <button className="button-send" type="submit" disabled={!verified} onClick={sendMessage} ><FontAwesomeIcon icon={faPaperPlane} /> Send</button> }
                 </div>
            </div>
        </div>
    );
}

export default Footer;