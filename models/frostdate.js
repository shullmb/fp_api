'use strict';
module.exports = (sequelize, DataTypes) => {
  const frostdate = sequelize.define('frostdate', {
    station: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    location: DataTypes.STRING,
    hardFreeze50: DataTypes.STRING,
    hardFreeze60: DataTypes.STRING,
    hardFreeze70: DataTypes.STRING,
    hardFreeze80: DataTypes.STRING,
    hardFreeze90: DataTypes.STRING,
    freeze50: DataTypes.STRING,
    freeze60: DataTypes.STRING,
    freeze70: DataTypes.STRING,
    freeze80: DataTypes.STRING,
    freeze90: DataTypes.STRING,    
    frost50: DataTypes.STRING,
    frost60: DataTypes.STRING,
    frost70: DataTypes.STRING,
    frost80: DataTypes.STRING,
    frost90: DataTypes.STRING
  }, {});
  frostdate.associate = function(models) {
    // associations can be defined here
  };
  return frostdate;
};