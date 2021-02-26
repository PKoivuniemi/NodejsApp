const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

let counter = 0;
let db = [
  { id: counter++, latitude: 60, longitude: 70 },
  { id: counter++, latitude: 40, longitude: 80 },
];

const DatabaseFunctions = {
  getLocations: () => {
    return new Promise((resolve, reject) => {
      connection.query("select * from locations", (err, locations) => {
        if (err) throw err;
        resolve(locations);
      });
    });
  },
  getLocation: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `select * from locations where id = ${id}`,
        (err, location) => {
          if (err) reject(err);
          else resolve(location);
        }
      );
    });
  },
  deleteLocation: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `delete from locations where id = ${id}`,
        (err, location) => {
          if (err) reject(err);
          else resolve(location);
        }
      );
    });
  },
  addLocation: (loc) => {
    let newLoc = {
      latitude: Number(loc.latitude),
      longitude: Number(loc.longitude),
    };
    return new Promise((resolve, reject) => {
      connection.query(
        `Insert into locations (latitude, longitude)
          values (${newLoc.latitude}, ${newLoc.longitude})`,
        (err, loc) => {
          if (err) reject(err);
          else resolve(loc);
        }
      );
    });
  },
};
module.exports = DatabaseFunctions;
