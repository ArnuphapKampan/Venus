import React, { useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';
import { Section,Prop,Article } from "./generic";
import { useDispatch } from 'react-redux'
import { logout } from '../reducer/userReducer';

const LoadingToRedirect = () => {
    const navigate = useNavigate();
    const [count,setCount] = useState(3);
    const dispatch = useDispatch();
    useEffect(() =>{
        const interval =setInterval(() =>{
            setCount((currentCount) => --currentCount);
        },1000);

        count === 0 && navigate("/");
        dispatch(logout())
        return () => clearInterval(interval);
    },[count,navigate,dispatch])
  return (
    <>
    <Section>
        <Article>
            <ReactLoading type={'spinningBubbles'} color="#fff" />
            <br/>
            <Prop>Error Redirect in { count } second</Prop>
        </Article>
    </Section>
    
    </>
  )
}

export default LoadingToRedirect

// blank
// balls
// bars
// bubbles
// cubes
// cylon
// spin
// spinningBubbles
// spokes