'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('frostdates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      station: {
        type: Sequelize.STRING
      },
      zipcode: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      firstHardFreeze50: {
        type: Sequelize.STRING
      },
      firstHardFreeze60: {
        type: Sequelize.STRING
      },
      firstHardFreeze70: {
        type: Sequelize.STRING
      },
      firstHardFreeze80: {
        type: Sequelize.STRING
      },
      firstHardFreeze90: {
        type: Sequelize.STRING
      },
      firstFreeze50: {
        type: Sequelize.STRING
      },
      firstFreeze60: {
        type: Sequelize.STRING
      },
      firstFreeze70: {
        type: Sequelize.STRING
      },
      firstFreeze80: {
        type: Sequelize.STRING
      },
      firstFreeze90: {
        type: Sequelize.STRING
      },
      firstFrost50: {
        type: Sequelize.STRING
      },
      firstFrost60: {
        type: Sequelize.STRING
      },
      firstFrost70: {
        type: Sequelize.STRING
      },
      firstFrost80: {
        type: Sequelize.STRING
      },
      firstFrost90: {
        type: Sequelize.STRING
      },
      lastHardFreeze50: {
        type: Sequelize.STRING
      },
      lasthardFreeze60: {
        type: Sequelize.STRING
      },
      lasthardFreeze70: {
        type: Sequelize.STRING
      },
      lasthardFreeze80: {
        type: Sequelize.STRING
      },
      lasthardFreeze90: {
        type: Sequelize.STRING
      },
      lastFreeze50: {
        type: Sequelize.STRING
      },
      lastFreeze60: {
        type: Sequelize.STRING
      },
      lastFreeze70: {
        type: Sequelize.STRING
      },
      lastFreeze80: {
        type: Sequelize.STRING
      },
      lastFreeze90: {
        type: Sequelize.STRING
      },
      lastFrost50: {
        type: Sequelize.STRING
      },
      lastFrost60: {
        type: Sequelize.STRING
      },
      lastFrost70: {
        type: Sequelize.STRING
      },
      lastFrost80: {
        type: Sequelize.STRING
      },
      lastFrost90: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('frostdates');
  }
};