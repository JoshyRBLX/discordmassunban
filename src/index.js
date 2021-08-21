const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MESSAGES] });

const USER_ID = "insert your discord userid in here"; // Put your Discord UserID in. Example: const USER_ID = "329991150712651776";
const TOKEN = "insert your discord bot token in here"; // Put your Discord Bot Token in. Example: const TOKEN = "NzczOTQ0OTcxNTE3ODg2NDc1.X6QmbA.i0KmmghZVOhe9BsIzVAUu856dZU";

bot.once('ready', () => {
	console.log(`${bot.user.username} is online`);
});

bot.on("messageCreate", async message => {
    if(!message.content.startsWith("u!start")) return; // You can change the command name if you want to
    if(message.author.id !== USER_ID) return message.channel.send("You don't have enough permissions to run this command."); // Permissions

    message.channel.send("Started unbanning all users.\nYou can view the progress in your console/terminal.")

    message.guild.bans.fetch().then(bans => {
        bans.forEach(user => {
            message.guild.bans.remove(user.user.id).then(user => console.log(`OK | ${user.username} has been unbanned`)).catch(err => {console.error(err)});
        })
    })
});

bot.login(TOKEN);