// const express = require('express');
// const app = express();
// const bcrypt = require('bcryptjs');
// const mysqlConnection = require('./mySqlConnection');
// const jwt = require('jsonwebtoken');

// module.exports = app.post('/enter', function (req, res) {
//   const { mail, password } = req.body;
//   mysqlConnection.query(`SELECT * from users WHERE mail='${mail}';`, async (err, user) => {
//     if (err) {
//       console.log(err);
//     } else {
//       if (user.length === 0) {
//         return res.json({ isUserInTheBase: false })
//       } else {
//         let isCorrectPassword = await bcrypt.compare(password, user[0].password);
//         console.log(isCorrectPassword)
//         if (isCorrectPassword) {
//           jwt.sign({ user: user[0] }, 'secretkey', (err, token) => {
//             return res.json({
//               token,
//               userName: user[0].userName
//             })
//           })
//         } 
//       }
//     }
//   })
// });