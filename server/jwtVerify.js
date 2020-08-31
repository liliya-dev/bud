
const jwt = require('jsonwebtoken');

module.exports = function jwtVerify(token) {
  console.log('hdhdh')
  jwt.verify(token, 'secretkey', (err, data) => {
    if (err) {
      return err
    } else {
      console.log(data, 'data')
      return data.user.id
    }
  })
}