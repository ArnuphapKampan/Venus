import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../navbar/navbar'
import Header from '../header/header'
import Content from './content/content'
import Footer from '../footer/footerContent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link as Smooths } from 'react-scroll';
function Home() {
    const token = localStorage.token;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //active first
    useEffect(() => {
        if(token){
            navigate("application/");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch]);
  return (
      <>
          <Navbar/>
          <Header/>
          <Content/>
          <Footer/>
          <div className="up" >
              <Smooths to="top"><FontAwesomeIcon icon={faChevronCircleUp} /> </Smooths>
          </div>
      </>
  );
}

export default Home;
