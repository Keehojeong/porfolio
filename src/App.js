import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import PortfolioDetail from './components/portfolio/PortfolioDetail';
import Faq from './components/faq/Faq';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container style={{marginLeft: '2%'}}>
          <Navbar.Brand className="navbar" style={{color: 'white', cursor: 'pointer', fontSize: '30px'}} onClick={()=>{navigate('/')}}>WHO?</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/portfolio')}}>Portfolio</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/contact')}}>Contact</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/faq')}}>Faq</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path="/portfolio/detail/:id" element={<PortfolioDetail/>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
