module.exports = {
  name:"bbkanal-ayarla",
  code:`
  $addTimestamp
  $color[RANDOM]
  $description[<@$authorID> , Bay Bay Kanal� <#$mentionedChannels[1]> Olarak Ayarland�]
  $setServerVar[bbkanal;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;Bir \`#kanal\` Etiketle]
  $onlyPerms[admin;Bu Komutu Kullanamazs�n]`
}