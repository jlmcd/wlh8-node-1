const users = require('./users')

// Return one user object based on the id we give the function
let oneUser = id => {
  return users.filter(user => (
    user.id === id
  ))[0]
}

module.exports = oneUser