const express = require("express");
const app = express();

app.get("", (req, res) => {
  console.log("data sent by browser", req.query.name);
  res.send(`<h1>Welcome,${req.query.name}</h1>
        <a href="/about">Goto About page</a>
        `);
});

app.get("/about", (req, res) => {
  res.send(`
        <input type="text" placeholder="user name" value=${req.query.name}/>
        <button>OK</button>
        <a href="/">Goto Home page</a>
        `);
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "jay",
      email: "jayp89800@gmail.com",
    },
    {
      name: "deep",
      email: "deepp@gmail.com",
    },
  ]);
});

app.listen(5000);
