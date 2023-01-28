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
              <a href="#top"><FontAwesomeIcon icon={faChevronCircleUp} /> </a>
          </div>
      </>
  );
}

export default Home;
