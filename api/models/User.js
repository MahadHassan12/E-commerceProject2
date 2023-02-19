module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(16),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        
        email: {
            type: DataTypes.STRING(16),
            allowNull: false, 
            unique: true
        },

        role: {
            type: DataTypes.ENUM('casual', 'logged-in', 'admin')
        },
    },
    { underscored: true}
    );
};