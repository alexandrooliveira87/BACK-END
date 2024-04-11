const express = require('express')
const UserRoute = require("./src/routes/user.route")
const app = express()
const connectDatabase= require("./src/database/db")
const port = 3000;

connectDatabase();

app.use(express.json());
app.use("/user", UserRoute);
app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));