("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "results",
      [
        {
          id: 1,
          name: "SWING横（ドライバー）",
          url: "wet97FIk2iY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "SWING横(アイアン)",
          url: "GYFE9KeNXF0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "SWING正面(ドライバー)",
          url: "Dio5xvJm_jw",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "SWING正面(アイアン)",
          url: "FQFBFAdoi8w",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("results", null, {});
  },
};
