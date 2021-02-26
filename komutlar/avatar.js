module.exports = {
  name:"avatar",
  code:`
  $addTimestamp
  $color[RANDOM]
  $description[<@$mentioned[1]>'**in Profil Fotografý**]
  $image[$userAvatar[$mentioned[1]]]
  $argsCheck[>1;Lütfen Birini Etiketleyin.]
  `
}