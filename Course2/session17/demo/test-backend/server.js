const express = require("express");
var cors = require("cors");

const App = express();
App.use(cors());
App.get("/users", (req, res) => {
  //
  console.log("Nje client (browser) po kerkon userat");

  var usersFromDataBase = [{ emer: "klajdi" }, { emer: "andi" }, { emer: "deralddddd" }];

  res.json({
    users: usersFromDataBase,
  });
});

App.post("/", () => {});

App.put("/", () => {});

App.delete("/", () => {});

App.listen(3036, () => {
  console.log("serveri nisi me sukses");
});
