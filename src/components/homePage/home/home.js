import '../../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../navbar/navbar'
import Header from '../header/header'
import Content from './content/content'
import Footer from '../footer/footerContent'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
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
