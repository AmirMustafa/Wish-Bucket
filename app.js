const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./model/wish");

const app = express();
app.use(cors()); // Use this after the variable declaration
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
const port = process.env.PORT || 5000;

// serving static files
app.use(express.static("public"));

// this line must be written to set default view type - ejs , inside route file used - res.render()
app.set("view engine", "ejs"); // written before routes import
// import routes
require("./routes")(app);

app.listen(port, () => {
  console.log("Server is running in port" + port);
});
