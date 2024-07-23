const express = require("express");
const app = express();
const reqFilter=require('./middleware')
const routes=express.Router();


// app.use(reqFilter);


routes.use(reqFilter);

app.get("/", (req, res) => {
  res.send("welcome to Home page");
});

app.get("/users", (req, res) => {
  res.send("welcome to User page");
});

routes.get("/about", (req, res) => {
  res.send("welcome to About page");
});

routes.get("/contact", (req, res) => {
  res.send("welcome to Contact page");
});

app.use('/',routes)

app.listen(5000);
