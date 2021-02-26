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
  otorol: "kapal�",
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
 rmsg: "<a:golduye:770656551249379328> **{user.tag}** **Seviye Atlad�** **Yeni Seviye'si ** **{level}**",
 lvl: "0",
 exp: "0",
 rexp: "40",
 rsystem: "0",
})

bot.command({
  name:"eval",
  code:`
  $onlyForIDs[721726880792707185;Geli�tiricim De�ilsin]
  $onlyIf[$message!=;Kod Denemek ��in Bi�i Gir]
  $eval[$message]`
})//Kod Deneme

bot.command({
  name:"ping",
  code:`Pingim $pingms`
})

bot.command ({
 name: "korona",
 code: `
 $title[KoronaVir�s $message[1] �statistikleri]
 $description[**Toplam Vaka** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;cases;Bir �lke �smi Girmelisin!]
 
 **Toplam �l�m** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;deaths;Bir �lke �smi Girmelisin!]
 
 **Toplam �yile�enler** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;recovered;Bir �lke �smi Girmelisin!]
 
 **Aktif Hasta Say�s�** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;active;Bir �lke �smi Girmelisin!]

 **Kritik Hasta Say�s�** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;critical;Bir �lke �smi Girmelisin!]
 ]
 $argsCheck[>1;Kullan�m: ?korona <�lke-kodu>]
 $color[red]
 `
})



bot.status({
  type:"PLAYING",
  text:"BAKIM VDS'YE GE��YORUZ",
  time:12
})




bot.joinCommand({
    channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[otorollog]==];true;$randomChannelID];false;$getServerVar[otorollog]]",
    code:`
    $giveRoles[$authorID;$getServerVar[otorolrol]]
  <@$authorID> Sunucuya ho�geldin otomatik rol�n ba�ar�yla verildi
  $onlyIf[$getServerVar[otorollog]!=;]
`})
bot.onJoined()



bot.joinCommand({
  channel:`$getServerVar[sayackanal]`,
  code:`:inbox_tray: $username Giri� Yapt� , \`$getServerVar[sayachedef]\` Ki�i Olmam�za \`$sub[$getServerVar[sayachedef];$membersCount]\` Ki�i Kald� , **$membersCount** Ki�iyiz`
})
bot.onJoined()
bot.leaveCommand({
  channel:`$getServerVar[sayackanal]`,
  code:`:outbox_tray: $username ��k�� Yapt� , \`$getServerVar[sayachedef]\` Ki�i Olmam�za \`$sub[$getServerVar[sayachedef];$membersCount]\` Ki�i Kald� , **$membersCount** Ki�i Kald�k`
})
bot.onLeave()




bot.joinCommand({
  channel:`$getServerVar[hgkanal]`,
  code:`$description[<@$authorID> Kat�ld�,
Hesap Olu�turma Tarihi : $creationDate[$authorID;time]
Kat�lma Tarihi : $memberJoinedDate[$authorID;time]]
$color[RANDOM]
$title[Bir �ye Kat�ld�]
$addTimestamp`
})
bot.onJoined()
bot.leaveCommand({
  channel:`$getServerVar[bbkanal]`,
  code:`$description[<@$authorID> Ayr�ld�]
$color[RANDOM]
$title[Bir �ye Kat�ld�]
$addTimestamp`
})
bot.onLeave()









bot.command({
 name: "seviye",
 aliases: ["level"],
 usage: "rank (user)",
 code: `$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/793071150614970388/794565647760752650/20210101_205624.jpg&xpcolor=ffffff&isboosting=true]
$onlyIf[$getServerVar[rsystem]>=1;{description:Seviye Sistemi Kapal�!}{color:ff2050}]
$cooldown[5s;]`
})





bot.command({
 name: "seviye-mesajayarla",
 usage: "setrankmsg <message>",
 description: "message for the leveled up",
 code: `$description[Mesaj� �u �ekilde Ayarlad�n�z.**:
\`$message\`]
$color[01ff00]
$setServerVar[rmsg;$message]
$onlyIf[$message!=;Bu De�i�kenleri de Kullanabilirsiniz:
\`\`\`
{user.tag} = $userTag
{user.mention} = <@$authorID>
{level} = 1
{exp} = 25
\`\`\`
Mevcut Mesaj:
\`$getServerVar[rmsg]\`]
$onlyBotPerms[mentioneveryone;managemessages;{description:unu Yapmak ��in Yetkim Yok!}{color:ff2050}]
$onlyPerms[manageserver;{description:unu Yapmak ��in Yetkiniz Yok!}{color:ff2050}]
$cooldown[5s;**L�tfen** **%time%** **S�re Bekleyin!**]`
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
 code: `$description[**Seviye Sistemi Kapat�ld�!**]
$color[01ff00]
$setServerVar[rch;]
$setServerVar[rmsg;$getVar[rmsg]]
$setServerVar[rsystem;0]
$onlyIf[$getServerVar[rsystem]>=1;{description:Level Sistem �u Anda Kapal� }{color:ff2050}]
$onlyBotPerms[mentioneveryone;{description:Bunu Yapmak ��in Yetkim Yok!}{color:ff2050}]
$onlyPerms[manageserver;{description: Bunu Yapmak ��in Yetkiniz Yok!}{color:ff2050}]
$cooldown[5s;**L�tfen ****%time%**** S�re Bekleyin**]`
})






bot.command({
 name: "seviye-ayarla",
 code: `$description[**Rank Log Kanal�** <#$mentionedChannels[1;yes]> **Olarak Ayarland�!**]
$color[01ff00]
$setServerVar[rch;$mentionedChannels[1;yes]]
$setServerVar[rsystem;1]
$onlyBotPerms[mentioneveryone;{description:Bunu Yapmak ��in Yetkim Yok!}{color:ff2050}]
$onlyPerms[manageserver;{description: Bunu Yapmak ��in Yetkiniz Yok!}{color:ff2050}]
$cooldown[5s;L�tfen **%time%** S�re Bekleyin]`
})








bot.command({
 name: "seviye-ekle",
 code: `
 $title[Seviye Ekleme ��lemi]
 $addField[<a:golduye:770656551249379328> **Eklenen Ki�i**;<@$mentioned[1]>;yes]
 $addField[<a:golduye:770656551249379328> **Eklenen Miktar**;$message[2];yes]
 $setUserVar[lvl;$sum[$getUserVar[lvl;$mentioned[1]];$noMentionMessage];$mentioned[1]] 
  $thumbnail[https://cdn.glitch.com/cf21a1c7-0db0-479e-a81f-94d3f70367e8%2FFree_Sample_By_Wix.jpg?v=1613593420939]
 $argsCheck[2;**Kullan�m ?seviye-ekle <@�ye> <miktar>**]
 $onlyForIDs[721726880792707185;Bu Komut Yasakl�!]
 $color[$randomText[0;99999]]
 $image[https://cdn.glitch.com/cf21a1c7-0db0-479e-a81f-94d3f70367e8%2Fstandard.gif?v=1613587740477]
 
`})





bot.command({
 name: "seviye-d���r",
 code: `
 $title[Seviye D���rme ��lemi]
 $addField[<a:golduye:770656551249379328> **D���r�len Ki�i**;<@$mentioned[1]>;yes]
 $addField[<a:golduye:770656551249379328> **D���r�len Miktar**;$message[2];yes]
 $setUserVar[lvl;$sub[$getUserVar[lvl;$mentioned[1]];$noMentionMessage];$mentioned[1]] 
  $thumbnail[https://cdn.glitch.com/cf21a1c7-0db0-479e-a81f-94d3f70367e8%2FFree_Sample_By_Wix.jpg?v=1613593420939]
 $argsCheck[2;Kullan�m ?seviye-d���r <@�ye> <miktar>]
 $onlyForIDs[721726880792707185;Bu Komut Yasakl�!]
 $color[$randomText[0;99999]]
  $image[https://cdn.glitch.com/cf21a1c7-0db0-479e-a81f-94d3f70367e8%2Fstandard.gif?v=1613587740477]
 

`})



