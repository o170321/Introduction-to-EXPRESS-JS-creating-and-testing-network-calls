const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("Hello World!");
  console.log(request);
});

app.listen(3000);
