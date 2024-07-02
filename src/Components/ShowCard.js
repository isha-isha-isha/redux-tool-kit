import React from 'react'
import { Card} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { add_to_cart } from '../Stores/Slices/mycart'

function ShowCard({productId,title,image,price,rating}) {
    const dispatch=useDispatch()
  return (
    <Card style={{height:'300px'}}>
        <Card.Img variant='top' src={image} style={{height:'60%', width:'100%', objectFit:'cover'}} />
        <Card.Body>
            <Card.Title>
                {title}
            </Card.Title>
            <button onClick={()=>dispatch(add_to_cart({productId,title,image,price,rating}))}>add to cart </button>
            
        </Card.Body>
    </Card>
  )
}

export default ShowCard