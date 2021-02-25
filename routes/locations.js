let locationsRouter = require("express").Router();

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

locationsRouter.get("/", (req, res, next) => {
  res.json(database);
  next();
});

locationsRouter.get("/:p", (req, res, next) => {
  req.params.p === "pretty"
    ? res.send(JSON.stringify(database, null, 4))
    : res.json(database);
  next();
});

module.exports = locationsRouter;
