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
      hardFeeze50: {
        type: Sequelize.STRING
      },
      hardFreeze60: {
        type: Sequelize.STRING
      },
      hardFreeze70: {
        type: Sequelize.STRING
      },
      hardFreeze80: {
        type: Sequelize.STRING
      },
      hardFreeze90: {
        type: Sequelize.STRING
      },
      freeze50: {
        type: Sequelize.STRING
      },
      freeze60: {
        type: Sequelize.STRING
      },
      freeze70: {
        type: Sequelize.STRING
      },
      freeze80: {
        type: Sequelize.STRING
      },
      freeze90: {
        type: Sequelize.STRING
      },
      frost50: {
        type: Sequelize.STRING
      },
      frost60: {
        type: Sequelize.STRING
      },
      frost70: {
        type: Sequelize.STRING
      },
      frost80: {
        type: Sequelize.STRING
      },
      frost90: {
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