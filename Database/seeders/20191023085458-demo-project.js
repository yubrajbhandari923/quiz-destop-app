'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
    return queryInterface.bulkInsert('Projects', [{
      Name: 'Demo-Project',
      Date: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      Author: 'Nishant',
      SetsNum:0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Name: 'Example-Project',
      Date: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      Author: 'Sangita',
      SetsNum:0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      Name: 'Dem0-Project',
      Date: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      Author: 'Chiranjibi',
      SetsNum:0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Projects', null, {});
  }
};
