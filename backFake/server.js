const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const pessoa = {
    email: "use@gmail",
    pass: "123"
}




app.get("/", (req, res) => {
    res.send("Bem Vindo");
});

app.get("/teste", (req, res) => {
    res.send(`Bem Vindo ${req.body.name}`);
});

app.post("/login", (req, res) => {
    const {email, pass} = req.body;
    if (email != pessoa.email && pass != pessoa.pass) {
        res.send("conectado");
    }
});

app.listen(5000, () => {
    console.log("Serven Open in PORT 5000");
});