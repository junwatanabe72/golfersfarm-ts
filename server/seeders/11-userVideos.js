("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "user_videos",
      [
        {
          id: 1,
          userId: 1,
          videoId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 1,
          userId: 1,
          videoId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 1,
          userId: 1,
          videoId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 1,
          userId: 1,
          videoId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user_videos", null, {});
  },
};
