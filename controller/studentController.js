const db = require("../models/indexStart");
const createError = require("http-errors");

const Student = db.students;

module.exports = {
  // add student
  addStudent: async (req, res, next) => {
    try {
      let info = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
      };
      const addStudent = await Student.create(info);
      res.status(200).send(addStudent);
    } catch (error) {
      next(error);
    }
  },
  // get all students
  getStudents: async (req, res, next) => {
    try {
      let allStudents = await Student.findAll({});
      res.status(200).send(allStudents);
    } catch (error) {
      next(error);
    }
  },
  // get student by id
  getStudent: async (req, res, next) => {
    try {
      let id = req.params.id;
      let student = await Student.findOne({ where: { student_id: id } });

      if (!student) {
        throw createError(404, "Student does not exist");
      }
    } catch (error) {
      next(error);
    }
  },
  // update student
  updateStudent: async (req, res, next) => {
    try {
      let id = req.params.id;

      const student = await Student.update(req.body, {
        where: { student_id: id },
      });
      if (!student) {
        throw createError(404, "Student does not exist");
      }
      res.status(200).send(student);
    } catch (error) {
      next(error);
    }
  },

  // delete student
  deleteStudent: async (req, res, next) => {
    try {
      let id = req.params.id;

      await Student.destroy({ where: { student_id: id } });
      res.status(200).send("Student deleted successfully");
    } catch (error) {
      next(error);
    }
  },
};
