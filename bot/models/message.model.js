module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("message", {
        senderId: {
            type: Sequelize.FLOAT,
            allowNull: false,
            unique: false
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: false
        },
        time: {
            type: Sequelize.DATE,
            allowNull: false,
            unique: false
        }
    },
    {
        paranoid: false
    });
    return Message;
  };