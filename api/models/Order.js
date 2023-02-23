module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Order', {
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productId: {
            type: DataTypes.STRING
          },
          quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
          },
          amount: {
            type: DataTypes.STRING,
            allowNull: false
          },
          address: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          status: {
            type: DataTypes.STRING,
            default: 'pending'
          }

    },
    { underscored: true}
    );
};