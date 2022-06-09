const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hi, Friena!")
    }
    if (message.content == "hello"){
        message.reply("Hello, Friena!")
    }
    if (message.content == "hey"){
        message.reply("Hey Friena!")
    }
    if (message.content == "harm"){
        message.reply("Harm on you Friena!")
    }
    if (message.content == "nah"){
        message.reply("okay as you see")
    }
    if (message.content == "yeah good bot"){
        message.reply("ok, thanks its good from you")
    }
    if (message.content == "$help"){
        message.reply("Nothing yet + this Very Basic Bot")
    }
})

const welcomeChannelId = "984263301817061457"

client.on("guildMemberAdd", (member) =>{
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}>  Welcome to the server!`)
})

client.login(process.env.TOKEN)