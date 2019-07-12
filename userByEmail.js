const users = require('./users')

// Return one user object based on an email we give the function
function returnByEmail(email) {
  return users.filter(u => u.email === email)[0]
}

module.exports = returnByEmail