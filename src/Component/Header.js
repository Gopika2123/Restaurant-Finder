import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div><Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/6004/6004138.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        Cafe the Bale
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header