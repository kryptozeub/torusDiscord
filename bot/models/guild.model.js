module.exports = (sequelize, Sequelize) => {
    const Guild = sequelize.define("guild", {
        guildId: {
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
    return Guild;
  };