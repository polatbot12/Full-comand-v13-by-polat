const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "help",
  
  run: async (client, message, args) => {
    
       if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new Discord.MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("❯ Description", command.description || "Not Provided :(")
        .addField("❯ Usage", "`" + command.usage + "`" || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("BLUE")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else { 
      const prefix = ``
    
    let hembed = new Discord.MessageEmbed()
    .setTitle(`**HELP MENU**`)
    .setDescription("This is the help module of Natron || It is useful in many ways")
    .addField("CURRENT PREFIX IS", prefix)
    .addField("CONFIGURATION ", `\`setmodlogchannel, disablemodlogchannel, disablemuterole, setmuterole, setserverlogs, setnicklogs, setvcrole, setautorole\``)
    .addField("SERVER SECURITY", `\`config, whitelist, delwhitelist, whitelisted, set-anti-alt\``)
    .addField("BACKUP ", `\`create-backup, load-backup, info-backup, list-backup\``)
    .addField("MISCELLANEOUS", `\`avatar, invite, stats, ping, uptime, embed, announce, stealemoji\``)
    .addField("INFORMATION", `\`serverinfo, userinfo, owner, help, botinfo, playstore, roleinfo, channelinfo\``)
    .addField("FUN", `\`kiss, hug, slap, poke, pat, smug, clyde, emojify, tictactoe, blink, delete, blur, criminal, jail, wanted, spank\``)
    .addField("MODERATION ", `\`dm, deafen, ban, kick, mute, hackban, lock, lockdown, unlock, purge, undeafen, vcmove, slowmode, unban, \``) 
    .addField("ROLE SYSTEM", `\`roleadd, roledel, addroleall, removeroleall, rradd, rrdelete\``) 
    .addField("WELCOME", `\`welcome\``) 
    .addField("MUSIC SYSTEM ", `\`play, stop, pause, resume, skip, filter, loop, nowplaying, clearqueue, queue, shuffle, w-filters\``) 
    .addField("LINKS", "**[INVITE]()** , **[SUPPORT]()**")
    .setImage("")
    
    message.channel.send(hembed)
    }
}
}
