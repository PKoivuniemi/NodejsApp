const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

connection.query("select * from locations", (err, locations) => {
  if (err) throw err;

  locations.forEach((loc) => {
    console.log(loc);
  });
});

// connection.query(
//   "insert into locations (latitude, longitude) values (10, 10)",
//   (err, location) => {
//     if (err) throw err;
//     console.log(location);
//   }
// );

connection.end();
