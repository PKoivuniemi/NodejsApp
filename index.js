const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.send("wow");
});

app.get("/api/locations/", (req, res) => {
  res.json(database);
});

app.get("/api/locations/pretty", (req, res) => {
  res.send(JSON.stringify(database, null, 4));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
