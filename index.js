// // import users from './users' // new way - doesn't work in node.
const users = require('./users')  // old way - we use this syntax in node.
// // const returnAllUsers = require('./allUsers')
// // const oneUser = require('./userById')
// // const returnByEmail = require('./userByEmail')
// // const returnGMail = require('./gmails')
// const userCtrl = require('./usersController')

// // console.log('ALL USERS!!!!', userCtrl.returnAllUsers())
// console.log('ONE EMAIL!!!!', userCtrl.returnByEmail('lcollishaw2@google.com'))
// console.log('ONE ID!!!!!!!', userCtrl.oneUser(4))
// console.log('ALL GMAIL!!!!', userCtrl.returnGMail())

// WRITE MY SERVER:
const express = require('express')
const app = express()
const PORT = 1337
const usersCtrl = require('./usersController')

app.use(express.json())

app.get('/api/users', usersCtrl.returnAllUsers)
app.get('/api/users/:id', usersCtrl.oneUser)
app.get('/api/user', usersCtrl.returnByEmail)
app.get('/api/user/:provider', usersCtrl.returnGMail)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))