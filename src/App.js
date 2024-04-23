import './App.scss'
import Menu from './Componentes/Menu/Menu'
import Formulario from './Componentes/Formulario/Formulario'
import Carta from './Componentes/Carta/Carta'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
export function App(props) {

  return (
    <div className='App'>
    <Menu></Menu>
    <Container>
   <Row>  <Col><Formulario></Formulario></Col>
   <Col className="columna-dos">
     <Carta></Carta>
     <Carta></Carta>
     <Carta></Carta>
     <Carta></Carta>
     <Carta></Carta>
     </Col>
</Row>
</Container>
   </div>
  );
}
export default App

