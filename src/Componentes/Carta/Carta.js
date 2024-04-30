import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Carta.scss'
function Carta(props) {
  return (
    <Card id="id-card" style={{ width: '30rem' }}>
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
        <Button variant="primary">Remover meta</Button>
      </Card.Body>
    </Card>
  );
}

export default Carta;