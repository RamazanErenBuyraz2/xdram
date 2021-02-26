var dbd = require('dbd.js')
var fs = require('fs')
var bot = new dbd.Bot({
	token:process.env.TOKEN,
	prefix:"$getServerVar[prefix]"
})
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {	
	const command = require(`./komutlar/${file}`)
  bot.command({
		name: command.name,
		code: command.code
	})
}
bot.variables({
  prefix:"?",
  color: "",
  shard1: "",
  shard2: "",
  otorolrol: "",
  rid:"",
  eid:"",
  otorollog: "",
  chatbot:"",
  otorol: "kapalý",
  sayackanal: "0",
  chatbot: "",
  sayachedef: "0",
  hgkanal: "0",
  bbkanal: "0",
  saas:"false",
  para:"",
  banka:"",
  gold: "no",
  kid:"",
  mid:"",
  rch: "",
 rmsg: "<a:golduye:770656551249379328> **{user.tag}** **Seviye Atladý** **Yeni Seviye'si ** **{level}**",
 lvl: "0",
 exp: "0",
 rexp: "40",
 rsystem: "0",
})

bot.command({
  name:"eval",
  code:`
  $onlyForIDs[721726880792707185;Geliþtiricim Deðilsin]
  $onlyIf[$message!=;Kod Denemek Ýçin Biþi Gir]
  $eval[$message]`
})//Kod Deneme

bot.command({
  name:"ping",
  code:`Pingim $pingms`
})

bot.command ({
 name: "korona",
 code: `
 $title[KoronaVirüs $message[1] Ýstatistikleri]
 $description[**Toplam Vaka** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;cases;Bir Ülke Ýsmi Girmelisin!]
 
 **Toplam Ölüm** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;deaths;Bir Ülke Ýsmi Girmelisin!]
 
 **Toplam Ýyileþenler** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;recovered;Bir Ülke Ýsmi Girmelisin!]
 
 **Aktif Hasta Sayýsý** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;active;Bir Ülke Ýsmi Girmelisin!]

 **Kritik Hasta Sayýsý** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;critical;Bir Ülke Ýsmi Girmelisin!]
 ]
 $argsCheck[>1;Kullaným: ?korona <ülke-kodu>]
 $color[red]
 `
})



bot.status({
  type:"PLAYING",
  text:"BAKIM VDS'YE GEÇÝYORUZ",
  time:12
})




bot.joinCommand({
    channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[otorollog]==];true;$randomChannelID];false;$getServerVar[otorollog]]",
    code:`
    $giveRoles[$authorID;$getServerVar[otorolrol]]
  <@$authorID> Sunucuya hoþgeldin otomatik rolün baþarýyla verildi
  $onlyIf[$getServerVar[otorollog]!=;]
`})
bot.onJoined()



bot.joinCommand({
  channel:`$getServerVar[sayackanal]`,
  code:`:inbox_tray: $username Giriþ Yaptý , \`$getServerVar[sayachedef]\` Kiþi Olmamýza \`$sub[$getServerVar[sayachedef];$membersCount]\` Kiþi Kaldý , **$membersCount** Kiþiyiz`
})
bot.onJoined()
bot.leaveCommand({
  channel:`$getServerVar[sayackanal]`,
  code:`:outbox_tray: $username Çýkýþ Yaptý , \`$getServerVar[sayachedef]\` Kiþi Olmamýza \`$sub[$getServerVar[sayachedef];$membersCount]\` Kiþi Kaldý , **$membersCount** Kiþi Kaldýk`
})
bot.onLeave()




bot.joinCommand({
  channel:`$getServerVar[hgkanal]`,
  code:`$description[<@$authorID> Katýldý,
Hesap Oluþturma Tarihi : $creationDate[$authorID;time]
Katýlma Tarihi : $memberJoinedDate[$authorID;time]]
$color[RANDOM]
$title[Bir Üye Katýldý]
$addTimestamp`
})
bot.onJoined()
bot.leaveCommand({
  channel:`$getServerVar[bbkanal]`,
  code:`$description[<@$authorID> Ayrýldý]
$color[RANDOM]
$title[Bir Üye Katýldý]
$addTimestamp`
})
bot.onLeave()









bot.command({
 name: "seviye",
 aliases: ["level"],
 usage: "rank (user)",
 code: `$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/793071150614970388/794565647760752650/20210101_205624.jpg&xpcolor=ffffff&isboosting=true]
$onlyIf[$getServerVar[rsystem]>=1;{description:Seviye Sistemi Kapalý!}{color:ff2050}]
$cooldown[5s;]`
})





bot.command({
 name: "seviye-mesajayarla",
 usage: "setrankmsg <message>",
 description: "message for the leveled up",
 code: `$description[Mesajý þu Þekilde Ayarladýnýz.**:
\`$message\`]
$color[01ff00]
$setServerVar[rmsg;$message]
$onlyIf[$message!=;Bu Deðiþkenleri de Kullanabilirsiniz:
\`\`\`
{user.tag} = $userTag
{user.mention} = <@$authorID>
{level} = 1
{exp} = 25
\`\`\`
Mevcut Mesaj:
\`$getServerVar[rmsg]\`]
$onlyBotPerms[mentioneveryone;managemessages;{description:unu Yapmak Ýçin Yetkim Yok!}{color:ff2050}]
$onlyPerms[manageserver;{description:unu Yapmak Ýçin Yetkiniz Yok!}{color:ff2050}]
$cooldown[5s;**Lütfen** **%time%** **Süre Bekleyin!**]`
})




bot.awaitedCommand({
 name: "hata-seviye",
 code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
})








bot.command({
 name: "$alwaysExecute",
 code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
})







bot.command({
 name: "$alwaysExecute",
 code: `$useChannel[$getServerVar[rch]]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyForServers[$guildID;]` 
})





bot.command({
 name: "seviye-kapat",
 code: `$description[**Seviye Sistemi Kapatýldý!**]
$color[01ff00]
$setServerVar[rch;]
$setServerVar[rmsg;$getVar[rmsg]]
$setServerVar[rsystem;0]
$onlyIf[$getServerVar[rsystem]>=1;{description:Level Sistem Þu Anda Kapalý }{color:ff2050}]
$onlyBotPerms[mentioneveryone;{description:Bunu Yapmak Ýçin Yetkim Yok!}{color:ff2050}]
$onlyPerms[manageserver;{description: Bunu Yapmak Ýçin Yetkiniz Yok!}{color:ff2050}]
$cooldown[5s;**Lütfen ****%time%**** Süre Bekleyin**]`
})






bot.command({
 name: "seviye-ayarla",
 code: `$description[**Rank Log Kanalý** <#$mentionedChannels[1;yes]> **Olarak Ayarlandý!**]
$color[01ff00]
$setServerVar[rch;$mentionedChannels[1;yes]]
$setServerVar[rsystem;1]
$onlyBotPerms[mentioneveryone;{description:Bunu Yapmak Ýçin Yetkim Yok!}{color:ff2050}]
$onlyPerms[manageserver;{description: Bunu Yapmak Ýçin Yetkiniz Yok!}{color:ff2050}]
$cooldown[5s;Lütfen **%time%** Süre Bekleyin]`
})








bot.command({
 name: "seviye-ekle",
 code: `
 $title[Seviye Ekleme Ýþlemi]
 $addField[<a:golduye:770656551249379328> **Eklenen Kiþi**;<@$mentioned[1]>;yes]
 $addField[<a:golduye:770656551249379328> **Eklenen Miktar**;$message[2];yes]
 $setUserVar[lvl;$sum[$getUserVar[lvl;$mentioned[1]];$noMentionMessage];$mentioned[1]] 
  $thumbnail[https://cdn.glitch.com/cf21a1c7-0db0-479e-a81f-94d3f70367e8%2FFree_Sample_By_Wix.jpg?v=1613593420939]
 $argsCheck[2;**Kullaným ?seviye-ekle <@üye> <miktar>**]
 $onlyForIDs[721726880792707185;Bu Komut Yasaklý!]
 $color[$randomText[0;99999]]
 $image[https://cdn.glitch.com/cf21a1c7-0db0-479e-a81f-94d3f70367e8%2Fstandard.gif?v=1613587740477]
 
`})





bot.command({
 name: "seviye-düþür",
 code: `
 $title[Seviye Düþürme Ýþlemi]
 $addField[<a:golduye:770656551249379328> **Düþürülen Kiþi**;<@$mentioned[1]>;yes]
 $addField[<a:golduye:770656551249379328> **Düþürülen Miktar**;$message[2];yes]
 $setUserVar[lvl;$sub[$getUserVar[lvl;$mentioned[1]];$noMentionMessage];$mentioned[1]] 
  $thumbnail[https://cdn.glitch.com/cf21a1c7-0db0-479e-a81f-94d3f70367e8%2FFree_Sample_By_Wix.jpg?v=1613593420939]
 $argsCheck[2;Kullaným ?seviye-düþür <@üye> <miktar>]
 $onlyForIDs[721726880792707185;Bu Komut Yasaklý!]
 $color[$randomText[0;99999]]
  $image[https://cdn.glitch.com/cf21a1c7-0db0-479e-a81f-94d3f70367e8%2Fstandard.gif?v=1613587740477]
 

`})



