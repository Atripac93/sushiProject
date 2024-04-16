const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 3010;

const app = express();

const usersRoute = require("./routes/users");

app.use(express.json());

// app.get("/", (request, response) => {
//   response.status(200).send({
//     title: "Marc",
//     age: 30,
//   });
// });

app.use("/", usersRoute);

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error db connection"));
db.once("open", () => {
  console.log("db connected");
});

app.listen(PORT, () =>
  console.log(`connessione avvenuta con successo alla porta ${PORT}`)
);
