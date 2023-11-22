// Importing the necessary modules and database configuration
const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

// Creating a new instance of Sequelize with the database details
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

// Attempting to authenticate with the database
sequelize
  .authenticate()
  .then(() => {
    // If successful, log a success message
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    // If unsuccessful, log the error
    console.error("Unable to connect to the database:", err);
  });

// Creating an object to hold our models
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importing the student model
db.students = require("./studentModel")(sequelize, DataTypes);

// Syncing our models with the database
db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done.");
});

// Exporting the db object which contains our models
module.exports = db;
