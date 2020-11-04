("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "clubs",
      [
        {
          id: 1,
          name: "J-BEAM435",
          shaftId: 21,
          makerId: 1,
          typeId: 1,
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
