import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Carta.scss'
function Carta() {
  return (
    <Card id="id-card" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='fw-bold'>Actividad 1 DAW</Card.Title>
        <Card.Title className='fw-bold'>Descripcion</Card.Title>
        <Card.Text>
        Diseñar la maqueta html del diseño proporcionado, exportarlo a
        playcode y  subirlo a un repositorio de github
        </Card.Text>
        <Card.Title className='fw-bold'>Fecha de vencimiento</Card.Title>
        <Card.Text className='fst-italic'>
         22/04/2024
        </Card.Text>
        <Card.Title></Card.Title>
        <Button variant="primary">Remover meta</Button>
      </Card.Body>
    </Card>
  );
}

export default Carta;