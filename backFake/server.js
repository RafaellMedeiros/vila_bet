const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

const pessoa = {
  email: "use@gmail.com",
  password: "123",
};
const pessoa2 = {
  email: "vendedor@gmail.com",
  password: "123",
};

app.get("/", (req, res) => {
  res.send("Bem Vindo");
});

app.get("/teste", (req, res) => {
  res.send(`Bem Vindo ${req.params.name}`);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (email == pessoa.email && password == pessoa.password) {
    res.json({ token: "abc", isAdmin: true });
  }
  if (email == pessoa2.email && password == pessoa2.password) {
    res.json({ token: "defg", isAdmin: false });
  }
});

app.listen(5000, () => {
  console.log("Serven Open in PORT 5000");
});
