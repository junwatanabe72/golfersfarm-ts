"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("woods", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      shaftId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "shafts",
          key: "id",
        },
      },
      makerId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "makers",
          key: "id",
        },
      },
      count: {
        type: Sequelize.ENUM,
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
    return queryInterface.dropTable("woods");
  },
};
