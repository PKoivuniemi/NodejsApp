const express = require("express");
const { post } = require("./routes/locations.js");
let locationsRouter = require("./routes/locations.js");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

const validateLocation = (loc) => {
  let valid = true;
  if (!("latitude" in loc)) valid = false;
  else if (typeof loc.latitude != "number") valid = false;
  else if (loc.latitude > 90 || loc.latitude < -90) valid = false;

  if (!("longitude" in loc)) valid = false;
  else if (typeof loc.longitude != "number") valid = false;
  else if (loc.longitude > 180 || loc.longitude < -180) valid = false;

  return valid;
};

app.use("/api/locations/", (req, res, next) => {
  console.log(req.method);
  if (req.method === "POST") {
    if (validateLocation(req.body)) next();
    else res.send(400).end();
  } else next();
});

app.use("/api/locations", locationsRouter);
app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.send("wow");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
