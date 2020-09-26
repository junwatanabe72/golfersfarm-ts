"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "clubs",
      [
        {
          name: "JBEAM 435",
          typeId: 2,
          shaftId: 3,
          makerId: 2,
          flex: "S",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ibrade",
          typeId: 2,
          shaftId: 2,
          makerId: 1,
          flex: "S",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "X-Drive",
          typeId: 1,
          shaftId: 2,
          makerId: 1,
          flex: "S",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("clubs", null, {});
  },
};
