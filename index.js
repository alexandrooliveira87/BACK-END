const express = require('express')
const UserRoute = require("./src/routes/user.route")
const app = express()

app.use("/soma", UserRoute);
app.listen(3000);