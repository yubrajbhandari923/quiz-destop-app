const Sequelize = require("sequelize")

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db'
});

module.exports = db;