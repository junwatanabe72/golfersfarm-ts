"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "shafts",
      [
        {
          name: "original",
          flex: "s",
          manufacturer: "original",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TOUR AD DI-7",
          flex: "s",
          manufacturer: "GRAPHITE DESIGN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SPD474 EVOⅢ",
          flex: "s",
          manufacturer: "Fujikura",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Diamana™ D-LIMITED 50",
          flex: "s",
          manufacturer: "三菱ケミカル",
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
