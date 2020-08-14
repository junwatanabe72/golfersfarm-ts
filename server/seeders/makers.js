"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "makers",
      [
        {
          name: "original",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
    return queryInterface.bulkDelete("makers", null, {});
  },
};
