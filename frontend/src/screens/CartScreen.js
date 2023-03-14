import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { Link, useParams, useLocation } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {
  const { id } = useParams()
  const location = useLocation()

  //const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const qty = Number(new URLSearchParams(location.search).get('qty')) || 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

  return <div>CartScreen</div>
}

export default CartScreen
