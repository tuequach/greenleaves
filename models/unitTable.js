// Unit Table model

module.exports = function(sequelize, DataTypes) {
  var unitTable = sequelize.define("unitTable", {
    unitTable: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return unitTable;
};
