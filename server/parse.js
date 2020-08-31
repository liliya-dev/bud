const mysqlConnection = require('./mySqlConnection');
function fet() {
  console.log(1111)
  try {
    
    const data = require('./data');
    const devices = data.data;
    
    console.log(data.data)
      for (const device of devices) {
          
      const {
        id, phoneId, name, priceDiscount, capacity, ram, image, category,
        itemId, priceRegular, color, year, screen
      } = device;
        console.log(id)
      if(id) {
        mysqlConnection.query(
          `INSERT INTO phones_main (name, deviceID, category, phoneID, itemId, priceRegular, priceDiscount, capacity, ram, color, image, year, screen) VALUES ('${name}', '${id}', '${category}', '${phoneId}', '${itemId}', '${priceRegular}','${priceDiscount}', '${capacity}', '${ram}', '${color}', '${image}', '${year}', '${screen}')`, 
            (err, rows) => {
              if (err) {
                console.log(err)
              } else {
                console.log(rows)
              }
            })
          }
      }
      // console.log('sql started', devices[0])
      // mysqlConnection.query(`SELECT * from phones_main;`, (err, rows) => {console.log(rows)});
      // mysqlConnection.query(`INSERT INTO phones_main (name) VALUES ('${name}')`, 
      // (err, rows, fields) => {
      //   if (err) {
      //     console.log(err)
      //   } else {
      //     console.log(name)
      //   }
      // })
     
      
    }
  // }
  catch(e) {
    console.log(e, 'error here')
  }

  // for ()
  // const {
  //   id, phoneId, name, priceDiscount, capacity, ram, image, category,
  //   itemId, priceRegular, screen, color, year
  // } = data.data
  // mysqlConnection.query(
  //   `INSERT INTO users (name, deviceId, category, phoneID, itemId, priceRegular, 
  //     priceDiscount, screen, capacity, color, ram, year, image) VALUES ('
  //   ${}', '${mail}', '${hashPassword}')`, 
  // (err, rows, fields) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     return res.json({ isRegistrationDone: true, userName: name });
  //   }
  // })

  // const res = await fetch('https://mate.academy/students-api/phones/apple-iphone-xr-64gb-yellow')
  // const dat = await res.json();
}

fet()