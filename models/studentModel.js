// Importing necessary modules
// const { DataTypes } = require("sequelize");
// const { sequelize } = require("./indexStart");

// Exporting a function that defines the Student model
module.exports = (sequelize, DataTypes) => {
  // Defining the Student model
  const Student = sequelize.define("student", {
    // Defining the student_id field
    student_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Defining the firstname field
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Defining the lastname field
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Defining the gender field
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  // Returning the Student model
  return Student;
};
