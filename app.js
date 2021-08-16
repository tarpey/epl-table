const cors = require("cors");
const express = require("express");
const app = express();
const table = require("./api/index");

app.use(cors());
app.options("*", cors());
app.use(express.static("public"));

const imgSrc = "https://ssl.gstatic.com/onebox/media/sports/logos";

app.get("/table", table);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
