const express = require("express");
const app = express();
app.get("", (req, res) => {
  res.send("/carsales /mecca /mecca/product /fun/yourname/yourage ");
});
app.get("/carsales", (req, res) => {
  res.send("carsales");
});
app.get("/carsales/:car", (req, res) => {
  res.send(`carsales ${req.params["car"]}`);
});
app.get("/mecca", (req, res) => {
  res.send("mecca");
});
app.get("/mecca/:product", (req, res) => {
  res.send(`mecca ${req.params["product"]}`);
});
app.get("/fun/:name/:age", (req, res) => {
  res.send(`${req.params.name} : ${req.params.age}`);
});
app.listen(5777);
console.log("server is running on port 5777...");

// my quest coming part is not working
