module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                len:[4, 200],
            }
        },
        password: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        
        email: {
            type: DataTypes.STRING(200),
            allowNull: false, 
            unique: true,
            validate: {
                len:[4, 200],
                isEmail: true
            }

        },
        isAdmin: {
            type: DataTypes.BOOLEAN(),
            default: false
        },
    },
    { underscored: true}
    );
};