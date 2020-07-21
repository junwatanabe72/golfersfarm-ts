"use strict";

const defaultStatus = {
  name: "original",
  shaftId: 1,
  makerId: 1,
  count: "3 5",
}

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
        allowNull: false,
        defaultValue: defaultStatus.name,
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
        defaultValue: defaultStatus.shaftId,
        references: {
          model: "shafts",
          key: "id",
        },
      },
      makerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: defaultStatus.makerId,
        references: {
          model: "makers",
          key: "id",
        },
      },
      count: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: defaultStatus.count,
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
