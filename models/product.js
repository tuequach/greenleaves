// Product model

// The Customer has a "customer" attribute of type DataTypes.String

module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    name_en: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_cn: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    availability: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
  return Product;
};
