import React from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import ShowCard from '../Components/ShowCard';
import NavbarPage from './NavbarPage';
import ReducerLogger from '../ReducerLogger';
function HomePage() {
  const product=useSelector((state)=>state.products)
  console.log('from home page ',product)

  let card=product.map(({id,title,image,price,rating})=>{
    return(
      <Col key={id} lg='4' md='6'>
        <ShowCard
        productId={id}
        title={title}
        image={image}
        price={price}
        rating={rating.rate}
        />
      </Col>
    )
  })
  
  return (
   <>
   <NavbarPage/>
   <h1>this is home page </h1>
   <Container>
    <Row>
      {card}
    </Row>
   </Container>
   <ReducerLogger/>
   </>
  )
}

export default HomePage