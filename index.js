const express = require("express");
const { keep_alive } = require("./Date/keep_alive");
const app = express();

app.listen(() => console.log("ready"));

const Discord = require("discord.js");
const Canvas = require('canvas');
const fs = require('fs')
const ms = require('ms')
const db = require('quick.db')
const disbut = require('discord-buttons');

require('discord-reply')


const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity(`${prefix}help`, {
  type: "STREAMING",
  url: "https://www.twitch.tv/help"
  })
 })



const prefix = "-!"
const devs = "ADMINISTRATOR";
const owners = ["845150003777503243"];
/*  ------------------------- */

/*  ------------------------- */

client.login(process.env.Dark_Master);

///////////////////

/* client.on('message', message => {
  if (message.content.startsWith(prefix +'الامر')) {
message.author.send("الكلام اللي هيتبعتله")
}})*/

////

client.on('guildMemberAdd', async (member) => {
const log = client.channels.cache.get("905073809307103232")
log.send(`> <a:ss_3:912576426950148107> **شرفتنا يابرو في سيرفرنا المتواضع يا <@${member.id}>** <a:ss_3:912576426950148107>`).then((dark) => {
dark.delete({timeout: 9900});
}).then((e)=> {console.log(`
    ==========================================
    ||                                      ||
    || user id : ${member.user}             ||
    ||                                      ||
    ==========================================
        `)}
)
});


client.on('guildMemberAdd', async (member) => {
const log = client.channels.cache.get("916441936712310786")
log.send(`> <a:ss_3:912576426950148107> **يلا هات اصدقائك وتعلا استمتع بدلا من ضغط المذكره عليك <@${member.id}>** <a:ss_3:912576426950148107>`).then((dark) => {
dark.delete({timeout: 9900});
}).then((e)=> {console.log(`
    ==========================================
    ||                                      ||
    || user id : ${member.user}             ||
    ||                                      ||
    ==========================================
        `)}
)
});

client.on('guildMemberAdd', async (member) => {
const log = client.channels.cache.get("918543381116911616")
log.send(`> <a:ss_4:912576459225329674> **شرفتنا يابرو في المسابقه المتواضعه ~~=~~ <@${member.id}>** <a:ss_4:912576459225329674>`).then((dark) => {
dark.delete({timeout: 9900});
}).then((e)=> {console.log(`
    ==========================================
    ||                                      ||
    || user id : ${member.user}             ||
    ||                                      ||
    ==========================================
        `)}
)
});

client.on('guildMemberAdd', async (member) => {
const log = client.channels.cache.get("918543401463468132")
log.send(`> <a:ss_4:912576459225329674> **اقراء قوانين المسابقه ~~=~~ <@${member.id}>** <a:ss_4:912576459225329674>`).then((dark) => {
dark.delete({timeout: 9900});
}).then((e)=> {console.log(`
    ==========================================
    ||                                      ||
    || user id : ${member.user}             ||
    ||                                      ||
    ==========================================
        `)}
)
});

client.on('guildMemberAdd', async (member) => {
const log = client.channels.cache.get("911053583733100565")
log.send(`> <a:ss_3:912576426950148107> **يلا هات اصدقائك وتعلا استمتع بدلا من ضغط المذكره عليك <@${member.id}>** <a:ss_3:912576426950148107>`).then((dark) => {
dark.delete({timeout: 9900});
}).then((e)=> {console.log(`
    ==========================================
    ||                                      ||
    || user id : ${member.user}             ||
    ||                                      ||
    ==========================================
        `)}
)
});

client.on('guildMemberAdd', async (member) => {
const log = client.channels.cache.get("905075262285283368")
log.send(`> <a:ss_3:912576456385785887> **برجاء الاختيار الرول الخاصه بيك للمنشن بيها بدلا من منشن everyone <@${member.id}>** <a:ss_3:912576456385785887>`).then((dark) => {
dark.delete({timeout: 9900});
}).then((e)=> {console.log(`
    ==========================================
    ||                                      ||
    || user id : ${member.user}             ||
    ||                                      ||
    ==========================================
        `)}
)
});


client.on('guildMemberAdd', angelo => {
    angelo.createDM().then(function (channel) {
return channel.send(
  new Discord.MessageEmbed()
  .setThumbnail(angelo.guild.iconURL({ dynamic: true }))
  .setColor("#ba1cc9")
  .setDescription(`<a:ss_4:912693440708489247> **نورتونا في سيرفرنا المتواضع** <a:ss_4:912693440708489247>

> <:ss_6:912591546665279489> \`1*\`**شوف اخبار السيرفر من هنا : <#905075262285283368>**

> <:ss_6:912591546665279489> \`2*\`**كل جمعه في جيفا واي هنا : <#916441936712310786>**

> <:ss_6:912591546665279489> \`3*\`**لو عايز تشتري شي هنا : <#891871672418861076>**

**~~=================~~**

> <a:ss_9:912663260107505704> **Owner Server TS : <@879572487288025189>**

> <a:ss_7:912576472638685234> **Link ~~=~~ https://discord.gg/jKmBVnF8D8 **`)
.setImage(`https://cdn.discordapp.com/attachments/822300177124818964/907788463938621530/TERORE.TSDARK_MASTER.gif`)
  .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
)
    }
    )});

    client.on('guildMemberAdd', angelo => {
    angelo.createDM().then(function (channel) {
return channel.send(`<a:ss_6:912591545755119679> **فروعنا ~~=~~ ليس لدينا اي فرع اخر غير دول تشرفنا يابرو** <a:ss_6:912591545755119679>

> \`1*\` ** https://discord.gg/jKmBVnF8D8 **

> \`2*\` ** https://discord.gg/f5fqAY2yFK **`)
    }
    )});


/////////////----
 client.on("message", (message)=>{
   
  if(message.content === "لينك" || message.content === "link" || message.content === "Link" || message.content === "LINK" || message.content === "رابط"){
    message.delete({timeout: 100});
message.lineReply(`> <a:ss_3:912576456385785887> ** https://discord.gg/jKmBVnF8D8 **<a:ss_4:912591547860672542>`)
 }})

/////////////----


/* if (!owners.includes(message.author.id))
      return message.lineReply(
        new Discord.MessageEmbed()
        .setColor("#fedf36")
        .setDescription(`**(انت لست من الاونر الخاص بالبوت)**`)
      ).then(r=>{
        r.react("913366561039998986")
      })*/



client.on('message', function(message) {
    if(message.content.startsWith(prefix + "help")){
      return message.lineReply(
        new Discord.MessageEmbed()
        .setColor("#333333")
        .setDescription(`> \`-\` **تأكد من الخاص بيك انه مفتوح ليستم ارسال الرساله في الخاص**`)
      )
      if (!message.member.roles.cache.has('911016874689581157')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_7:913366548654202912> **انت لست من التيم \`الادمن\`** <a:ss_7:913366548654202912>
        <:ss_7:913484994888990762> **User : <@${message.author.id}>** <:ss_7:913484994888990762>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});
message.author.send(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
  .setColor("333333")
  .setDescription(`> \`-\` **Please Wait Now** <a:ss_4:912591547860672542>`)
  
).then(r =>{
  setTimeout(function(){
    r.react("874511229538938891")
    r.edit(
      new Discord.MessageEmbed()
      .setColor(`#fedf36`)
      .setDescription(`> \`1#\` **${prefix}close __\`قفل التقديم الخاص بتيرور\`__**

> \`2#\` **${prefix}open __\`فتح تقديم  الخاص بتيرور\`__**

> \`3#\` **${prefix}all-open __\`فتح جميع التيكتات\`__**

> \`4#\` **${prefix}all-close __\`قفل جميع التيكتات\`__**

> \`5#\` **${prefix}sug-system __\`اقتراح بنظام الريورد\`__**

> \`6#\` **${prefix}sug-giveaway __\`اقتراح جيفا واي\`__**

> \`7#\` **${prefix}sug-feedback __\`تنزيل كلام للفيد باك\`__**

> \`8#\` **${prefix}feedback __\`تنزيل قائمه الفيد باك الخاصه برأي العضو\`__**

> \`9#\` **${prefix}dm __\`ارساله رساله خاص للعضو\`__**

> \`10\` **${prefix}say __\`اعاده ارسال الرساله بلبوت\`__**

> \`11#\` **${prefix}support __\`الدعم الفني للبوت\`__**

> \`12#\` **${prefix}leave __\`خروج البوت من سيرفر معين\`__**

> \`13#\` **${prefix}servers __\`ظهور بوت في كام سيرفر\`__**

> \`14#\` **${prefix}set-welcome __\`تنزيل الترحيب في اتشنل مخصصه\`__**

> \`15#\` **${prefix}line + ${prefix}خط __\`تنزيل لاين\`__**

> \`16#\` **${prefix}embed __\`تنزيل امبيد\`__**

> \`17#\` **${prefix}b-list __\`تنزيل رساله ملئ بيانات\`__**

> \`18#\` **${prefix}sug-spam __\`اقتراح فتح الشات لعمل الااسبام رسائل\`__**
~~**===================**~~

<a:ss_3:912576456385785887> **Apply Team** <a:ss_3:912576456385785887>

<a:ss_8:909557774608896001> **${prefix}t-date \`تنزيل رساله ملئ بيانات لدخول التيم\`**

<a:ss_8:909557774608896001> **${prefix}t-rules \`تنزيل رساله قوانين لدخول التيم\`**

~~**===================**~~

<a:ss_3:912576456385785887> **Date Team Tickets** <a:ss_3:912576456385785887>

<a:ss_8:909557774608896001> **${prefix}logo \`تنزيل بيانات التصاميم\`**

<a:ss_8:909557774608896001> **${prefix}bot \`تنزيل بيانات البوتات\`**

~~**===================**~~

<a:ss_3:912576456385785887> **Commend Tax** <a:ss_3:912576456385785887>

<a:ss_8:909557774608896001> **${prefix}tax __\`حسب الضريبه البائع\`__**

<a:ss_8:909557774608896001> **${prefix}wa __\`حسب جميع تفاصيل البيع\`__**

~~**===================**~~

<a:ss_3:912576456385785887> **Prices** <a:ss_3:912576456385785887>

<a:ss_8:909557774608896001> **${prefix}p-d-c \`نزول الاسعار التصاميم بالكريدت\`**

<a:ss_8:909557774608896001> **${prefix}p-d-le \`نزول الاسعار التصاميم بالفلوس\`**

<a:ss_8:909557774608896001> **${prefix}p-b-c \`نزول الاسعار البوتات بالكريدت\`**

<a:ss_8:909557774608896001> **${prefix}p-b-le \`نزول الاسعار البوتات بالفلوس\`**

<a:ss_8:909557774608896001> **${prefix}p-st-c \`نزول الاسعار اميلات استيم بالكريدت\`**

<a:ss_8:909557774608896001> **${prefix}p-t-c \`نزول الاسعار تيك توك بالكريدت\`**

<a:ss_8:909557774608896001> **${prefix}p-i-c \`نزول الاسعار اميلات الانستجرام بالكريدت\`**

~~**===================**~~

<a:ss_3:912576456385785887> **Test Apply** <a:ss_3:912576456385785887>

<a:ss_8:909557774608896001> **${prefix}t-insta \`تنزيل ليست للتيست بصوره وكل انتسجرام\`**

<a:ss_8:909557774608896001> **${prefix}t-tiktok \`تنزيل ليست للتيست بصوره وكل تيك توك\`**

`)
.setThumbnail(message.guild.iconURL({ dynamic: true }))
    )
  }, 20000)
})
 }})


client.on('message', function(message) {
    if(message.content.startsWith(prefix + "close")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setColor("#fedf36")
  .setDescription(`**التقديم __مقفول__ في تيرور حاليأّ**`)
  
).then(r =>{
  r.react("874510878618320907");
})
 }})

 client.on('message', function(message) {
    if(message.content.startsWith(prefix + "open")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setColor("#1ac70a")
  .setDescription(`**التقديم __مفتوح__ في تيرور حاليأّ**`)

).then(r =>{
  r.react("874510947304210482");
})
 }})

 client.on('message', function(message) {
    if(message.content.startsWith(prefix + "all-open")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor("#ffffff")
  .setDescription(`> \`#\` **Apply terorr : __Open__**
> \`#\` **Partner : __Open__**
~~================~~
> \`-\` **Apply terorr Ticket : <#905118421061079121>**
> \`-\` **Partner Ticket : <#902669497498996746>**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
  
).then(r =>{
  r.react("874511229538938891");
})
 }})

  client.on('message', function(message) {
    if(message.content.startsWith(prefix + "all-close")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor("#fedf36")
  .setDescription(`> \`#\` **Apply terorr : __Close__**
> \`#\` **Partner : __Close__**
~~================~~
> \`-\` **Apply terorr Ticket : <#905118421061079121>**
> \`-\` **Partner Ticket : <#902669497498996746>**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
  
).then(r =>{
  r.react("874510869118189588");
})
 }})

   client.on('message', function(message) {
    if(message.content.startsWith(prefix + "sug-system")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setColor("#13d5e0")
  .setDescription(`**ايه رأيكم نعمل نظام الريوارد**`)
  
).then(r =>{
  r.react("874510955294392390");
  r.react("874510869118189588");
})
 }})


 client.on('message', function(message) {
    if(message.content.startsWith(prefix + "sug-spam")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setColor("#13d5e0")
  .setDescription(`**ايه رأيكم نفتح الشات واخر شخص يكتب ياخد 15الألف كريدت**`)
  
).then(r =>{
  r.react("874510955294392390");
  r.react("874510869118189588");
})
 }})

    client.on('message', function(message) {
    if(message.content.startsWith(prefix + "sug-giveaway")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  
  .setColor("#13d5e0")
  .setDescription(`**ايه رأيكم نعمل جيفا واي**`)
  
).then(r =>{
  r.react("874510955294392390");
  r.react("874510869118189588");
})
 }})

     client.on('message', function(message) {
    if(message.content.startsWith(prefix + "sug-feedback")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(`> \`#\` **برجاء اي شخص كسب في الجيفاواي برجاء يكتب  فيدباك حلو عن السيرفر**
> \`-\` **Channel Feedback Giveaway : <#879538149242576946>**`).then(r =>{
  r.react("913366535433752617");
  r.react("913366541280636929")
})
 }})


      client.on('message', function(message) {
    if(message.content.startsWith(prefix + "feedback")){
      message.delete({timeout: 100});
message.lineReply(`> \`#\` **عندما الأنتهاء الطلب الخاصه بيك من التيم**
> \`#\` **برجاء كتابه كلمه حلوا علي الشخص الي عمل الخدمه ليك وكلمه حلوا للاستوري**
> \`-\` **Channel Feedback : <#878382778369060936>**`).then(r =>{
  r.react("913366535433752617");
  r.react("913366541280636929")
})
 }})
 ////////////////------


/*
 client.on('message', poorcode => {
  if(poorcode.content.startsWith("السعر")){
    poorcode.delete({timeout : 1000})
  let owner =  client.users.cache.get("867582744054071296");
 
  let args = poorcode.content.split(' ').slice(' ').join(" ")
     let Dark = new Discord.MessageEmbed()
     .setAuthor(poorcode.author.tag,poorcode.author.avatarURL())
      .setDescription(`\`${args}\` : السبة هي\n صاحب السبة هو : <@${poorcode.author.id}>  `)
      .setFooter(`ID : ${poorcode.author.id}`)
        .setColor('#db0000')
     owner.send(Dark)
     poorcode.channel.send(`${poorcode.author}`)
     poorcode.reply(
       new Discord.MessageEmbed()
       .setColor("#ffffff")
       .setDescription(`> \`-\` **Fales : ${args}**
> \`-\` **true : الس$ر**`)
     )
   }
   
})

*/

//----------------



require('discord-reply')
const color = '#ffffff';

const description = ``;


client.on('message', message => {
  
    if (message.content.startsWith(prefix + "invite")) {
      message.react("847937060614570005")
      message.delete({timeout: 100});
        var embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(`#ffffff`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setDescription(description)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
         message.author.send(embed);
         message.lineReply(
  new Discord.MessageEmbed()
  .setColor("#ffffff")
  .setDescription(`> <:ss_1:912693439949336637> \`#\` **تم ارسال بيانات لك في الخاص** <:emoji_19:847937060614570005>
> <:emoji_11:847936694951084073> \`#\` **الشخص الي كتب الرساله : ${message.author}**`)
)
    }
})



///////////////
client.on('message', message => {
 if(message.content.startsWith(prefix+ "dm")) {
   if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
  const args = message.content.split(" ").slice(1).join(" ");
if (!args) return message.lineReply(`برجاء الكتابه الرساله الي هترسل اليه`)
const user = message.mentions.users.first();
if(!user) return message.lineReply (`برجاء المنشن علي الشخص`)
 user.send(
   new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
   .setColor("#ffffff")
   .setDescription(`> <a:emoji_119:877798738565939221> \`#\` **From : ${message.author}**


> <a:780110531850797118:874511491146084373> \`#\` **Dm Meesage :** ${args}



> <a:798198912984285236:877798578960101386> \`#\` **__Owner__ Server : <@845150003777503243>**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
 ).catch(error => message.lineReply(
   new Discord.MessaegEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
   .setColor("#fff")
   .setDescription(`> <:emoji_127:878811910387154945> \`/\` **خاص الشخص الذي منشنتله الخاص بيه مقفول**
> <a:emoji_93:867051973567184906> \`#\` **Erorr User : <@${user.id}>**
> <:emoji_11:847936694951084073> \`!\` **User Message : ${message.author}**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
    ))
    message.delete({timeout : 2000})
 message.lineReply(
   new Discord.MessageEmbed()
   .setColor("#ffffff")
   .setDescription(`> <a:emoji_39:874511229538938891> \`#\` **تم ارسال الرساله بنجاح** <a:emoji_39:874511229538938891> 
> <:members:874511148064575509> \`#\` **العضو المرسل اليه : <@${user.id}>**
> <:roles:874511125843177573> \`#\` **الشخص الي بعت الرساله : ${message.author}**`)
 )
  
 }
});


 client.on("message", (message)=>{
  if(message.content.startsWith( "<@894619553210974259>") || message.content.startsWith( "<@!894619553210974259>")){
    message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setColor("#ffffff")
  .setTitle(`> <a:emoji_39:874511229538938891> **تم ارسال بيانات** <a:emoji_39:874511229538938891>`)
  .setDescription(`> \`/\` **__Prefix__ : \`${prefix}\`**
> \`/\` **__help__ : \`${prefix}invite\`**
> \`/\` **__support__ : \`${prefix}support\`**
> \`-\` **Message : ${message.author}**`)
)
 }})

 
  client.on("message", (message)=>{
  if(message.content.startsWith(prefix+"support")){
    message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setColor("#ffffff")
  .setTitle(`> <a:emoji_39:874511229538938891>**تم ارسال بيانات** <a:emoji_39:874511229538938891>`)
  .setDescription(`> <a:REDFIRE:874511322266599494> \`#\` **[SUPPORT SERVER STORE](https://discord.gg/KMS3AjaRtT)**
> <a:word:885814367143223370> \`#\` **[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=867582744054071296&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D867582744054071296%26permissions%3D8%26scope%3Dbot&scope=bot)**
> <a:Cat_198_48:874512386101481492> \`#\` **__OWNER__ SERVER : <@845150003777503243>**`)
)
 }})


 
     client.on('message', function(message) {
    if(message.content.startsWith(prefix + "sug-feedback")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(`> \`#\` **برجاء اي شخص كسب في الجيفاواي برجاء يكتب  فيدباك حلو عن السيرفر**
> \`-\` **Channel Feedback Giveaway : <#879538149242576946>**`).then(r =>{
  r.react("874511186111119410");
  r.react("874512404514500610")
})
 }})


require('discord-reply')
client.on("message", async dark => {
  
    if (dark.author.bot) return;
    if (dark.channel.type == "dm") return;
    if (!dark.content.startsWith(prefix)) return;
    const args = dark.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase()
    if (command === "say") {
      if (!dark.guild.member(dark.author).hasPermission('MANAGE_CHANNELS'))
            return dark.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(dark.author.tag, dark.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`MANAGE_CHANNELS\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!dark.guild.me.hasPermission('MANAGE_CHANNELS'))
            return dark.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(dark.author.tag, dark.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`MANAGE_CHANNELS\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
        dark.delete ({timeout : 100});
        var arg = dark.content.split(' ').slice(1).join(' ')
        dark.lineReply(arg)
    }
});
///////////////////////

////////////////////////


client.on("message", dark => {
     if(dark.content.startsWith("test")) {
         let rewards = [``,``];
          
         let prices = rewards[Math.floor(Math.random() * rewards.length)]; 

         let mochakisgembed = (`**`+ prices +`**`)
         
         dark.channel.send(mochakisgembed)
     }
 })

/////////////////////
const owner = "845150003777503243";

client.on("message", async message => {
if (message.content.startsWith(prefix + "leave")) {
if (!owner.includes(message.author.id)) return;
let args = message.content.split(" ")[1];
if (!args) message.lineReply(new Discord.MessageEmbed()
.setColor("RED")
.setTitle(`**Please Type Server ID**`));
let Guild = client.guilds.cache.get(args);
if (!Guild) return message.lineReply(new Discord.MessageEmbed()
.setColor("RED")
.setTitle(`**Invalid Server ID**`));
Guild.leave();
message.lineReply(new Discord.MessageEmbed()
.setColor("RED")
.setTitle(`**✅ Done Leave \`${Guild.name}\`**`)
.setFooter(client.user.username)
.setTimestamp());
  }
});


client.on('message', message => {
    if(message.content === prefix + "servers") {
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle('```انت لست من الادمن-❌```')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
            
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle('```ليس معاك رول الادمن-❌```')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        );
      let guilds = client.guilds.cache.map(guild => `**__server:__**\n` + guild.name + ` (`+guild.id+`) ` + `\`` + guild.members.cache.size +`\`** members.**`)
      if(guilds.length > 3000) return message.lineReply(new Discord.MessageEmbed()
      .setTitle('**__Servers__**')
      .setDescription(guilds, {split: true}))
      if(guilds.length < 3000) return message.lineReply(new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor(`#ffffff`)
    .setTitle('**(__ده بيطلع جميع البيانات السيرفرات الي البوت الي فيها__)**')
    .setFooter(`Request By ${message.author.tag}`)
    .addField("(all servers) :", `\`${client.guilds.cache.size}\``, true)
    
    .setDescription(guilds))
}
});

/////////////////////



client.on("message", dark => {
  let wprefix = "!"
    if (dark.content.startsWith(wprefix + "set-welcome")) {
       if (!dark.guild.member(dark.author).hasPermission('ADMINISTRATOR'))
            return dark.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(dark.author.tag, dark.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle('```انت لست من الادمن-❌```')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
            
        );
if (!dark.guild.me.hasPermission('ADMINISTRATOR'))
            return dark.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(dark.author.tag, dark.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle('```ليس معاك رول الادمن-❌```')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        ); {
        let wmochakis = dark.mentions.channels.first()
    
    if(!wmochakis) { return dark.lineReply(
      new Discord.MessageEmbed()
      .setAuthor(dark.author.tag, dark.author.avatarURL({ dynamic: true }))
      .setColor("#f9f6f3")
      .setDescription(`**برجاء المنشن علي الاتشنل الخاصه بترحيب**`)
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
    ).then(r=> {
      r.react("874511019085529098")
    })
    }
    
    
    db.set(`welcomechannel_${dark.guild.id}`, wmochakis.id)
    
    dark.lineReply(
      new Discord.MessageEmbed()
      .setAuthor(dark.author.tag, dark.author.avatarURL({ dynamic: true }))
      .setColor("#f9f6f3")
      .setDescription(`> **The channel has been set successfully**
> **Channels : ${wmochakis}**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
    ).then(r=> {
      r.react("909598516052119592")
    })
    }
    }
  })
const InvitesTracker = require
('@androz2091/discord-invites-tracker');
client.on("guildMemberAdd", (memberadd,type, invite) => {
  let channelget = db.get(`welcomechannel_${memberadd.guild.id}`);
  let messagechannel = client.channels.cache.get(channelget);
  if(channelget === null) { 
    return;
  }
  messagechannel.send(
    new Discord.MessageEmbed()
    .setColor("#f9f6f3")
    .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
    .setDescription(`<a:emoji_370:910149676441927780> **Welcome To Member** <a:emoji_370:910149676441927780>

\`=================\`
<a:ss_3:909079517329494027> | **Welcome To Server : \`${memberadd.guild.name}\`**
<a:ss_3:909079517329494027> | **Welcome To Member : ${memberadd.user}**
<a:ss_1:909974685163343872> | **Member ID : \`${memberadd.id}\`**
<a:ss_4:909598516052119592> | **MemberCount : \`${memberadd.guild.memberCount}\`**`)
.setImage(`https://cdn.discordapp.com/attachments/910328246455914496/910331745725993050/banner-welcome.gif`)
  ).then(s=>{
  s.react("874511186111119410");
  s.react("874512404514500610")
    
  })
})


 client.on("message", (message)=>{
  if(message.content === "لينك" || message.content === "link" || message.content === "Link" || message.content === "LINK" || message.content === "رابط"){
    message.delete({timeout: 100});
message.lineReply(`> <a:settings:867053381733974076> ** https://discord.gg/jKmBVnF8D8 **<:protect:872016699241680936>`)
 }})

   client.on("message", (message)=>{
  if(message.content === prefix+"line"){
    message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setColor("#ffffff")
  .setImage(`https://cdn.discordapp.com/attachments/822300177124818964/907788463938621530/TERORE.TSDARK_MASTER.gif`)
)
 }})

    client.on("message", (message)=>{
  if(message.content === prefix+"خط"){
    message.delete({timeout: 100});
message.lineReply(`https://cdn.discordapp.com/attachments/822300177124818964/907788463938621530/TERORE.TSDARK_MASTER.gif`)
 }})


 client.on('message', message => {
if(message.author.bot) return;
if(message.channel.id == '878382778369060936') {
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setDescription(`> <a:ss_5:912663254126444565>  **Thanks For Feedback** <a:ss_2:912576432675373076> `)
.setImage('https://cdn.discordapp.com/attachments/822300177124818964/907788463938621530/TERORE.TSDARK_MASTER.gif')
.setColor('#fedf36')
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
message.lineReply(embed)
}
})



 client.on('message', message => {
if(message.author.bot) return;
if(message.channel.id == '879538149242576946') {
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setDescription(`> <a:ss_5:912663254126444565>  **Thanks For Feedback** <a:ss_2:912576432675373076> `)
.setImage('https://cdn.discordapp.com/attachments/822300177124818964/907788463938621530/TERORE.TSDARK_MASTER.gif')
.setColor('#fedf36')
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
message.lineReply(embed)
}
})



client.on('message', function(message) {
    if(message.content.startsWith(prefix + "P-D-C")||message.content.startsWith(prefix + "p-d-c")){
   message.delete({timeout: 600})
    if (!message.member.roles.cache.has('878402190149029918')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_7:913366548654202912> **انت لست من التيم \`التيم\`** <a:ss_7:913366548654202912>
        <:ss_7:913484994888990762> **User : <@${message.author.id}>** <:ss_7:913484994888990762>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setTitle(`<a:ss_3:912576456385785887> **تم تنزيل البيانات الاسعار التصاميم \`بكريدت\`** <a:ss_3:912576456385785887>`)
  .setColor("#fedf36")
  .setDescription(`<a:ss_3:912576426950148107>**اسعار التصاميم | Design prices**<a:ss_3:912576426950148107>

> \`1#\` <:ss_1:912693439949336637> **LOGO __=>__ \`230K\`**

> \`2#\` <:ss_1:912693439949336637> **LOGO GIF __=>__ \`280K\`**

> \`3#\` <:ss_1:912693439949336637> **LINE __=>__ \`40k\`**

> \`4#\` <:ss_1:912693439949336637> **LINE GIF __=>__ \`80k\`**

> \`5#\` <:ss_1:912693439949336637> **BANNER __=>__ \`130k\`**

> \`6#\` <:ss_1:912693439949336637> **SCRIM RESULTS __=>__ \`130K\`**

> \`7#\` <:ss_1:912693439949336637> **SCRIM INFO __=>__ \`80K\`**

> \`8#\` <:ss_1:912693439949336637> **SCRIM RESULTS TDM __=>__ \`140K\`**

> \`9#\` <:ss_1:912693439949336637> **SCRIM PRIZE TDM __=>__ \`130K\`**

> \`10#\` <:ss_1:912693439949336637> **SCRIM PACKAGE TDM __=>__ \`400K\`**

> \`11#\` <:ss_1:912693439949336637> **SCRIM PACKAGE __=>__ \`570K\`**

> \`12#\` <:ss_1:912693439949336637> **THANKS FOR MEMBER __=>__ \`100K\`**

> \`13#\` <:ss_1:912693439949336637> **WELCOME __=>__ \`80K\`**

> \`14#\` <:ss_1:912693439949336637> **WELCOME GIF __=>__ \`140K\`**

> \`15#\` <:ss_1:912693439949336637> **PROVE YOURSELF __=>__ \`60K\`**

> \`16#\` <:ss_1:912693439949336637> **PROVE YOUR SELF GIF __=>__ \`110K\`**

> \`16#\` <:ss_1:912693439949336637> **RULES __=>__ \`70K\`**

> \`17#\` <:ss_1:912693439949336637> **PROVES LIST __=>__ \`180K\`**

**~~================~~**
<:ss_9:912678365696245770> **تحذيرات | Warning** <:ss_9:912678365696245770>

> \`1-\` **ملحوظه : اي تصميم هنا في السيرفر بيتعمل يدوي اقصا حاد للموعد التصميم لنفس اليوم يا يوم البعده لأن التصميم بيحتاج وقت وتفكير**

> \`2-\` **بيتم بعت نصف المبلغ للديزينر : لبدء الشغل**

> \`3-\` **عند الاوردر وبعت نصف المبلغ ل ديزينر بعد الشغل اتعمل وبعتلك عيانات من الوجو : عند الغاء الطلب بيتم نقص من المبلغ الربع من اي مبلغ عند الغاء الطلب**`)
  .setImage(`https://cdn.discordapp.com/attachments/822300177124818964/878808258205331476/PRICES_TERORR.TS_DARK_MASTER.gif`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
).then(r=>{
  r.react("912576448819241002")
})
 }})


 
client.on('message', function(message) {
    if(message.content.startsWith(prefix + "P-t-C")||message.content.startsWith(prefix + "p-t-c")){
   message.delete({timeout: 600})
    if (!message.member.roles.cache.has('878402190149029918')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_7:913366548654202912> **انت لست من التيم \`التيم\`** <a:ss_7:913366548654202912>
        <:ss_7:913484994888990762> **User : <@${message.author.id}>** <:ss_7:913484994888990762>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  
  .setColor("#333333")
  .setDescription(`> \`-\` **Please Wait Now** <a:ss_4:912591547860672542>`)
).then(r=>{
  setTimeout(function(){
    r.react("912576448819241002")
    r.edit(
      new Discord.MessageEmbed()
      .setTitle(`<a:ss_3:912576456385785887> **تم تنزيل البيانات الاسعار تيك توك \`بكريدت\`** <a:ss_3:912576456385785887>`)
      .setColor("#690bd3")
      .setDescription(`**~~========================~~**

<:tiktok:916109657393758269> __**25**__ ~~=~~ \`5k\`

<:tiktok:916109657393758269> __**50**__ ~~=~~ \`15k\`

<:tiktok:916109657393758269> __**100**__ ~~=~~ \`40k\`

<:tiktok:916109657393758269> __**200**__ ~~=~~ \`50k\`

<:tiktok:916109657393758269> __**500**__ ~~=~~ \`80k\`

<:tiktok:916109657393758269> __**1000**__ ~~=~~ \`150k\`

**~~========================~~**

<a:ss_3:912576426950148107> **للمساعده علي السيلر** <a:ss_3:912576426950148107>

> <:ss_1:912693439949336637> \`1*\` **بعت __الاسم__ الخاص بيك علي تيك توك**

> <:ss_1:912693439949336637> \`1*\` **بعت __الصوره__ الخاص بيك علي تيك توك**`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setImage(`https://cdn.discordapp.com/attachments/822300177124818964/907788463938621530/TERORE.TSDARK_MASTER.gif`)
    )
  }, 20000)
})
console.log(`
====================================
==   Done Send Now Commend :)     ==
====================================

`)
 }})

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "P-i-C")||message.content.startsWith(prefix + "p-i-c")){
   message.delete({timeout: 600})
    if (!message.member.roles.cache.has('878402190149029918')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_7:913366548654202912> **انت لست من التيم \`التيم\`** <a:ss_7:913366548654202912>
        <:ss_7:913484994888990762> **User : <@${message.author.id}>** <:ss_7:913484994888990762>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  
  .setColor("#333333")
  .setDescription(`> \`-\` **Please Wait Now** <a:ss_4:912591547860672542>`)
).then(r=>{
  setTimeout(function(){
    r.react("912576448819241002")
    r.edit(
      new Discord.MessageEmbed()
      .setTitle(`<a:ss_3:912576456385785887> **تم تنزيل البيانات الاسعار انستجرام \`بكريدت\`** <a:ss_3:912576456385785887>`)
      .setColor("#690bd3")
      .setDescription(`**~~========================~~**

<a:ss_6:912576437612081233> __**25**__ ~~=~~ \`5k\`

<a:ss_6:912576437612081233> __**50**__ ~~=~~ \`15k\`

<a:ss_6:912576437612081233> __**100**__ ~~=~~ \`40k\`

<a:ss_6:912576437612081233> __**200**__ ~~=~~ \`50k\`

<a:ss_6:912576437612081233> __**500**__ ~~=~~ \`80k\`

<a:ss_6:912576437612081233> __**1000**__ ~~=~~ \`150k\`

**~~========================~~**

<a:ss_3:912576426950148107> **للمساعده علي السيلر** <a:ss_3:912576426950148107>

> <:ss_1:912693439949336637> \`1*\` **بعت __الاسم__ الخاص بيك علي انستجرام**

> <:ss_1:912693439949336637> \`1*\` **بعت __الصوره__ الخاص بيك علي انستجرام**`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setImage(`https://cdn.discordapp.com/attachments/822300177124818964/907788463938621530/TERORE.TSDARK_MASTER.gif`)
    )
  }, 20000)
})
console.log(`
====================================
==   Done Send Now Commend :)     ==
====================================

`)
 }})

 


client.on('message', function(message) {
    if(message.content.startsWith(prefix + "P-D-LE")||message.content.startsWith(prefix + "p-d-le")){
      message.delete({timeout: 600})
    if (!message.member.roles.cache.has('878402190149029918')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_7:913366548654202912> **انت لست من التيم \`التيم\`** <a:ss_7:913366548654202912>
        <:ss_7:913484994888990762> **User : <@${message.author.id}>** <:ss_7:913484994888990762>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setTitle(`<a:ss_3:912576456385785887> **تم تنزيل البيانات الاسعار التصاميم \`بفلوس\`** <a:ss_3:912576456385785887>`)
  .setColor("#fedf36")
  .setDescription(`<a:ss_3:912576426950148107>**اسعار التصاميم | Design prices**<a:ss_3:912576426950148107>

> \`1#\` <:ss_1:912693439949336637> **LOGO __=>__ \`70LE\`**

> \`2#\` <:ss_1:912693439949336637> **LOGO GIF __=>__ \`50LE\`**

> \`3#\` <:ss_1:912693439949336637> **LINE __=>__ \`15LE\`**

> \`4#\` <:ss_1:912693439949336637> **LINE GIF __=>__ \`25LE\`**

> \`5#\` <:ss_1:912693439949336637> **BANNER __=>__ \`20LE\`**

> \`6#\` <:ss_1:912693439949336637> **SCRIM RESULTS __=>__ \`25LE\`**

> \`7#\` <:ss_1:912693439949336637> **SCRIM INFO __=>__ \`20LE\`**

> \`8#\` <:ss_1:912693439949336637> **SCRIM RESULTS TDM __=>__ \`25LE\`**

> \`9#\` <:ss_1:912693439949336637> **SCRIM PRIZE TDM __=>__ \`30LE\`**

> \`10#\` <:ss_1:912693439949336637> **SCRIM PACKAGE TDM __=>__ \`130LE\`**

> \`11#\` <:ss_1:912693439949336637> **SCRIM PACKAGE __=>__ \`150LE\`**

> \`12#\` <:ss_1:912693439949336637> **THANKS FOR MEMBER __=>__ \`17LE\`**

> \`13#\` <:ss_1:912693439949336637> **WELCOME __=>__ \`15LE\`**

> \`14#\` <:ss_1:912693439949336637> **WELCOME GIF __=>__ \`20LE\`**

> \`15#\` <:ss_1:912693439949336637> **PROVE YOURSELF __=>__ \`15LE\`**

> \`16#\` <:ss_1:912693439949336637> **PROVE YOUR SELF GIF __=>__ \`20LE\`**

> \`16#\` <:ss_1:912693439949336637> **RULES __=>__ \`15LE\`**

> \`17#\` <:ss_1:912693439949336637> **PROVES LIST __=>__ \`30LE\`**

**~~================~~**
<:ss_9:912678365696245770> **تحذيرات | Warning** <:ss_9:912678365696245770>

> \`1-\` **ملحوظه : اي تصميم هنا في السيرفر بيتعمل يدوي اقصا حاد للموعد التصميم لنفس اليوم يا يوم البعده لأن التصميم بيحتاج وقت وتفكير**

> \`2-\` **بيتم بعت نصف المبلغ للديزينر : لبدء الشغل**

> \`3-\` **عند الاوردر وبعت نصف المبلغ ل ديزينر بعد الشغل اتعمل وبعتلك عيانات من الوجو : عند الغاء الطلب بيتم نقص من المبلغ الربع من اي مبلغ عند الغاء الطلب**`)
  .setImage(`https://cdn.discordapp.com/attachments/822300177124818964/878808258205331476/PRICES_TERORR.TS_DARK_MASTER.gif`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
).then(r=>{
  r.react("912576448819241002")
})
 }})



client.on('message', function(message) {
    if(message.content.startsWith(prefix + "P-b-C")||message.content.startsWith(prefix + "p-b-c")){
   message.delete({timeout: 600})
    if (!message.member.roles.cache.has('878402190149029918')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_7:913366548654202912> **انت لست من التيم \`التيم\`** <a:ss_7:913366548654202912>
        <:ss_7:913484994888990762> **User : <@${message.author.id}>** <:ss_7:913484994888990762>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setTitle(`<a:ss_3:912576456385785887> **تم تنزيل البيانات الاسعار البوتات \`بكريدت\`** <a:ss_3:912576456385785887>`)
  .setColor("#fedf36")
  .setDescription(`~~**===================**~~

<a:ss_3:912576456385785887> **All Bot System Shop : \`900k\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot System : \`230k\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Music : \`70k\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot All Reply : \`100k\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot say | embed : \`50k\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Auto React : \`30k\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Auto Line : \`35k\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Auto Line Embed + Text : \`50k\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Tax : \`30k\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Giveaway : \`300k\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Brod Cast : \`160k\`** <a:ss_3:912576456385785887> *Don't Ban Discord :)*

~~**===================**~~`)
  .setImage(`https://cdn.discordapp.com/attachments/822300177124818964/907788463938621530/TERORE.TSDARK_MASTER.gif`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
).then(r=>{
  r.react("912576448819241002")
})
 }})


client.on('message', function(message) {
    if(message.content.startsWith(prefix + "P-D-LE")||message.content.startsWith(prefix + "p-b-le")){
   message.delete({timeout: 600})
    if (!message.member.roles.cache.has('878402190149029918')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_7:913366548654202912> **انت لست من التيم \`التيم\`** <a:ss_7:913366548654202912>
        <:ss_7:913484994888990762> **User : <@${message.author.id}>** <:ss_7:913484994888990762>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setTitle(`<a:ss_3:912576456385785887> **تم تنزيل البيانات الاسعار البوتات \`بالفلوس\`** <a:ss_3:912576456385785887>`)
  .setColor("#fedf36")
  .setDescription(`~~**===================**~~

<a:ss_3:912576456385785887> **All Bot System Shop : \`90L.E\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot System : \`25L.E\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Music : \`10L.E\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot All Reply : \`15L.E\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot say | embed : \`30L.E\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Auto React : \`5L.E\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Auto Line : \`8L.E\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Auto Line Embed + Text : \`15L.E\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Tax : \`8L.E\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Giveaway : \`35L.E\`** <a:ss_3:912576456385785887>

<a:ss_3:912576456385785887> **Bot Brod Cast : \`35L.E\`** <a:ss_3:912576456385785887> *Don't Ban Discord :)*

~~**===================**~~`)
  .setImage(`https://cdn.discordapp.com/attachments/822300177124818964/907788463938621530/TERORE.TSDARK_MASTER.gif`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
).then(r=>{
  r.react("912576448819241002")
})
 }})

 
client.on('message', function(message) {
    if(message.content.startsWith(prefix + "Nitro")||message.content.startsWith(prefix + "nitro")){
      message.delete({timeout: 600})
    if (!message.member.roles.cache.has('878402190149029918')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_7:913366548654202912> **انت لست من التيم \`التيم\`** <a:ss_7:913366548654202912>
        <:ss_7:913484994888990762> **User : <@${message.author.id}>** <:ss_7:913484994888990762>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setTitle(`<a:ss_3:912576456385785887> **تم تنزيل البيانات الاسعار التصاميم \`نايترو\`** <a:ss_3:912576456385785887>`)
  .setColor("#fedf36")
  .setDescription(`<a:ss_7:920794289607434300> **Nitro Classic : 450k**

<a:ss_7:920794289607434300> **Nitro Gaming : 750k**`)
  .setImage(`https://cdn.discordapp.com/attachments/822300177124818964/916518351247925298/0e3268c284ed94a5acd0943877f6cd9b.gif`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
).then(r=>{
  r.react("912576448819241002")
})
 }})


client.on('message', function(message) {
    if(message.content.startsWith(prefix + "p-st-c")||message.content.startsWith(prefix + "p-st-c")){
   message.delete({timeout: 600})
    if (!message.member.roles.cache.has('878402190149029918')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_7:913366548654202912> **انت لست من التيم \`التيم\`** <a:ss_7:913366548654202912>
        <:ss_7:913484994888990762> **User : <@${message.author.id}>** <:ss_7:913484994888990762>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setTitle(`<a:ss_3:912576456385785887> **تم تنزيل البيانات الاسعار اكونتات استيم \`بكريدت\`** <a:ss_3:912576456385785887>`)
  .setColor("#fedf36")
  .setDescription(`> <:stem:916684770170273794> **Small Account Few Games : \`15k\`** <:stem:916684770170273794>

> <:stem:916684770170273794> **Average Games Average : \`25k\`** <:stem:916684770170273794>

> <:stem:916684770170273794> **Many Games Account : \`35k\`** <:stem:916684770170273794>`)
  .setImage(`https://cdn.discordapp.com/attachments/822300177124818964/907788463938621530/TERORE.TSDARK_MASTER.gif`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
).then(r=>{
  r.react("912576448819241002")
})
 }})



 client.on("guildCreate", guild => {
  let logs= client.users.cache.get("845150003777503243")
        guild.channels.cache.find(channel =>channel.type === 'text' && channel.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE')).createInvite({maxAge: 0}).then(invite =>logs.send(invite.url).catch(err=>console.error(err))
        )
})




client.on('message', async normal => {
if (normal.content.startsWith(prefix + "embed")){
      if(!normal.member.hasPermission('MANAGE_MESSAGES')) return normal.reply(`You dont have permission`)
      let channel = normal.mentions.channels.first();
      if(!channel)return normal.lineReply(
        new Discord.MessageEmbed()
        .setColor("#ff9fff")
        .setDescription(`**برجاء المنشن علي الاتشنل ليتم تنزيل الامبيد**`)
      )
let authorMsg = m => m.author.id === normal.author.id;
normal.channel.send(new Discord.MessageEmbed()
    .setDescription("** Type the title of the embed**")).then(normal => {
normal.channel.awaitMessages(authorMsg , {max: 1,time: 30000,errors: ['time']})
.then(collected => {
  var title = collected.first().content;
  normal.channel.send(new Discord.MessageEmbed()
    .setDescription("** Type the description of the embed**")).then(normal => {
normal.channel.awaitMessages(authorMsg , {max: 1,time: 80000,errors: ['time']})
.then(collected => {
  var description = collected.first().content;
  normal.channel.send(new Discord.MessageEmbed()
    .setDescription("** Type the footer of the embed**")).then(normal => {
normal.channel.awaitMessages(authorMsg , {max: 1,time: 30000,errors: ['time']})
.then(collected => {
  var footer = collected.first().content;
  normal.channel.send(new Discord.MessageEmbed()
    .setDescription("** Type the color of the embed ,must be capital**")).then(normal => {
normal.channel.awaitMessages(authorMsg , {max: 1,time: 30000,errors: ['time']})
.then(collected => {
  var color = collected.first().content;
    var embed = new Discord.MessageEmbed()
.setTitle(`${title}`)
.setDescription(`${description}`)
.setColor(`${color}`)
.setFooter(`${footer}`)
.setTimestamp()
.setThumbnail(normal.guild.iconURL())
channel.send(embed).then(e=>{
  e.react("909079547583012874")
  e.react("909079545414549534")
})
normal.lineReply(
  new Discord.MessageEmbed()
  .setColor("#f9f6f3")
  .setDescription(`<a:ss_7:909082025317781544> **Done Send embed** <a:ss_7:909082025317781544>`)
).then(r=>{
  r.react("909082025317781544")
})
})
})
})
})
})
})
})
    })
    }})


    client.on('guildBanAdd', async (guild, user) => {
let owner = client.users.cache.find(user => user.id === '845150003777503243')
const fetchedLogs = await guild.fetchAuditLogs({
limit: 1,
type: 'MEMBER_BAN_ADD',
});
const banLog = fetchedLogs.entries.first();
if (!banLog) return owner.send(`**${user.tag}** was banned from **${guild.name}** but didnt find who banned him.`);
const { executor, target } = banLog;
if (target.id === user.id) {
owner.send(`> <:emoji50:867052378870906880> \`1#\` **Ban User : \`${user.tag}\` **

> <:LogoStoredark:863253022167793695> \`2#\` **Server Name : \`${guild.name}\`**

> <a:750760427109089280:889075547001475083> \`3#\` **Reason : \`${executor.tag}\`**

> <a:botdevelopar:867053337337790474> \`4#\` **Owner : <@845150003777503243>**`);
} else {
owner.send(`**${user.tag}** got banned in the guild **${guild.name}**,cannot find who banned him.`);
}
});


///////////////////



     client.on('message', function(message) {
    if(message.content.startsWith(prefix + "b-list")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setColor("#fedf36")
  .setDescription(`<a:ss_8:909079544126914600> **برجاء ملء هذا البيانات لمعرفه المشكله** <a:ss_8:909079544126914600>
\`\`\`css
> send Id : ()

> send user : ()

> send image user : ()

> send Message Black-list : ()
\`\`\`
<a:ss_8:909557774608896001> **ارسال بقيت البيانات الثانيه** <a:ss_8:909557774608896001>
\`\`\`css
> ارساله اسكرين بسبب دخولك لنشره بلاك ليست

> لو مشكله مع سيلر ابعت صوره تحويل + صوره للشات

> ايه السلعه موبعا والذي تم سرقه الخاصه بيك

> برجاء ارسال عينه من التيكت الذي تم فتحها
\`\`\`
<a:11889:910266909402988564> **__ملاحظه__ __~~:~~__ عند فتح تيكت وعدم ارسال البيانات الكفايه سيتم تحذيرك بعد ذالك هيتم تبنيدك ~~=~~ ممنوع الهزار داخل التيكت** <a:11889:910266909402988564>`)
).then(r=>{
   r.react("909082025317781544")
 })
 }})


      client.on('message', function(message) {
    if(message.content.startsWith(prefix + "t-date")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setColor("#fedf36")
  .setDescription(`<a:ss_8:909079544126914600> **برجاء ملء هذا البيانات لمعرفه بيانتك الشخصيه** <a:ss_8:909079544126914600>
\`\`\`css
> send name : ()

> send age : ()

> send Id : ()

> send year email : ()

> send way works : ()

> send screen shot feedback : ()

> send link server work : ()
\`\`\`
<a:11889:910266909402988564> **__ملاحظه__ __~~:~~__ عند فتح تيكت وعدم ارسال البيانات الكفايه سيتم تحذيرك بعد ذالك هيتم تبنيدك ~~=~~ ممنوع الهزار داخل التيكت** <a:11889:910266909402988564>`)
).then(r=>{
   r.react("909082025317781544")
 })
 }})


      client.on('message', function(message) {
    if(message.content.startsWith(prefix + "t-rules")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setColor("#fedf36")
  .setDescription(`<a:ss_8:909079544126914600> **برجاء قراء القوانين الخاصه بدخول تيم تيرورر** <a:ss_8:909079544126914600>
\`\`\`
1- ممنوع تخش في تيكت اي حد  من التيم

2- ممنوع الهزار في تيكت ول في الفيد باك

3- ممنوع تبعت لشخص ما اي شي برايفت مثل : عرضي احسن منه ب 10الألف لو جالي اسكرين ابندك

4- مطلوب منك كل جمعه تكون متواجد

5- السيرفر مش بياخد اي نسب بيع منك نهائي = المطلوب فقط كل بدء يوم الجمعه بعت للبنك الخاص للأستوري 30الألف

6- ممنوع اخذ الرول وعدم التفاعل = سيتم سحب الرول بدون نقاش

7- ممنوع بيع خاص نهائي عند شخص كلمك برايفت خليه يفتح تيكت لأمان = وعدم فتح تيكت وحصل مشكله السيرفر ليس ليه اي تدخل

8- ممنوع بيع شي في تيكت وعدم اخذ الرول بيها وينطبق علي نزل الاوفر = عند تم البيع السيرفر بياخد منك 50% من البيعه

9- ممنوع طلب اي رول + عند رائيه الاداره شغلك عالي وشغال سيتم ترقيتك حطا تاكن اداره

10- اهم شي تعرفه اننا هنا في السيرفر اخوات وايد وحده + التم كله بيحب الهزار

11- عند الشخص فتح تيكت يتم الرد عليه فقط اتفضل + عند طلب الشخص لو انت مش معاك الرول منشن علي الرول فقط وتغير اسمها علي حسب الطلب

12- عند مسك تيكت الخاصه بيك لازم يتم تغير اسم التيكت علي حسب الطلب ايه واسمك

13- عدم ترك التيكت لمده يومين

14- ممنوع تشتم شخص في تيكت حطا لو شتمك منشن لحد في الاداره فقط ومتردش عليه لو شتمك برايفت مع نفسك معاه

15- ممنوع التحويل بخارج التيكت لازم يكون في التيكت

16- ممنوع الهزار مع اي شخص في الاداره في تيكت ول بابلك ول اي شي غير التيم شات

17- ممنوع تكون اون لاين وعامل استاتيس اوف لاين = الاداره تعتقد ان انت مش بتفتح نهائي

18- اهم شي من كل ده يكون في (أمانه في كل شي)
\`\`\`
<a:11889:910266909402988564> **برجاء قراء القوانين جيده لعدم وقوع في اي مشكله** <a:11889:910266909402988564>`)
).then(r=>{
   r.react("909082025317781544")
 })
 }})


 client.on('message', function(message) {
    if(message.content.startsWith(prefix + "list")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setColor("#fedf36")
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription(`> <a:ss_6:912576439331741737> **Nitro : ~~(~~Done~~)~~** <a:ss_6:912576439331741737>

> <:ss_6:912576430636945428> **Spotify : ~~(~~Done~~)~~** <:ss_6:912576430636945428>

> <:ss_0:912591524745846804> **Netflix : ~~(~~Done~~)~~** <:ss_0:912591524745846804>

> <:tiktok:916109657393758269> **Folow & Share Tiktok : ~~(~~Done~~)~~** <:tiktok:916109657393758269>

> <a:ss_6:912576437612081233> **Folow Instagram : ~~(~~Done~~)~~** <a:ss_6:912576437612081233>

> <:ss_6:912576451432304650> **Uc Pubg : ~~(~~Done~~)~~** <:ss_6:912576451432304650>

> <a:ss_0:912663235306618922> **Creadit : ~~(~~Done~~)~~** <a:ss_0:912663235306618922>

> <a:ss_9:912693431166451742> **Bot Design : ~~(~~Done~~)~~** <a:ss_9:912693431166451742>

> <a:ss_0:912591552528937010> **Designer : ~~(~~Done~~)~~** <a:ss_0:912591552528937010>

> <:discord:916110727893385336> **Server Design : ~~(~~Done~~)~~** <:discord:916110727893385336>

> <a:ss_0:912678361007001610> **Minecraft : ~~(~~Done~~)~~** <a:ss_0:912678361007001610>

> <:ss_1:912678363108343888> **email System : ~~(~~Done~~)~~** <:ss_1:912678363108343888>

> <a:ss_0:912591552528937010> **Emoji Design : ~~(~~Done~~)~~** <a:ss_0:912591552528937010>

> <:ss_6:912576426052558859> **Shaed : ~~(~~Done~~)~~** <:ss_6:912576426052558859>

> <a:ss_0:912678349569163294> **Vote : ~~(~~Done~~)~~** <a:ss_0:912678349569163294>`)
.setImage(`https://media.discordapp.net/attachments/822300177124818964/911073814719393792/TERORE.TSDARK_MASTER.gif`)
).then(r=>{
   r.react("909082025317781544")
 })
 }})


 /////////////////////////

 /////////////////////
client.on("message", async message => {


  let args = message.content
    .split(" ")
    .slice(1)
    .join(" "); if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;


  if (message.content.toLowerCase().startsWith(prefix + "wa".toLowerCase())) { 
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
    let errorembed3 = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**It Must be a number**`)
    .setFooter(`${client.user.username}`);
    if (!args2) return message.channel.send(errorembed3);
    let errorembed2 = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**Must Be A Number**`)
    .setFooter(`${client.user.username}`);
    if (isNaN(args2)) return message.channel.send(errorembed2);
    let errorembed = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**Must The Number Larger 1**`)
    .setFooter(`${client.user.username}`);
    if (args2 < 1) return message.channel.send(errorembed);
    let embed3 = new Discord.MessageEmbed()
    .setTitle(`**✅The Final Cost Is :**`)
    .setColor("#fff600")
    .setDescription(`1`)
    .setFooter(`${client.user.username}`);
    if (args2 == 1) return message.channel.send(embed3);
    let embed = new Discord.MessageEmbed()
    .setTitle(`**📛The Final Cost Is :**`)
    .setColor("#fff600")
    .setDescription(`**ضريبه الوسيط** : **${tax2}**
                      **ضريبة التحويل** : **${tax3}**
                      **المبلغ المطلوب تحويله** : **${tax4}**`)
    .setFooter(`${client.user.username}`);
    message.channel.send(embed);
  }




  if (message.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) { 
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let errorembed3 = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**It Must be a number**`)
    .setFooter(`${client.user.username}`);
    if (!args2) return message.channel.send(errorembed3);
    let errorembed2 = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**Must Be A Number**`)
    .setFooter(`${client.user.username}`);
    if (isNaN(args2)) return message.channel.send(errorembed2);
    let errorembed = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**Must The Number Larger 1**`)
    .setFooter(`${client.user.username}`);
    if (args2 < 1) return message.channel.send(errorembed);
    let embed3 = new Discord.MessageEmbed()
    .setTitle(`**:notes: The Final Cost Is :**`)
    .setColor("#fff600")
    .setDescription(`1`)
    .setFooter(`${client.user.username}`);
    if (args2 == 1) return message.channel.send(embed3);
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
    .setTitle(`**✅ DONE TAX :**`)
    .setColor("#fff600")
    .setDescription(`**➡️  ${tax}**`)
    .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
    message.lineReply(embed);
  }

  


 
  
let ac = ["listening", "watching", "playing", "streaming","default"];
let ac2 = ["online", "idle", "invisible", "dnd","default"];

 let args0 = message.content.split(" ");
  if (args0[0] === (prefix + 'settings')) {
   if (!devs.includes(message.author.id)) return;
    if (args0[1] === 'setname') {
      if (!args0[2]) return message.channel.send('**:x: Please input a new name.**');
      await client.user.setUsername(args0.slice(2).join(" "));
 let changedname = new Discord.MessageEmbed()
  .setTimestamp().setColor("GREEN").setAuthor(message.author.username, message.author.displayAvatarURL()).setFooter(client.user.username,client.user.displayAvatarURL()).setThumbnail(message.guild.iconURL())
  .setDescription(`**✅ Done , The bot name changed to : ${args0.slice(2).join(" ")}**`)
  message.channel.send(changedname)
       message.react('✅');
    } else if (args0[1] === 'setavatar') {
      if (!args0[2]) return message.channel.send('**:x: Please input an avatar URL.**');
      await client.user.setAvatar(args0.slice(2).join(" "));
 let changedavatar = new Discord.MessageEmbed()
  .setTimestamp().setImage(args0.slice(2).join(" ")).setColor("GREEN").setAuthor(message.author.username, message.author.displayAvatarURL()).setFooter(client.user.username,client.user.displayAvatarURL()).setThumbnail(message.guild.iconURL())
  .setDescription(`**✅ The bot avatar was changed to :**`)
  message.channel.send(changedavatar)
       message.react('✅');
    } else { 
       message.channel.send(`> **:bulb: Usage**: ${prefix}settings [ \`setname\` - \`setavatar\` - ]`);
       message.react('ℹ️');
    }
  }

  
  
      if (message.content === prefix + ".........3") {
        const betha = new Discord.MessageEmbed()
        .setTitle('Your PING')
        .setColor("RANDOM")
        .addField([`${Date.now() - message.createdTimestamp}` + "MS"])
        .setAuthor(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true }))
      message.lineReply(betha)
      }
});
///------------------------------///
require('discord-reply')
client.on("message", async message => {
    if (message.content.startsWith(prefix + "ping")) {
    var states = "✅ Excellent";
    var states2 = "✅ Excellent";
    var msg = `${Date.now() - message.createdTimestamp}`;
    var api = `${Math.round(client.ws.ping)}`;
    if (Number(msg) > 70) states = "✅ `Good`";
    if (Number(msg) > 170) states = "🤓 `Not Bad`";
    if (Number(msg) > 350) states = "🤬 `Soo Bad`";
    if (Number(api) > 70) states2 = "✅ `Good`";
    if (Number(api) > 170) states2 = "🤓 `Not Bad`";
    if (Number(api) > 350) states2 = "🤬 `Soo Bad`";
    if (message.author.bot) return;
    message.lineReply(
        new Discord.MessageEmbed()
        .setColor("#ffffff")
        .setAuthor(message.author.username, message.author.avatarURL())
        .addField("**Time Taken:**", msg + " ms :signal_strength: | " + states, true)
        .addField("**WebSocket:**", api + " ms :signal_strength: | " + states2, true)
        .setTimestamp()
        .setFooter(`Request By ${message.author.tag}`)
    ); 
    }
});
 ///////////

 ///
 
 //


client.on('message', function(message) {
let args = message.content.split(" ").slice('').join("   ");
if(message.author.bot)return;
const room = message.channel.id === "879538149242576946";
if (!room) return false;
if(message.content.startsWith('')){
message.react("912576465349013545")
message.react("912576461779632138")
message.react("912663254126444565")
message.react("912576432675373076")


}
});


client.on('message', function(message) {
let args = message.content.split(" ").slice('').join("   ");
if(message.author.bot)return;
const room = message.channel.id === "878382778369060936";
if (!room) return false;
if(message.content.startsWith('')){
message.react("912576465349013545")
message.react("912576461779632138")
message.react("912663254126444565")
message.react("912576432675373076")


}
});


client.on('message', function(message) {
let args = message.content.split(" ").slice('').join("   ");
if(message.author.bot)return;
const room = message.channel.id === "911469317948854333";
if (!room) return false;
if(message.content.startsWith('')){
message.react("912576465349013545")
message.react("912576461779632138")
message.react("912663254126444565")
message.react("912576432675373076")


}
});

client.on('message', function(message) {
let args = message.content.split(" ").slice('').join("   ");
if(message.author.bot)return;
const room = message.channel.id === "918543381116911616";
if (!room) return false;
if(message.content.startsWith('')){
message.react("912576448819241002")



}
});

client.on('message', function(message) {
let args = message.content.split(" ").slice('').join("   ");
if(message.author.bot)return;
const room = message.channel.id === "911469317948854333";
if (!room) return false;
if(message.content.startsWith('')){
message.react("912576465349013545")
message.react("912576461779632138")
message.react("912663254126444565")
message.react("912576432675373076")


}
});


client.on('message', function(message) {
let args = message.content.split(" ").slice('').join("   ");
if(message.author.bot)return;
const room = message.channel.id === "905115824463970354";
if (!room) return false;
if(message.content.startsWith('')){
message.react("912576465349013545")
message.react("912576461779632138")
message.react("912663254126444565")
message.react("912576432675373076")


}
});
client.on("message", async message => {
  if (message.guild.id != 846181513015459871) return;
  if (message.channel.id != 911469317948854333) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://media.discordapp.net/attachments/822300177124818964/911073814719393792/TERORE.TSDARK_MASTER.gif"]});
  }
});


client.on("message", async message => {
  if (message.guild.id != 846181513015459871) return;
  if (message.channel.id != 918543381116911616) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://media.discordapp.net/attachments/822300177124818964/911073814719393792/TERORE.TSDARK_MASTER.gif"]});
  }
});

client.on("message", async message => {
  if (message.guild.id != 846181513015459871) return;
  if (message.channel.id != 905076757382725632) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://media.discordapp.net/attachments/822300177124818964/911073814719393792/TERORE.TSDARK_MASTER.gif"]});
  }
});

client.on("message", async message => {
  if (message.guild.id != 846181513015459871) return;
  if (message.channel.id != 905076746632695848) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://media.discordapp.net/attachments/822300177124818964/911073814719393792/TERORE.TSDARK_MASTER.gif"]});
  }
});



client.on("message", async message => {
  if (message.guild.id != 846181513015459871) return;
  if (message.channel.id != 905115824463970354) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://media.discordapp.net/attachments/822300177124818964/911073814719393792/TERORE.TSDARK_MASTER.gif"]});
  }
});



 client.on("message", (dark)=>{
   if(dark.content.startsWith(prefix + "d-emoji")){
         if (!owners.includes(dark.author.id))
      return dark.channel.send(
        `**(انت لست من الاونر الخاص بالبوت)**`
      );
      dark.react("✅")
        dark.guild.emojis.cache.array().forEach(emoji => {emoji.delete().then((e)=> {console.log(`
    ==============================
    ||                          ||
    || DELETED EMOJI: ${e.name} ||
    ||                          ||
    ==============================
        `)})
  })
   }
 })

 
client.on('message', message => {
    if(message.content === prefix + "servers") {
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#ff0000")
            .setTitle('```انت لست من الادمن-❌```')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
            
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#ff0000")
            .setTitle('```ليس معاك رول الادمن-❌```')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        );
      let guilds = client.guilds.cache.map(guild => `**__server:__**\n` + guild.name + ` (`+guild.id+`) ` + `\`` + guild.members.cache.size +`\`** members.**`)
      if(guilds.length > 3000) return message.lineReply(new Discord.MessageEmbed()
      .setTitle('**__Servers__**')
      .setDescription(guilds, {split: true}))
      if(guilds.length < 3000) return message.lineReply(new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor(`#ffffff`)
    .setTitle('**(__ده بيطلع جميع البيانات السيرفرات الي البوت الي فيها__)**')
    .setFooter(`Request By ${message.author.tag}`)
    .addField("(all servers) :", `\`${client.guilds.cache.size}\``, true)
    
    .setDescription(guilds))
}
});



const tracker = InvitesTracker.init(client, {
fetchGuilds: true,
fetchVanity: true,
fetchAuditLogs: true
});
tracker.on('guildMemberAdd', (member, type, invite) => {
const welcomeChannel = member.guild.channels.cache.find((ch) => ch.name === '✫丨𝑵𝒆𝒘-𝑴𝒆𝒎𝒃𝒆𝒓𝒔');//اسم الروم
if(type === 'normal'){
let embed = new Discord.MessageEmbed()
.setThumbnail(`${member.user.displayAvatarURL({dynamic: true})}`)
.setColor("#fedf36")

.setDescription(`<a:ss_3:912576456385785887> **Welcome Add Member : \`${member.guild.name}\`** <a:ss_3:912576456385785887>

<a:ss_7:912576427931623514> **New Member : <@${member.user.id}>** <a:ss_7:912576427931623514>

<a:ss_3:912576426950148107> **Invite : ${invite.inviter}** <a:ss_3:912576426950148107>

<a:ss_0:912576465349013545> **Member Count : \`${member.guild.memberCount}\`** <a:ss_0:912576465349013545>

<a:ss_3:912576453978239017> **Member Id : \`${member.user.id}\`** <a:ss_3:912576453978239017>`)

.setImage(`https://media.discordapp.net/attachments/822300177124818964/911073814719393792/TERORE.TSDARK_MASTER.gif`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()
welcomeChannel.send(embed);
}
});


client.on("guildMemberUpdate", (oldMember, newMember) => {
  const oldStatus = oldMember.premiumSince;
  const newStatus = newMember.premiumSince;

  if(!oldStatus && newStatus) {
    let theserverhasbeenbosted = new Discord.MessageEmbed()
    .setColor('#f40af8')
            .setTimestamp()
    .setDescription(`> <a:ss_6:912576428682383390> \`-\` **Thank you very much for the post to the server, member <@${newMember.user.id}>** <a:ss_6:912576439331741737>`)
    
    client.channels.cache.get("905075276449464370").send(theserverhasbeenbosted)
  }
})




////////////////////

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "update")||message.content.startsWith(prefix + "upDate")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#fedf36")
            .setTitle(`> <a:847464443889057852:867052629111996416> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setColor("#fedf36")
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription(`<a:ss_7:913366547014242304> **UpDate Server Now** <a:ss_7:913366547014242304>`)
.setImage(`https://media.discordapp.net/attachments/822300177124818964/911073814719393792/TERORE.TSDARK_MASTER.gif`)
).then(r=>{
   r.react("909082025317781544")
   r.react("909079518776553472")
   r.react("913366556501758002")
   r.react("913366535433752617")
 })
 }})















const terorr =["878402190149029918"]
client.on('message', function(message) {
    if(message.content.startsWith(prefix + "3")){
     if (!message.member.roles.cache.has('878402190149029918')) return message.channel.send("لا يمكنك استخدام هذا الامر")
message.lineReply(`hrlp`)
 }})













/*                     */ 





client.on('message', function(message) {
    if(message.content.startsWith(prefix + "لوجو")||message.content.startsWith(prefix + "logo")){
   message.delete({timeout: 600})
    if (!message.member.roles.cache.has('878402190149029918')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_3:912576456385785887> **انت لست من التيم \`التيم\`** <a:ss_3:912576456385785887>
<:ss_1:912693439949336637> **User : <@${message.author.id}>** <:ss_1:912693439949336637>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setTitle(`<a:ss_3:912576456385785887> **تم تنزيل البيانات الخاصه ب \`الوجو\`** <a:ss_3:912576456385785887>`)
  .setColor("#fedf36")
  .setDescription(` ~~**====================**~~

> \`1*\` <:ss_1:912693439949336637> **اسم السيرفر كامل**

> \`2*\` <:ss_1:912693439949336637> **اختصار السيرفر**

> \`3*\` <:ss_1:912693439949336637> **لون التصميم ايه : (بعت اكواد الون)**

> \`4*\` <:ss_1:912693439949336637> **السيرفر عباره عن ايه**

> \`5*\` <:ss_1:912693439949336637> **عايزه كريتف ول اشخاص العاب**

> \`6*\` <:ss_1:912693439949336637> **لو عايز زي تصميم معين تقدر تبعته**

> \`7*\` <:ss_1:912693439949336637> **عايز التصميم بخلفيه ول بدون**

~~**====================**~~ `)
  .setImage(`https://cdn.discordapp.com/attachments/822300177124818964/907788463938621530/TERORE.TSDARK_MASTER.gif`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
).then(r=>{
  r.react("912576456385785887")
})
 }})





client.on('message', function(message) {
    if(message.content.startsWith(prefix + "بوت")||message.content.startsWith(prefix + "bot")){
   message.delete({timeout: 600})
    if (!message.member.roles.cache.has('878402190149029918')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_3:912576456385785887> **انت لست من التيم \`التيم\`** <a:ss_3:912576456385785887>
<:ss_1:912693439949336637> **User : <@${message.author.id}>** <:ss_1:912693439949336637>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});
message.lineReply(
  new Discord.MessageEmbed()
  .setTitle(`<a:ss_3:912576456385785887> **تم تنزيل البيانات الخاصه ب \`بوتات\`** <a:ss_3:912576456385785887>`)
  .setColor("#fedf36")
  .setDescription(` ~~**====================**~~

> \`1*\` <:ss_1:912693439949336637> **Name Bot : ()**

> \`2*\` <:ss_1:912693439949336637> **Avatar Bot : ()**

> \`3*\` <:ss_1:912693439949336637> **Prefix Bot : ()**

> \`4*\` <:ss_1:912693439949336637> **ID Server : ()**

> \`4*\` <:ss_1:912693439949336637> **ID Owner server : ()**

> \`4*\` <:ss_1:912693439949336637> **How Many Members : ()**

~~**====================**~~ `)
  .setImage(`https://cdn.discordapp.com/attachments/822300177124818964/907788463938621530/TERORE.TSDARK_MASTER.gif`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
).then(r=>{
  r.react("912576456385785887")
})
 }})













 client.on('message', function(message) {
    if(message.content.startsWith(prefix + "ts")){
       message.delete({timeout: 600})
    if (!message.member.roles.cache.has('878402190149029918')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_3:912576456385785887> **انت لست من التيم \`التيم\`** <a:ss_3:912576456385785887>
<:ss_1:912693439949336637> **User : <@${message.author.id}>** <:ss_1:912693439949336637>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});
message.author.send(
  new Discord.MessageEmbed()
  .setColor("#fedf36")
  .setDescription(`<a:ss_8:909079544126914600> **برجاء قراء القوانين الخاصه بدخول تيم تيرورر** <a:ss_8:909079544126914600>
\`\`\`
1- ممنوع تخش في تيكت اي حد  من التيم

2- ممنوع الهزار في تيكت ول في الفيد باك

3- ممنوع تبعت لشخص ما اي شي برايفت مثل : عرضي احسن منه ب 10الألف لو جالي اسكرين ابندك

4- مطلوب منك كل جمعه تكون متواجد

5- السيرفر مش بياخد اي نسب بيع منك نهائي = المطلوب فقط كل بدء يوم الجمعه بعت للبنك الخاص للأستوري 30الألف

6- ممنوع اخذ الرول وعدم التفاعل = سيتم سحب الرول بدون نقاش

7- ممنوع بيع خاص نهائي عند شخص كلمك برايفت خليه يفتح تيكت لأمان = وعدم فتح تيكت وحصل مشكله السيرفر ليس ليه اي تدخل

8- ممنوع بيع شي في تيكت وعدم اخذ الرول بيها وينطبق علي نزل الاوفر = عند تم البيع السيرفر بياخد منك 50% من البيعه

9- ممنوع طلب اي رول + عند رائيه الاداره شغلك عالي وشغال سيتم ترقيتك حطا تاكن اداره

10- اهم شي تعرفه اننا هنا في السيرفر اخوات وايد وحده + التم كله بيحب الهزار

11- عند الشخص فتح تيكت يتم الرد عليه فقط اتفضل + عند طلب الشخص لو انت مش معاك الرول منشن علي الرول فقط وتغير اسمها علي حسب الطلب

12- عند مسك تيكت الخاصه بيك لازم يتم تغير اسم التيكت علي حسب الطلب ايه واسمك

13- عدم ترك التيكت لمده يومين

14- ممنوع تشتم شخص في تيكت حطا لو شتمك منشن لحد في الاداره فقط ومتردش عليه لو شتمك برايفت مع نفسك معاه

15- ممنوع التحويل بخارج التيكت لازم يكون في التيكت

16- ممنوع الهزار مع اي شخص في الاداره في تيكت ول بابلك ول اي شي غير التيم شات

17- ممنوع تكون اون لاين وعامل استاتيس اوف لاين = الاداره تعتقد ان انت مش بتفتح نهائي

18- اهم شي من كل ده يكون في (أمانه في كل شي)
\`\`\`
<a:11889:910266909402988564> **برجاء قراء القوانين جيده لعدم وقوع في اي مشكله** <a:11889:910266909402988564>`)
).then(r=>{
   r.react("909082025317781544")
 })
 }})


















 client.on("message" , (dark)=>{
  if(dark.content.startsWith(prefix+ "test")){
    return dark.channel.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`عمك جيه يا ابن المره كسمك علي الوبي`)
    ).then(r=>{
      setTimeout(function(){
        r.edit("test")
      }, 9000)
    })
  }
})
 






 //--------------//

 
 client.on('message', function(message) {
    if(message.content.startsWith(prefix + "t-insta")){
      message.delete({timeout: 3000})
    if (!message.member.roles.cache.has('911016874689581157')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_3:912576456385785887> **انت لست من التيم \`الادمن\`** <a:ss_3:912576456385785887>
<:ss_1:912693439949336637> **User : <@${message.author.id}>** <:ss_1:912693439949336637>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});

message.lineReply(
  new Discord.MessageEmbed()
  .setColor("333333")
  .setDescription(`> \`-\` **Please Wait Now** <a:ss_4:912591547860672542>`)
).then(s=>{
  setTimeout(function(){
    s.react("912678349569163294")
    s.edit(
      new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor("#690bd3")
      .setDescription(`> \`-\` **User ~~=~~ __faresboyprince__**`)
      .setImage(`https://cdn.discordapp.com/attachments/820937609827975179/918864449052483624/unknown.png`)
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
    )
  }, 20000)
})
 }})



  client.on('message', function(message) {
    if(message.content.startsWith(prefix + "t-tiktok")){
      message.delete({timeout: 3000})
    if (!message.member.roles.cache.has('911016874689581157')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_3:912576456385785887> **انت لست من التيم \`الادمن\`** <a:ss_3:912576456385785887>
<:ss_1:912693439949336637> **User : <@${message.author.id}>** <:ss_1:912693439949336637>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});

message.lineReply(
  new Discord.MessageEmbed()
  .setColor("333333")
  .setDescription(`> \`-\` **Please Wait Now** <a:ss_4:912591547860672542>`)
).then(s=>{
  setTimeout(function(){
    s.react("912678349569163294")
    s.edit(
      new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor("#690bd3")
      .setDescription(`> \`-\` **User ~~=~~ __darksquad29__**`)
      .setImage(`https://cdn.discordapp.com/attachments/820937609827975179/918867889346478100/unknown.png`)
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
    )
  }, 20000)
})
 }})





  client.on('message', function(message) {
    if(message.content.startsWith(prefix + "t-tiktok")){
      message.delete({timeout: 3000})
    if (!message.member.roles.cache.has('911016874689581157')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_3:912576456385785887> **انت لست من التيم \`الادمن\`** <a:ss_3:912576456385785887>
<:ss_1:912693439949336637> **User : <@${message.author.id}>** <:ss_1:912693439949336637>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});

message.lineReply(
  new Discord.MessageEmbed()
  .setColor("333333")
  .setDescription(`> \`-\` **Please Wait Now** <a:ss_4:912591547860672542>`)
).then(s=>{
  setTimeout(function(){
    s.react("912678349569163294")
    s.edit(
      new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor("#690bd3")
      .setDescription(`> \`-\` **User ~~=~~ __darksquad29__**`)
      .setImage(`https://cdn.discordapp.com/attachments/820937609827975179/918867889346478100/unknown.png`)
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
    )
  }, 20000)
})
 }})



 client.on('message', function(message) {
    if(message.content.startsWith(prefix + "g-rules")){
      message.delete({timeout: 3000})
    if (!message.member.roles.cache.has('919296040434298960')) return message.author.send(
      new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setDescription(`<a:ss_3:912576456385785887> **انت لست من التيم \`المنظمين\`** <a:ss_3:912576456385785887>
<:ss_1:912693439949336637> **User : <@${message.author.id}>** <:ss_1:912693439949336637>`)
    ).then(d=>{
      d.react("913366561039998986")
      d.delete({timeout : 20000})
    })
      message.delete({timeout: 100});

message.lineReply(
  new Discord.MessageEmbed()
  .setColor("333333")
  .setDescription(`> \`-\` **Please Wait Now** <a:ss_4:912591547860672542>`)
).then(s=>{
  setTimeout(function(){
    s.react("912678349569163294")
    s.edit(
      new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor("#690bd3")
      .setDescription(`<a:ss_3:912576426950148107> **مفتتح سيرفر تيرورر استور __مسابقه صور__** <a:ss_3:912576426950148107>

> <:ss_1:912693439949336637> **بقيمه __مليون كريدت__**

> <:ss_1:912693439949336637> **مقسم المليون علي ~~=~~ خمس اشخاص : بقيمه 200الألف للشخص**

**~~====================~~**

<a:ss_9:912693431166451742> **قوانين** <a:ss_9:912693431166451742>

> \`1-\` **لكل فرض 200 الالف و 50__ فوت__ ويخش عن طريق الينك بتاعك 35 دعوه**

> \`2-\` **ممنوع التحالف**

> \`3-\` **ممنوع بعت صور غير لائقه**

> \`4-\` **المده اسبوع ولاستلام بعد اسبوع**

> \`5-\` **الحساب لا يقل عن ليفل : 15**

> \`6-\` **الحساب لا يقل عن عمر الحساب : شهرين**

**~~====================~~**

*عشان تبعت الصوره الخاص بيك ابعت للاشخاص ده*

> \`1*\` **<@729147802420117514>**

> \`2*\` **<@885340508409430096>**

> \`3*\` **<@797776072665858088>**

> \`4*\` **<@728415679530663936>**

*ملحوظه ~~=~~ ممنوع الكلام مع الاداره الخاصه بالتنظيم الصوره فقط*

**~~====================~~**

> \`-\` **الأتنشل : <#918543381116911616>**

> \`🔗\` ** https://discord.gg/jKmBVnF8D8 **`)
      .setImage(`https://cdn.discordapp.com/attachments/822300177124818964/907788463938621530/TERORE.TSDARK_MASTER.gif`)
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
    )
  }, 20000)
})
 }})




