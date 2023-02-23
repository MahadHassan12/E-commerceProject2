module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Cart', {
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productId: {
            type: DataTypes.STRING,
            allowNull: false
          },
          quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
          }

    },
    { underscored: true}
    );
};