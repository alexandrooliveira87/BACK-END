import express from 'express';
import UserRoute  from './src/routes/user.route.js';
import connectDatabase from './src/database/db.js';
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT ||  3000;
const app = express();

connectDatabase();

app.use(express.json());
app.use("/user", UserRoute);
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));