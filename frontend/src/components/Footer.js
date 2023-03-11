import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; E-shop
            <Col className='text-center py-3'>
              Designed and Developed by:
              <Col className='text-center py-1'>
                <a href='https://kshitijadhikaree.com.np/'>Kshitij Adhikaree</a>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
