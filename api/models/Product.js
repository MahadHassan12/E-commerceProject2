module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
           type: DataTypes.STRING(50),
           allowNull: false

        },
        desc: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        
        img: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        categories: {
            type: DataTypes.ENUM('Stationära datorer ', 'Bärbara datorer', 'Mobiltelefoner'),
            default: [],
            allowNull: false
        },
        size: {
            type: DataTypes.STRING(16),
 
        },
        color: {
            type: DataTypes.STRING(16)
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    { underscored: true}
    );
};