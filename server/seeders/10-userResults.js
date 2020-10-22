("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "user_results",
      [
        {
          id: 1,
          userId: 1,
          resultId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 1,
          userId: 1,
          resultId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user_results", null, {});
  },
};
