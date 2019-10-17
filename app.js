const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("hello world"));
app.get("/test", (req, res) => {
  const file = __dirname + "/testFile.txt";
  res.download(file);
});

app.listen(3000, () => console.log("Listening on port 3000"));
