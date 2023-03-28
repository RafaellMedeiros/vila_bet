const express = require("express");
const app = express();

const ACCESS_DOOR = 8080;

app.listen(ACCESS_DOOR, () => console.log(`Servidor iniciado na porta ${ACCESS_DOOR}`));

