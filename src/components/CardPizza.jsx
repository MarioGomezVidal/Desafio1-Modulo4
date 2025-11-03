import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function CardPizza(props) {
  return (
    <Card style={{ width: '100%', transition: 'transform 0.3s', cursor: 'pointer' }}
          className="shadow-sm"
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <Card.Img variant="top" style={{height: "230px", objectFit:"cover"}} src={props.imagen}/>
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text className='text-secondary'>{props.desc}</Card.Text>
        <Card.Text className='text-secondary'>{props.loc}</Card.Text>
        <div className="d-flex justify-content-between mt-3">
          <Button variant="primary">Ver más</Button>
          <Button variant="success">Añadir</Button>
        </div>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <div className='precio'>
            <span style={{ textDecoration: 'line-through', color: 'gray' }}>${props.precio1}</span>{' '}
            <span className='text-success h5'>${props.precio2}</span>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardPizza;

