
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Navigation = () => {


  return (
    <Navbar className='bgColor' expand="lg" >
      <Container fluid>
        <Link to='/'>
          <Navbar.Brand as="div"> <img src='../../logo.png' className='logo' alt=
            'logo' /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='justify-content-end' id="navbarScroll">
          <Nav className="my-2 my-lg-0">
            <Link to="/">
              <Nav.Link as='div'>Home</Nav.Link>
            </Link>
            <Link to="/instructions">
              <Nav.Link as="div">Instructions</Nav.Link>
            </Link>
            <Link to="https://github.com/DavidDaganzo">
              <Nav.Link as="div">GitHub</Nav.Link>
            </Link>
            <Link to="https://www.linkedin.com/in/david-daganzo-fraile/">
              <Nav.Link as="div">Linkedin</Nav.Link>
            </Link>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
export default Navigation