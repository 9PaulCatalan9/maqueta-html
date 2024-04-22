import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss'

function Formulario() {
  return (
    <Form className='formulario'>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombra tu meta" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" placeholder='Describe tu meta' rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Fecha de vencimiento</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Añadir meta
      </Button>
    </Form>
  );
}

export default Formulario;