import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../model/productModel.js'
const router = express.Router()

/**
 * Fetch all products
 * @route GET /api/products
 * @access Public
 */
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

/**
 * Fetch all products
 * @route GET /api/products/id
 * @access Public
 */
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      return res.json(product)
    }

    res.status(404).json({ message: 'Product not found' })
  })
)
export default router
