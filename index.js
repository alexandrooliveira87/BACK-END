const express = require('express')
const UserRoute = require("./src/routes/user.route")
const app = express()

const port = 3000;


app.use(express.json());
app.use("/user", UserRoute);
app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));