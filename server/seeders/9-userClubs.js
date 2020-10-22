("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "user_clubs",
      [
        // {
        //   id: 1,
        //   userId: 1,
        //   clubId: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   id: 1,
        //   userId: 1,
        //   clubId: 2,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   id: 1,
        //   userId: 1,
        //   clubId: 3,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   id: 1,
        //   userId: 1,
        //   clubId: 4,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user_clubs", null, {});
  },
};
