// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({

//   if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host:'yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user:'x6uiiynrdjwyd87h',
//     password:'vopt415vuxknd7if',
//     database:'szf6czp8fqw41tw2'
//   });
// };

var connection = null;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //here rather than using heroku credentials, you want to use your local
    connection = mysql.createConnection({
      // port: 3306,
      // host: "localhost",
      // user: "root",
      // password: "root",
      // database: "burger_db"

      //Heroku JAWS DB
      port: 3306,
      host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "x6uiiynrdjwyd87h",
      password: "vopt415vuxknd7if",
      database: "szf6czp8fqw41tw2"
      
  });
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;