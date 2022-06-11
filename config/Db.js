const mysql = require('mysql');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'gestionCommande'
});

module.exports = connection