import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import products from './data/products.js'
import users from './data/users.js'
import User from './model/userModel.js'
import Product from './model/productModel.js'
import Order from './model/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)
    const admin = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: admin }
    })
    await Product.insertMany(sampleProducts)
    console.log('Database seeding successful'.green.inverse)
  } catch ({ message }) {
    console.error(`Error: ${message}`.red.underline)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed!'.red.inverse)
  } catch ({ message }) {
    console.error(`Error: ${message}`.red.underline)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
