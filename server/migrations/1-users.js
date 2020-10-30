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
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sex: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      show: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 100,
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
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
      job: {
        type: Sequelize.STRING,
      },
      profileImage: {
        type: Sequelize.STRING,
      },
      clubImage: {
        type: Sequelize.STRING,
      },
      school: {
        type: Sequelize.STRING,
      },
      hobby: {
        type: Sequelize.STRING,
      },
      facebook: {
        type: Sequelize.STRING,
      },
      twitter: {
        type: Sequelize.STRING,
      },
      instagram: {
        type: Sequelize.STRING,
      },
      youtube: {
        type: Sequelize.STRING,
      },
      favourite: {
        type: Sequelize.STRING,
      },
      blood: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      history: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      hcap: {
        type: Sequelize.INTEGER,
      },
      classification: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
