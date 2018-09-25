'use strict';
module.exports = (sequelize, DataTypes) => {
  const frostdate = sequelize.define('frostdate', {
    station: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    location: DataTypes.STRING,
    firstHardFreeze50: DataTypes.STRING,
    firstHardFreeze60: DataTypes.STRING,
    firstHardFreeze70: DataTypes.STRING,
    firstHardFreeze80: DataTypes.STRING,
    firstHardFreeze90: DataTypes.STRING,
    firstFreeze50: DataTypes.STRING,
    firstFreeze60: DataTypes.STRING,
    firstFreeze70: DataTypes.STRING,
    firstFreeze80: DataTypes.STRING,
    firstFreeze90: DataTypes.STRING,    
    firstFrost50: DataTypes.STRING,
    firstFrost60: DataTypes.STRING,
    firstFrost70: DataTypes.STRING,
    firstFrost80: DataTypes.STRING,
    firstFrost90: DataTypes.STRING,
    lastHardFreeze50: DataTypes.STRING,
    lasthardFreeze60: DataTypes.STRING,
    lasthardFreeze70: DataTypes.STRING,
    lasthardFreeze80: DataTypes.STRING,
    lasthardFreeze90: DataTypes.STRING,
    lastFreeze50: DataTypes.STRING,
    lastFreeze60: DataTypes.STRING,
    lastFreeze70: DataTypes.STRING,
    lastFreeze80: DataTypes.STRING,
    lastFreeze90: DataTypes.STRING,    
    lastFrost50: DataTypes.STRING,
    lastFrost60: DataTypes.STRING,
    lastFrost70: DataTypes.STRING,
    lastFrost80: DataTypes.STRING,
    lastFrost90: DataTypes.STRING
  }, {});
  frostdate.associate = function(models) {
    // associations can be defined here
  };
  return frostdate;
};