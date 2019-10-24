'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      unique:true,
    },
    Name: DataTypes.STRING,
    Date: DataTypes.DATEONLY,
    Author: DataTypes.STRING,
    SetsNum: DataTypes.INTEGER,
    key: {
      type:DataTypes.BOOLEAN,
      defaultValue:false},
    passKey : {
      type:DataTypes.STRING,
      defaultValue:null}
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};