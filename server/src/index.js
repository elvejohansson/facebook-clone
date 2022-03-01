const express = require("express");

const app = express();
const port = 9802;

app.use("/", (req, res) => {
  res.send("OK!")
});

app.listen(port, () => {
  console.log(`\nServer listening on port ${port}`);
});