module.exports = {
    name: "ban",
    code: `
$ban
<@$mentioned[1]> Sunucudan Yasaklanm��t�r!
$onlyPerms[admin;Bu Komutu Kullanamazs�n!]
$argsCheck[>1;L�tfen Yasaklanacak Ki�iyi Etiketleyin!]
`}