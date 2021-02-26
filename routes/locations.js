let locationsRouter = require("express").Router();
const database = require("../database/crudrepository.js");

locationsRouter.get("/", async (req, res) => {
  //   res.json(database.getLocations());
  let locations = await database.getLocations();
  res.send(locations);
});

locationsRouter.get("/:id([0-9]+)", async (req, res) => {
  let location = await database.getLocation(Number(req.params.id));
  if (location) res.json(location);
  else res.status(404).send();
});

locationsRouter.delete("/:id([0-9]+)", async (req, res) => {
  let locations = await database.deleteLocation(req.params.id);
  if (locations) res.json(locations);
  else res.status(404).send();
});

locationsRouter.post("/", async (req, res) => {
  let loc = await database.addLocation(req.body);
  if (loc) res.json(loc);
});

locationsRouter.get("/:p", (req, res) => {
  req.params.p === "pretty"
    ? res.send(JSON.stringify(database, null, 4))
    : res.json(database);
});

module.exports = locationsRouter;
