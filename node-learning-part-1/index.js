const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.get("", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("/about", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/profile", (_, res) => {
  const user = { name: "jay",
     email: "jayp89800@gmail.com",
      city: "jnd",
    skills:['html','css','js','bootstrap'] };
  res.render("profile", { user });
});

app.get("/login",(_,res)=>{
    res.render("login")
})

app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/404.html`);
});

app.listen(5000);
