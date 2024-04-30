import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss'
import {
  addTodo
} from "../../reducers/todoSlice";
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

function Formulario() {
  //Para acceder al formulario
  const inputRefName=useRef();
  const inputRefDesc=useRef();
  const inputRefFecha=useRef();

  //Funcion para dispatch

  const dispatch=useDispatch();
  const addCarta=(e)=>{
    //Controlar evento para que no acceda al evento por default
    e.preventDefault();
    dispatch(addTodo(
      {
    "nombre":inputRefName.current.value,
    "descripcion":inputRefDesc.current.value,
    "fechaEntrega":inputRefFecha.current.value} ))
  }



  return (
    <Form className='formulario'>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombra tu meta" ref={inputRefName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" placeholder='Describe tu meta' rows={3} ref={inputRefDesc} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Fecha de vencimiento</Form.Label>
        <Form.Control type="date" ref={inputRefFecha}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={addCarta}>
        Añadir tarea
      </Button>
    </Form>
  );
}

export default Formulario;