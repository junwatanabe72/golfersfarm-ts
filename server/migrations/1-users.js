"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sex: {
        type: Sequelize.STRING,
      },
      residence: {
        type: Sequelize.STRING,
      },
      birthPlace: {
        type: Sequelize.STRING,
      },
      averageDistance: {
        type: Sequelize.INTEGER,
      },
      bestScore: {
        type: Sequelize.INTEGER,
      },
      homeCourse: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      job: {
        type: Sequelize.STRING,
      },
      profileImage: {
        type: Sequelize.STRING,
      },
      clubImage: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      school: { type: Sequelize.STRING },
      hobby: { type: Sequelize.STRING },
      facebook: { type: Sequelize.STRING },
      twitter: { type: Sequelize.STRING },
      instagram: { type: Sequelize.STRING },
      youtube: { type: Sequelize.STRING },
      show: { type: Sequelize.BOOLEAN, defaultValue: false },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
