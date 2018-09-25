'use strict';
const csv = require('csvtojson');
const DATA = './data/output.csv';

csv().fromFile(DATA).then( result => {
  module.exports = {
    result.forEach( fd => {
    up: (queryInterface, Sequelize) => {
      return queryInterface.insert('Frostdates', {}
        station: fd['Station'],
        zipcode: fd['Zip'],
        location: fd['Location'],
        firstHardFreeze50: '',
        firstHardFreeze60: '',
        firstHardFreeze70: '',
        firstHardFreeze80: '',
        firstHardFreeze90: '',
        firstFreeze50: '',
        firstFreeze60: '',
        firstFreeze70: '',
        firstFreeze80: '',
        firstFreeze90: '',
        firstFrost50: '',
        firstFrost60: '',
        firstFrost70: '',
        firstFrost80: '',
        firstFrost90: '',
        lastHardFreeze50: '',
        lasthardFreeze60: '',
        lasthardFreeze70: '',
        lasthardFreeze80: '',
        lasthardFreeze90: '',
        lastFreeze50: '',
        lastFreeze60: '',
        lastFreeze70: '',
        lastFreeze80: '',
        lastFreeze90: '',
        lastFrost50: '',
        lastFrost60: '',
        lastFrost70: '',
        lastFrost80: '',
        lastFrost90: '',
      }
    )
      /*
        Add altering commands here.
        Return a promise to correctly handle asynchronicity.
  
        Example:
        return queryInterface.bulkInsert('Person', [{
          name: 'John Doe',
          isBetaMember: false
        }], {});
      */
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Frostdates', null, {});
    }
  };
})

