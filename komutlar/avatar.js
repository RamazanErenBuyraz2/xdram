module.exports = {
  name:"avatar",
  code:`
  $addTimestamp
  $color[RANDOM]
  $description[<@$mentioned[1]>'**in Profil Fotograf�**]
  $image[$userAvatar[$mentioned[1]]]
  $argsCheck[>1;L�tfen Birini Etiketleyin.]
  `
}