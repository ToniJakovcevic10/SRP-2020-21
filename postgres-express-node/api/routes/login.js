const express = require("express");
const router = express.Router();

const loginSchemas = require("./login.schemas");
const SchemaValidator = require("../middleware/validate");
const loginController = require("../controllers/login.controller");

SchemaValidator.addSchemas(loginSchemas);

module.exports = (rootRouter) => {
  rootRouter.use("/", router);

 

  router.post(
    "/login",
    SchemaValidator.validate("login"),
    loginController.login
  );
};
