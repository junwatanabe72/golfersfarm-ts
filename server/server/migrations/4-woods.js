"use strict";

// const defaultValues = require('../values/modelValues');
const wood = {
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
        defaultValue: wood.name,
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
        defaultValue: wood.shaftId,
        references: {
          model: "shafts",
          key: "id",
        },
      },
      makerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: wood.makerId,
        references: {
          model: "makers",
          key: "id",
        },
      },
      count: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: wood.count,
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
