let handler = async (m, { conn }) => {
if (global.db.data.chats[m.chat].virtex == false && m.isGroup) return conn.sendButtonDoc(m.chat, 'โ ๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐!!', botdate, 'แดษดแดสสแด', '.on virtex' null, adReply)



let info = `
*${htki} VIRUS ${htka}*
          
 ๐ฅBY Elaina๐ฅ
          
                  
โโโโโโ *แดแดสษชแดแดแดแดษด* โโโโโโ
*๐ฎGunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `โ VIRTEX`,
	rows: [
	    {title: "๐Virtex 1", rowId: '.virtex1', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	    {title: "๐Virtex 2", rowId: '.virtex2', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 3", rowId: '.virtex3', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 4", rowId: '.virtex4', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 5", rowId: '.virtex5', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 6", rowId: '.virtex6', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
    {title: "๐Virtex 7", rowId: '.virtex7', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 8", rowId: '.virtex8', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 9", rowId: '.virtex9', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 10", rowId: '.virtex10', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 11", rowId: '.virtex11', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 12", rowId: '.virtex12', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 13", rowId: '.virtex13', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 14", rowId: '.virtex14', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
    {title: "๐Virtex 15", rowId: '.virtex15', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 16", rowId: '.virtex16', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 17", rowId: '.virtex17', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 18", rowId: '.virtex18', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
	{title: "๐Virtex 19", rowId: '.virtex19', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },
    {title: "๐Virtex 20", rowId: '.virtex20', description: '๐๐๐๐๐ฌ๐ก๐ข๐ค๐จ๐๐จ๐ญ' },

	]
    }, {
    title: `โ INFO`,
	rows: [
	    {title: "๐ฅDownload WhatsApp Imune", rowId: '.waantivirus', description: 'Download WhatsApp Kebal' },
	    {title: "๐ฅVirus Troli", rowId: '.virustroli', description: 'Subs Yt ๐๐ซ๐ข๐๐ณ๐ฒ๐ง' },
	    {title: "๐ฅVirus Power", rowId: '.powerlist', description: 'Subs Yt ๐๐ซ๐ข๐๐ณ๐ฒ๐ง' },
	    ]
        }, {
    title: `โ BUY`,
	rows: [
	    {title: "๐ธUpgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "๐บGASS",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "๐ Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtex$/i
handler.premium = false

export default handler