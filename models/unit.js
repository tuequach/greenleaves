// Unit Table model

module.exports = function(sequelize, DataTypes) {
  var unit = sequelize.define("unit", {
    unit: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return unit;
};
