import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Content from './components/content/content'
import Footer from './components/footer/footerContent'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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

export default App;
