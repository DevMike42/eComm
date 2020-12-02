import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Rick Sanchez',
    email: 'picklerick@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Morty Smith',
    email: 'ohgeez@example.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users