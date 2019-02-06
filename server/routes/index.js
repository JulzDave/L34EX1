var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  connectionLimit: 10
});

router.post('/newguest', async (req, res, nest) => {
res1 = await pool.query(`
INSERT INTO hotel.guests (name, start_date, end_date, room) 
VALUES('${req.body.name}','${req.body.start_date}','${req.body.end_date}', ${req.body.room});`)

res2 = await pool.query(`
        UPDATE hotel.rooms
        SET guest_name = '${req.body.name}' 
        WHERE id = ${req.body.room};`)

        res.json({ insert: res1, update: res2 })
});

router.post('/allrooms', async (req, res, nest) => {
  res22 = await pool.query(`
SELECT * FROM hotel.rooms
`)
res.json({res22})

});


// router.get('/createdb', async function(req, res, next) {
//   try
//   {
//  await pool.query(`CREATE DATABASE hotel`)
//  await pool.query(`
//    CREATE TABLE hotel.guests (
//     id INT NOT NULL AUTO_INCREMENT,
//     name VARCHAR(20) NOT NULL,
//     start_date INT NOT NULL,
//     end_date INT NOT NULL,
//     PRIMARY KEY (id)
//     )`);
//  await pool.query(`
//    CREATE TABLE hotel.rooms (
//     id INT NOT NULL AUTO_INCREMENT,
//     price INT NOT NULL,
//     guest_name VARCHAR(20),
//     PRIMARY KEY (id)
//     )`);
//     res.send('<h3>DB and Table were created!!!</h3>');
//   }
// catch(err)
// {
//   console.log(err)
// } 
// });





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
