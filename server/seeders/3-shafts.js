"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "shafts",
      [
        {
          name: "original",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TOUR AD DI-7",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SPD474 EVOⅢ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Diamana™ D-LIMITED 50",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("shafts", null, {});
  },
};
