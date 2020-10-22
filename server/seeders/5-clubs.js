("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "clubs",
      [
        // {
        //   id: 1,
        //   name: "J-BEAM435",
        //   shaftId: 2081,
        //   makerId: 821,
        //   typeId: 1,
        //   flex: "R",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   id: 2,
        //   name: "x-blade",
        //   shaftId: 33,
        //   makerId: 147,
        //   typeId: 18,
        //   flex: "S",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   id: 3,
        //   name: "E-zone",
        //   shaftId: 1,
        //   makerId: 162,
        //   typeId: 30,
        //   flex: "S",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   id: 4,
        //   name: "FUTURA X",
        //   shaftId: 1,
        //   makerId: 124,
        //   typeId: 32,
        //   flex: "S",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("clubs", null, {});
  },
};
