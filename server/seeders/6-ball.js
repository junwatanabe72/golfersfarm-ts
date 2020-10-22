("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "balls",
      [
        {
          id: 1,
          userId: 1,
          name: "pro-v1x",
          makerId: 1281,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("balls", null, {});
  },
};
