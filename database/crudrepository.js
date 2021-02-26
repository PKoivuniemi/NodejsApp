let counter = 0;
let db = [
  { id: counter++, latitude: 60, longitude: 70 },
  { id: counter++, latitude: 40, longitude: 80 },
];

const DatabaseFunctions = {
  getLocations: () => {
    return db;
  },
  getLocation: (id) => {
    return db.find((item) => item.id === id);
  },
  deleteLocation: (id) => {
    let newDb = db.filter((item) => item.id != id);
    db = newDb;
    return db;
  },
  addLocation: (loc) => {
    let newLoc = {
      id: counter++,
      latitude: Number(loc.latitude),
      longitude: Number(loc.longitude),
    };
    return db.push(newLoc) ? true : false;
  },
};
module.exports = DatabaseFunctions;
