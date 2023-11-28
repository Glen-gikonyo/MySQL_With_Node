const db = require("../models/indexStart");
const createError = require("http-errors");

const Course = db.course;

module.exports = {
  // add course
  addCourse: async (req, res, next) => {
    try {
      let info = {
        courseName: req.body.courseName
      };
      const addCourse = await Course.create(info);
      res.status(200).send(addCourse);
    } catch (error) {
      next(error);
    }
  },
};
