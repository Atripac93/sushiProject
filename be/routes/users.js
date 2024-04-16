const express = require("express");
const router = express.Router();
const userModel = require("../modules/users");

router.get("/getUsers", async (request, response) => {
  try {
    const users = await userModel.find();
    response.status(200).send(users);
  } catch (e) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal server error: " + e.message,
    });
  }
});

router.post("/createUsers", async (request, response) => {
  const newUser = new userModel({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: request.body.password,
    age: Number(request.body.age),
  });

  try {
    const userToSave = await newUser.save();
    response.status(201).send({
      statusCode: 201,
      payload: userToSave,
    });
  } catch (e) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal server error: " + e.message,
    });
  }
});

module.exports = router;
