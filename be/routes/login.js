const express = require("express");
const login = express.Router();
const userModel = require("../modules/users");

login.post("/login", async (request, response) => {
  try {
    const user = await userModel.findOne({
      email: request.body.email,
    });
    if (!user) {
      return response.status(404).send({
        statusCode: 404,
        message: "This user does not exist!",
      });
    }

    response.status(200).send({
      statusCode: 200,
      message: "Login successful",
      user: user,
      token: "jwt_token_here",
    });
  } catch (e) {
    console.error(e);
    response.status(500).send({
      statusCode: 500,
      message: "Internal server error",
    });
  }
});

module.exports = login;
