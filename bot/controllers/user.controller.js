const db = require("../models");
const User = db.user;
const Guild = db.guild;

exports.getUsersByGuild = (guildId) => {
    return User.findAll({
        include: {
            model: Guild,
            where: { id: guildId }, 
            through: { attributes: [] } 
        }
    }).then(users => {
        if (users.length === 0) {
            console.log("Aucun utilisateur trouvé pour cette guilde.");
            return;
        }
        return users;
    }).catch(error => {
        console.log("Erreur lors de la récupération des utilisateurs :", error.message);
    }); 
};