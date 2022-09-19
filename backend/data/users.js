import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@test.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'johndoe@test.com',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@test.com',
    password: bcrypt.hashSync('1234', 10),
  },
]

export default users
