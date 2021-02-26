module.exports = {
  name:"bbkanal-ayarla",
  code:`
  $addTimestamp
  $color[RANDOM]
  $description[<@$authorID> , Bay Bay Kanalý <#$mentionedChannels[1]> Olarak Ayarlandý]
  $setServerVar[bbkanal;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;Bir \`#kanal\` Etiketle]
  $onlyPerms[admin;Bu Komutu Kullanamazsýn]`
}