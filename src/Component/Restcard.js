import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Restcard({restaurant}) {
    console.log(restaurant);
  return (
    <Col sm={12} md={6} lg={4} xl={3}> 
    <Link to={`Viewrest/${restaurant.id}`} style={{textDecoration:"none",color:"white"}}>
     <Card  className='p-3 m-2'>
    <Card.Img className='p-3' variant="top" src={restaurant.photograph} />
    <Card.Body>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Text>
        {restaurant.neighborhood}
      </Card.Text>
      <Card.Text>
        {restaurant.address}
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
  </Link>
  </Col>
  )
}

export default Restcard