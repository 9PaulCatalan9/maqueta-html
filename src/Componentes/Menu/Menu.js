import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { Navbar, Image } from 'react-bootstrap';
import './Menu.scss'

function Menu() {

  const miLogo='./favicon.ico'
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#home">
         <Image src={miLogo} className='logo'  alt="logo de applicacion" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Tareas</Nav.Link>
            <Nav.Link href="#link">Metas</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;