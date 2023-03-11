import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import axios from 'axios'

const ProductScreen = () => {
  const { id } = useParams()
  // const product = products.find((p) => p._id === id)

  const [product, setProduct] = useState({})
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [])
  
  if (!product) {
    return <h1>Product not found</h1>
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews}`}
                reviews
              />
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
          <ListGroup.Item>Description : ${product.description}</ListGroup.Item>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price :</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                  
                    <strong>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={(product.countInStock = 0)}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
