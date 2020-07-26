"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "clubs",
      [
        {
          name: "JBEAM 435",
          userId: 1,
          typeId: 2,
          shaftId: 3,
          makerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ibrade",
          userId: 1,
          typeId: 2,
          shaftId: 2,
          makerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "X-Drive",
          userId: 1,
          typeId: 1,
          shaftId: 2,
          makerId: 1,
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
