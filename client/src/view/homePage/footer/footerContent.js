import '../../css/footerContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import ReCAPTCHA from "react-google-recaptcha"
import { toast } from 'react-toastify';
import React, { useState, useRef } from 'react';
import axios from 'axios';
function Footer(){
    const token = useRef(null);
    const [verified,setVerified] = useState(false);
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        telephone:'',
        description:'',
    });
  
    const { name, email, telephone, description } = formData;
    const onChange = (e) =>{
      setFormData({ ...formData,[e.target.name]:e.target.value });
    }




    const reCAPTCHA = (token) => {
        if(!token){
            setVerified(false);
            toast.warning("Time out verify reCAPTCHA");
        }else{
            setVerified(true);
        }
    }

    const sendMessage = (e) =>{
        e.preventDefault();
        setVerified(false);
        const idLoading = toast.loading("Sending ...")

        let message = {
            name:name,
            email:email,
            telephone:telephone,
            description:description,
        }

        axios.post(process.env.REACT_APP_API+'/send-message',
        { 
            message: message
        }
        ).then(res => {
            setTimeout(function(){
                toast.update(idLoading, {
                    render: 'Your message has been sent. ✅✅✅',
                    type: toast.TYPE.SUCCESS,
                    autoClose: 5000,
                    closeButton: true,
                    isLoading: false
                 });
                 token.current.reset();
                 e.target.reset();
            }, 1000);
        }).catch(err => {
            console.log(err.response.data.msg)
        })



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
                <form onSubmit={ e => sendMessage(e)}>
                <h1>Contact Us</h1>
                <div className="footer-right-item">
                    <label>Name:</label><input type="text" name="name" autoComplete="off" required onChange={ e => onChange(e) }></input><br/>
                </div>   
                <div className="footer-right-item">
                    <label>Email:</label><input type="email" name="email" autoComplete="off" required onChange={ e => onChange(e) }></input><br/>
                </div>
                <div className="footer-right-item">
                    <label>Telephone:</label><input type="text" name="telephone" autoComplete="off" required onChange={ e => onChange(e) }></input><br/>
                </div>
                <div className="footer-right-item">
                    <label>Description:</label><textarea type="text" rows={5} cols={5} name="description" autoComplete="off" required onChange={ e => onChange(e) }/><br/>
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
                 {verified && <button className="button-send" type="submit" disabled={!verified} ><FontAwesomeIcon icon={faPaperPlane} /> Send</button> }
                 </div>
                 </form>
            </div>
        </div>
    );
}

export default Footer;