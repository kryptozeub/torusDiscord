module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        userId: {
            type: Sequelize.FLOAT,
            allowNull: false,
            unique: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: false
        }
    },
    {
        paranoid: false
    });
    return User;
  };