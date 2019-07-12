const users = require('./users')

// Return all users with 'google.com' email accounts
function returnGMail() {
  return users.filter(user => {
    return user.email.includes('@google')
  })
}

module.exports = returnGMail