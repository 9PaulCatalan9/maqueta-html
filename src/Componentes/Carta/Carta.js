import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Carta.scss'
import {
  deleteTodo
} from "../../reducers/todoSlice";
import {
  deleteMeta
} from "../../reducers/metasSlice";
import { useSelector, useDispatch } from 'react-redux';
function Carta(props) {
  const opcion= useSelector((state)=>state.opcion.value)
  const dispatch=useDispatch()

  const removerMetaOTarea=(id)=>{
    if(opcion==="tareas"){
      dispatch(deleteTodo(id))
    }else if(opcion==="metas"){
      dispatch(deleteMeta(id))
    }
}
  return (


    <Card id="id-card" style={{ width: '30rem'}}>
      <Card.Body>
        <Card.Title className='fw-bold'>{props.nombre}</Card.Title>
        <Card.Title className='fw-bold'>Descripcion</Card.Title>
        <Card.Text>
        {props.descripcion}
        </Card.Text>
        <Card.Title className='fw-bold'>Fecha de vencimiento</Card.Title>
        <Card.Text className='fst-italic'>
        {props.fechaEntrega}
        </Card.Text>
        <Card.Title></Card.Title>
        { opcion==="tareas"&&
                  <Button variant="primary" onClick={()=>removerMetaOTarea(props.id)}>Remover tarea</Button>
        }
        {
          opcion==="metas"&&
          <Button variant="primary" onClick={()=>removerMetaOTarea(props.id)}>Remover meta</Button>

        }
      </Card.Body>
    </Card>
  );
}

export default Carta;