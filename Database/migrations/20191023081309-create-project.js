'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Date: {
        type: Sequelize.DATEONLY
      },
      Author: {
        type: Sequelize.STRING
      },
      SetsNum: {
        type: Sequelize.INTEGER
      },
      key: {
        type:Sequelize.BOOLEAN,
        defaultValue:false
      },
      passKey : {
        type:Sequelize.STRING,
        defaultValue:null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Projects');
  }
};