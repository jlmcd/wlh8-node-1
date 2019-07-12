const users = require('./users')

module.exports = {
  returnAllUsers(req, res, next) {
    res.status(200).send(users)
  },
  oneUser(req, res, next) {
    // console.log(req.params)
    const {id} = req.params
    const user = users.filter(user => user.id === +id)[0]
    res.status(200).send(user)
  },
  returnByEmail(req, res, next) {
    // console.log(req.query)
    const {email} = req.query
    const user = users.filter(user => user.email === email)[0]
    res.status(200).send(user)
  },
  returnGMail(req, res, next) {
    const {provider} = req.params
    const usersArr = users.filter(user => user.email.includes(provider))
    res.status(200).send(usersArr)
  }
}