"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "clubTypes",
      [
        {
          type: "1WOOD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "3WOOD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "4WOOD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "5WOOD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "7WOOD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "9WOOD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "11WOOD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "13WOOD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "3UT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "4UT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "5UT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "6UT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "IRON(3~P)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "IRON(4~P)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "IRON(5~P)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "IRON(6~P)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "IRON(3~9)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "IRON(4~9)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "IRON(5~9)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "PW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "AW(50 Degree)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "AW(52 Degree)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "SW(54 Degree)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "SW(56 Degree)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "SW(58 Degree)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "LW(60 Degree)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "PUTTER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("clubTypes", null, {});
  },
};
