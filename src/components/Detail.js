import React from 'react'
import { Row,Col, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

export default function Detail(props) {
  const {state} = useLocation()
  return (
    <div>
      <Row>
        <Col>
          <img src={state.image}/>
        </Col>
        <Col>
          <p><strong>{state.title}</strong></p>
          <p>{state.price} $</p>
          <p>{state.category}</p>
          <p>{state.description}</p>
          <Button className='btn btn-primary'>Add to cart</Button>
        </Col>
      </Row>
    </div>
  )
}
