let locationsRouter = require("express").Router();
const database = require("../database/crudrepository.js");

locationsRouter.get("/", (req, res) => {
  res.json(database.getLocations());
});

locationsRouter.get("/:id([0-9]+)", (req, res) => {
  let location = database.getLocation(Number(req.params.id));
  if (location) res.json(location);
  else res.status(404).send();
});

locationsRouter.delete("/:id([0-9]+)", (req, res) => {
  let locations = database.deleteLocation(req.params.id);
  if (locations) res.json(locations);
  else res.status(404).send();
});

locationsRouter.get("/:p", (req, res) => {
  req.params.p === "pretty"
    ? res.send(JSON.stringify(database, null, 4))
    : res.json(database);
});

module.exports = locationsRouter;
