const connection = require("../database/connectDB");

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS order (id INT AUTO_INCREMENT PRIMARY KEY,email VARCHAR(255), orderDate DATE, statusBuy BOOLEAN, submit BOOLEAN)";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table order created");
  });
});
