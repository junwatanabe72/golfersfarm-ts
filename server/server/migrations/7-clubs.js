"use strict";

// const defaultValues = require('../values/modelValues');
const club = {
  name: "original",
  shaftId: 1,
  makerId: 1,
  typeId: 1,
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("clubs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: club.name,
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: club.makerId,
        references: {
          model: "clubTypes",
          key: "id",
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      shaftId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: club.shaftId,
        references: {
          model: "shafts",
          key: "id",
        },
      },
      makerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: club.makerId,
        references: {
          model: "makers",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("clubs");
  },
};
