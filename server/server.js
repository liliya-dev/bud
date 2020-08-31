const express = require('express');
const jwt = require('jsonwebtoken');
const verifyTokenMiddleWare = require('./middleware');
const PORT = 3002;
const bodyParser = require('body-parser')
const app = express();
const bcrypt = require('bcryptjs');
const mysqlConnection = require('./mySqlConnection');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.get('/check', verifyTokenMiddleWare, async function (req, res) {
  jwt.verify(req.token, 'secretkey', (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      mysqlConnection.query(`SELECT * from cart WHERE userId='${data.user.id}';`, (err, cart) => {
        if(err) {
          console.log(err);
        }
        else {
          console.log('')
        }
      })
    }
  })
});

app.get('/devices', function (req, res) {

  mysqlConnection.query(`SELECT * from phones_main;`, (err, devices) => {
    if (err) {
      console.log(err);
    }
    else {
      return res.json(devices)
    }
  })

});

app.post('/enter', function (req, res) {
  const { mail, password } = req.body;
  mysqlConnection.query(`SELECT * from users WHERE mail='${mail}';`, async (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (user.length === 0) {
        return res.json({ isUserInTheBase: false })
      } else {
        let isCorrectPassword = await bcrypt.compare(password, user[0].password);
        if (isCorrectPassword) {
          jwt.sign({ user: user[0] }, 'secretkey', (err, token) => {
            return res.json({
              token,
              userName: user[0].userName
            })
          })
        } else {
          return res.json({
            isUserInTheBase: false
          })
        }
      }
    }
  })
});

jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyOSwidXNlck5hbWUiOiIxMTEiLCJwYXNzd29yZCI6IiQyYSQxMCRMTzZMdkVYcGZ3bDJ0T0lORXJobzZ1dmtFaTNXYjZZT2MublFKWmk2M3VHVlVXTU5XSTBZaSIsIm1haWwiOiIyQCJ9LCJpYXQiOjE1OTg2MDQwMDh9.18ZKj9qchhiTv_Fx6x4MOYOEb1vjwPvseOsOnImU530', 'secretkey', (err, data) => {
  console.log(err, data, '66666')
})

app.post('/logout', verifyTokenMiddleWare, async function (req, res) {
  res.sendStatus(200);
  jwt.verify(req.token, 'secretkey', (err, data) => {
    req.token = '';
    console.log(data)
  })
  console.log(req.token, 'tolen')
});

app.post('/register', async function (req, res) {
  const { name, mail, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  mysqlConnection.query(`SELECT * from users WHERE mail='${mail}';`, (err, rows, fields) => {
    if (err) {
      console.log(err)
    }
    else {
      if (!rows.length) {
        mysqlConnection.query(`INSERT INTO users (userName, mail, password) VALUES ('${name}', '${mail}', '${hashPassword}')`, 
        (err, rows, fields) => {
          if (err) {
            console.log(err)
          } else {
            return res.json({ isRegistrationDone: true, userName: name });
          }
        })
      } else {
        return res.json({ isRegistrationDone: false });
      }
    } 
  })
});
app.listen(PORT, () => console.log('server is working now'));


