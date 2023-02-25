const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(70),
            allowNull: false,
            unique: true,
            validate: {
                len:[4, 200],
            }
        },
        password: {
            type: DataTypes.STRING(100),
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
            defaultValue: false
        },
    },
    { underscored: true}
    );

    User.beforeCreate(async (user) => {
        const saltRound = 3;
        const hash = await bcrypt.hash(user.password, saltRound);
        user.password = hash
    })
    return User
};

