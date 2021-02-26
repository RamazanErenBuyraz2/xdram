module.exports = {
    name: "ban",
    code: `
$ban
<@$mentioned[1]> Sunucudan Yasaklanmýþtýr!
$onlyPerms[admin;Bu Komutu Kullanamazsýn!]
$argsCheck[>1;Lütfen Yasaklanacak Kiþiyi Etiketleyin!]
`}