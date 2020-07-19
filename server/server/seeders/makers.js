"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "makers",
      [
        {
          name: "Mizuno",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Titleist",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Callaway",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "その他",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("categories", null, {});
  },
};
