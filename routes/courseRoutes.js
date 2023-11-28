const express = require("express");

const courseController = require("../controller/courseController");

const routes = express.Router();

routes.post("/addCourse", courseController.addCourse);

module.exports = routes;
