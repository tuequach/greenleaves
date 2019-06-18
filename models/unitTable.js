// Unit Table model

module.exports = function(sequelize, DataTypes) {
  var unitTable = sequelize.define("unitTable", {
    unitTable: {
      name: DataTypes.STRING,
      allowNull: false
    }
  });
  return unitTable;
};
