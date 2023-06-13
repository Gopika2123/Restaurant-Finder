import React, { useEffect } from 'react'
import { useState } from 'react'
import Restcard from './Restcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restlist() {
    const[Allrestaurants,setAllrestaurants]=useState([])

    //function to call api to get data from restaurant.json
     const getRestaurants=async()=>{
        await fetch('./restaurants.json')
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

  return (
    <Row>
        {
            
            Allrestaurants.map((item)=>(
                <Restcard restaurant={item}/>
                // <h1>{item.name}</h1>
            ))

           
        }
    </Row>
  )
}

export default Restlist