import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { cambiarOpcion } from '../../reducers/opcionSlice';
import './Menu.scss';

function Menu() {
  const miLogo = './favicon.ico';
  const op = useSelector((state) => state.opcion.value);
  const dispatch = useDispatch();

  const changeOpcionFunction = (e, opcion) => {
    e.preventDefault();
    if(op!==opcion){
    dispatch(cambiarOpcion(opcion));
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={miLogo} className='logo' alt="logo de aplicación" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={(e) => changeOpcionFunction(e, "tareas")}>Tareas</Nav.Link>
            <Nav.Link href="#link" onClick={(e) => changeOpcionFunction(e, "metas")}>Metas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;