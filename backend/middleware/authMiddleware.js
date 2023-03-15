import jwt from 'jsonwebtoken'
import asyncHandler from 'express'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      console.log('token found')
    } catch (error) {}
  }

  if (!token) {
    res.send(401)
    throw new Error('Not authorized, token not found')
  }
})

export { protect }
