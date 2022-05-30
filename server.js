require("dotenv").config();
require('./src/db/conn');
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./src/routes/userRoute");
app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});