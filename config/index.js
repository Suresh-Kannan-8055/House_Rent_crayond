const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("crayon'd_task2", "postgres", "suresh", {
  host: "localhost",
  dialect: "postgres",
});
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
