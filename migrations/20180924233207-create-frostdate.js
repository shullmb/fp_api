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
      fst24p50: {
        type: Sequelize.STRING
      },
      fst24p60: {
        type: Sequelize.STRING
      },
      fst24p70: {
        type: Sequelize.STRING
      },
      fst24p80: {
        type: Sequelize.STRING
      },
      fst24p90: {
        type: Sequelize.STRING
      },
      fst28p50: {
        type: Sequelize.STRING
      },
      fst28p60: {
        type: Sequelize.STRING
      },
      fst28p70: {
        type: Sequelize.STRING
      },
      fst28p80: {
        type: Sequelize.STRING
      },
      fst28p90: {
        type: Sequelize.STRING
      },
      fst32p50: {
        type: Sequelize.STRING
      },
      fst32p60: {
        type: Sequelize.STRING
      },
      fst32p70: {
        type: Sequelize.STRING
      },
      fst32p80: {
        type: Sequelize.STRING
      },
      fst32p90: {
        type: Sequelize.STRING
      },
      lst24p50: {
        type: Sequelize.STRING
      },
      lst24p60: {
        type: Sequelize.STRING
      },
      lst24p70: {
        type: Sequelize.STRING
      },
      lst24p80: {
        type: Sequelize.STRING
      },
      lst24p90: {
        type: Sequelize.STRING
      },
      lst28p50: {
        type: Sequelize.STRING
      },
      lst28p60: {
        type: Sequelize.STRING
      },
      lst28p70: {
        type: Sequelize.STRING
      },
      lst28p80: {
        type: Sequelize.STRING
      },
      lst28p90: {
        type: Sequelize.STRING
      },
      lst32p50: {
        type: Sequelize.STRING
      },
      lst32p60: {
        type: Sequelize.STRING
      },
      lst32p70: {
        type: Sequelize.STRING
      },
      lst32p80: {
        type: Sequelize.STRING
      },
      lst32p90: {
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