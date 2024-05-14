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
import { useDispatch, useSelector } from 'react-redux'
/*metodos hubs que se lanzan cuando existe o pasa alguna accion
se ejecuta cada vez que se renderiza un componente
*/
import { useEffect } from 'react'
import {
  initAddTodo,
} from "./reducers/todoSlice"


export function App(props) {

      const opcion=useSelector((state)=>state.opcion.value)
      const todos=useSelector((state)=>state.todos.value)
      const meta=useSelector((state)=>state.meta.value)
    //peticion inicial
    const dispatch=useDispatch();
    function initFetch(){
      fetch("http://localhost:3001/tasks/getTasks",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"9MyAPIkey9"
        }
    }).then((response)=>
      response.json()
    ).then((response)=>{
      response.map((task)=>{
        dispatch(initAddTodo(task));
      })
    }).catch(err=>{
        console.log(err);
    })
    }
  //codigo para llenar las tarjetas dependiendo del estado
  let contenido=null
  if(opcion==="tareas"){

      contenido=todos.map((tarea)=>(

        <Carta
            key={tarea.id}
            id={tarea.id}
            nombre={tarea.nombre}
            descripcion={tarea.descripcion}
            fechaEntrega={tarea.fechaEntrega}
        />
      ))
  }else if(opcion==="metas"){
      contenido=meta.map((meta)=>(
        <Carta
            key={meta.id}
            id={meta.id}
            nombre={meta.nombre}
            descripcion={meta.descripcion}
            fechaEntrega={meta.fechaEntrega}
        />
    ))
  }

useEffect(()=>{
  initFetch();
},[])
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
      {contenido}
  
     </div>
    </Row>
    </Col>
</Row>
</Container>
   </div>
  );
}
export default App