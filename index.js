const express = require("express");
let locationsRouter = require("./routes/locations.js");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/api/locations", locationsRouter);
app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.send("wow");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
