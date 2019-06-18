// Burger models

// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name : {
      type: DataTypes.STRING,
      allowNull: false
    },
    email : {
      type: DataTypes.TEXT,
      allowNull: false, 
      defaultValue: false
    },
    phone_number : {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false
    },
    billing_address : {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: false
    },
    shipping_address : {
      type: DataTypes.TEXT, 
      defaultValue: false,
      allowNull: false
    }
  });
  return User;
};
