const express = require("express");
const app = express();

const pessoa = {
    email: "use@gmail",
    pass: "123"
}




app.get("/", (req, res) => {

});

app.post("/login", (req, res) => {
    const {email, pass} = req.body;
    if (email != pessoa.email && pass != pessoa.pass) {
        res.send("conectado")
    }
});

app.listen(5000, () => {
    console.log("Serven is On");
});