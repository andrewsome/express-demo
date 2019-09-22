const express = require("express");
const mw = require("./middleware.js");
const app = express();

app.use(mw());

app.get("/", (req, res) => {
  let responseMessage =
    "/carsales /carsales/car /mecca /mecca/product /fun/yourname/yourage ";
  res.send(`${responseMessage}`);
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
