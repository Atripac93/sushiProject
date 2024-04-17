const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const PORT = 3010;

const app = express();

const usersRoute = require("./routes/users");
const loginRoute = require("./routes/login");

app.use(cors());

app.use(express.json());

app.use("/", usersRoute);
app.use("/", loginRoute);

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error db connection"));
db.once("open", () => {
  console.log("db connected");
});

app.listen(PORT, () =>
  console.log(`connessione avvenuta con successo alla porta ${PORT}`)
);
