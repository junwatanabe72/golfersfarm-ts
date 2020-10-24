("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "user_clubs",
      [
        {
          id: 1,
          userId: 1,
          clubId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          userId: 1,
          clubId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          userId: 1,
          clubId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          userId: 1,
          clubId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          userId: 1,
          clubId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          userId: 1,
          clubId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          userId: 1,
          clubId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user_clubs", null, {});
  },
};
