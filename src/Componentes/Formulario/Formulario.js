import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss'
import {
  addTodo
} from "../../reducers/todoSlice";
import {
  addMeta
} from "../../reducers/metasSlice";
import {useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';

function Formulario() {
  const inputRefName = useRef();
  const inputRefDesc = useRef();
  const inputRefFecha = useRef();
  const dispatch = useDispatch();
  const opcion = useSelector((state) => state.opcion.value);


    const generarId=()=>{
      const min = 1000
      const max = 9999
      return Math.floor(Math.random()*(max-min +1))+min
    }
  const addTareaOMeta = (e) => {
    e.preventDefault();
    const tareaOMeta = {
      "id":generarId(),
      "nombre": inputRefName.current.value,
      "descripcion": inputRefDesc.current.value,
      "fechaEntrega": inputRefFecha.current.value,
      "completada":false
    };

    if (opcion === 'tareas') {
      dispatch(addTodo(tareaOMeta)); // Agregar nueva tarea
    } else {
      dispatch(addMeta(tareaOMeta)); // Agregar nueva meta
    }
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
     {opcion==="tareas"&&
     <Button variant='primary' type='submit' onClick={addTareaOMeta}>Nueva tarea</Button>
     }
     {opcion==="metas"&&
     <Button variant='primary' type='submit' onClick={addTareaOMeta}>Nueva meta</Button>
     }
    </Form>
  );
}

export default Formulario;