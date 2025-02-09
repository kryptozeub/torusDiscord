module.exports = (sequelize, Sequelize) => {
    const Channel = sequelize.define("channel", {
        channelId: {
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
    return Channel;
  };