import React from 'react'
import { useParams } from 'react-router-dom'
import  { useEffect } from 'react'
import { useState } from 'react';
import {Row} from 'react-bootstrap';
import  {Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';



function Viewrest() {

const urlparams=useParams()
// console.log(urlparams);
console.log(urlparams.id);

const[Allrestaurants,setAllrestaurants]=useState([])

    //function to call api to get data from restaurant.json
     const getRestaurants=async()=>{
        await fetch('/restaurants.json')
        .then((data)=>{
            data.json()
            .then((result)=>{
            // console.log(result);
            setAllrestaurants(result.restaurants)
        })

        })
     }

     console.log(Allrestaurants);

useEffect(()=>{
    getRestaurants()
},[])

const Viewrest=Allrestaurants.find(item=>item.id==urlparams.id)
console.log(Viewrest);

return (
    <div>
    {
      Viewrest?(
        <Row className='m-3'>
          <Col className='ms-5' md={4}>
          <Image src={Viewrest.photograph} fluid/>
          </Col>
          <Col md={5}>
          <ListGroup>
      <ListGroup.Item><h1>{Viewrest.name}</h1></ListGroup.Item>
      <ListGroup.Item><h4>{Viewrest.cuisine_type}</h4></ListGroup.Item>
      <ListGroup.Item><h3>{Viewrest.neighborhood}</h3></ListGroup.Item>
      <ListGroup.Item><h3>{Viewrest.address}</h3></ListGroup.Item>
      <ListGroup.Item><Restop operate={Viewrest.operating_hours}/></ListGroup.Item>
      <Restreview review={Viewrest.reviews}/>

      </ListGroup>
          </Col>
        </Row>
      ):'null'

    }

    </div>
  )
}

export default Viewrest