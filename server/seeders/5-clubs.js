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
          makerId: 821,
          typeId: 1,
          flex: "S",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "915F",
          shaftId: 111,
          makerId: 1281,
          typeId: 11,
          flex: "S",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "915F",
          shaftId: 111,
          makerId: 1281,
          typeId: 31,
          flex: "S",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "I-Blade",
          shaftId: 321,
          makerId: 1431,
          typeId: 171,
          flex: "S",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "E-ZONE",
          shaftId: 321,
          makerId: 1611,
          typeId: 261,
          flex: "S",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "E-ZONE",
          shaftId: 321,
          makerId: 1611,
          typeId: 291,
          flex: "S",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: "FUTURE-X",
          shaftId: 11,
          makerId: 1231,
          typeId: 311,
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
