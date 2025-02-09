// Require the necessary discord.js classes
require('dotenv').config()
const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = process.env.BOT_TOKEN;
const userController = require("./controllers/user.controller");
const guildController = require("./controllers/guild.controller");
const db = require("./models");
const User = db.user;
const Guild = db.guild;

db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

// Create a new client instance
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] 
});


client.once(Events.ClientReady, async (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);

    readyClient.guilds.cache.forEach(async (discordGuild) => {
        Guild.findOrCreate({
            where: { guildId: discordGuild.id },
            defaults: {
                guildId: discordGuild.id, 
                name: discordGuild.name 
            }
        }).then(([guild, created]) => {
            discordGuild.members.fetch().then(members => {
                members.forEach(member => {
                    User.findOrCreate({
                        where: { userId: member.id },
                        defaults: { 
                            name: member.user.tag,
                            userId: member.id 
                        }
                    }).then(([user, created]) => {
                        guild.addUser(user)
                            .catch(err => console.log("Erreur lors de l'ajout de l'association :", err.message));
        
                    }).catch(userError => console.log("Erreur lors de la création de l'utilisateur :", userError.message));
                });
            }).catch(fetchError => console.log("Erreur lors de la récupération des membres :", fetchError.message));
        
        }).catch(guildError => console.log("Erreur lors de la création de la guilde :", guildError.message));
        discordGuild.channels.fetch().then(channels => {
            channels.forEach(channel => {
                console.log("channel", channel.id);
                console.log("name", channel.name);
                console.log("guildId", channel.guildId);
                console.log("guildId", channel);
            });
        }).catch(console.error);
    });
});

client.login(token);