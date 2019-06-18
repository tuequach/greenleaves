// Category model

// includes 4 category for customer to browse through

module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Category;
};
