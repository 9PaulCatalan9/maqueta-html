import './App.scss'
import Menu from './Componentes/Menu/Menu'
import Formulario from './Componentes/Formulario/Formulario'
import Carta from './Componentes/Carta/Carta'
import AddBtn from './Componentes/AddBtn/AddBtn'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
//acceder al estado directamente
import { useSelector } from 'react-redux'
export function App(props) {
      const todos=useSelector((state)=>state.todos.value)



  return (
    <div className='App'>
    <Menu></Menu>
    <Container>
   <Row>  <Col xs={0} sm={0} className='d-none d-sm-block d-sm-none d-md-block'><Formulario></Formulario></Col>
   <Col xs={0} sm={0}>
    <Row className='d-md-none'>
      <div className='bg-transparent overlapping-div'>
        <AddBtn className="float-left"></AddBtn>
      </div>
    </Row>
    <Row>
      <div  className='scrolling'>

        {todos.map((tarea)=>(

        <Carta nombre={tarea.nombre} descripcion={tarea.descripcion} fechaEntrega={tarea.fechaEntrega}></Carta>
        
        ))
        }
     </div>
    </Row>
    </Col>
</Row>
</Container>
   </div>
  );
}
export default App

