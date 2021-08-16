const express = require("express");
const app = express();
const table = require("./api/table");

app.use(express.static("public"));

app.get("/table", table);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
