var mysql      = require('./node_modules/mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database:'gestrionCommande'
});

connection.connect();

