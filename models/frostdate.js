'use strict';
module.exports = (sequelize, DataTypes) => {
  const frostdate = sequelize.define('frostdate', {
    station: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    location: DataTypes.STRING,
    fst24p50: DataTypes.STRING,
    fst24p60: DataTypes.STRING,
    fst24p70: DataTypes.STRING,
    fst24p80: DataTypes.STRING,
    fst24p90: DataTypes.STRING,
    fst28p50: DataTypes.STRING,
    fst28p60: DataTypes.STRING,
    fst28p70: DataTypes.STRING,
    fst28p80: DataTypes.STRING,
    fst28p90: DataTypes.STRING,    
    fst32p50: DataTypes.STRING,
    fst32p60: DataTypes.STRING,
    fst32p70: DataTypes.STRING,
    fst32p80: DataTypes.STRING,
    fst32p90: DataTypes.STRING,
    lst24p50: DataTypes.STRING,
    lst24p60: DataTypes.STRING,
    lst24p70: DataTypes.STRING,
    lst24p80: DataTypes.STRING,
    lst24p90: DataTypes.STRING,
    lst28p50: DataTypes.STRING,
    lst28p60: DataTypes.STRING,
    lst28p70: DataTypes.STRING,
    lst28p80: DataTypes.STRING,
    lst28p90: DataTypes.STRING,    
    lst32p50: DataTypes.STRING,
    lst32p60: DataTypes.STRING,
    lst32p70: DataTypes.STRING,
    lst32p80: DataTypes.STRING,
    lst32p90: DataTypes.STRING
  }, {});
  frostdate.associate = function(models) {
    // associations can be defined here
  };
  return frostdate;
};