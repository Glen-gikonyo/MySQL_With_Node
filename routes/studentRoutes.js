const express =  require("express");

const studentController = require("../controller/studentController")

const routes = express.Router();

routes.post("/addStudent", studentController.addStudent);

module.exports = routes;