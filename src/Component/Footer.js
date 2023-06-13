import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div> <Card className="text-center">
    {/* <Card.Header>Address</Card.Header> */}
    <Card.Body>
      {/* <Card.Title> KOCHI</Card.Title> */}
      {/* <Card.Text>
      Opp.Cochin Special Economic Zone (CSEZ),
      Seaport-Airport Road, Kakkanad. </Card.Text> */}
    </Card.Body>
    <Card.Footer className="text-muted">Copyright © Cafe the Bale. All Rights Reserved</Card.Footer>
  </Card></div>
  )
}

export default Footer