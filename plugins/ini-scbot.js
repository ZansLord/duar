import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let imgs = 'https://telegra.ph/file/06c4e93a3d3f388b2642d.jpg'
let tqto = `┌─❖
│「 Hay 👋 」
└┬❖ 「 ${name} 」
┌┤✑ Mau Script Free? 
│└────────────┈ ⳹
│
└─「 𝗦𝗖𝗥𝗜𝗣𝗧 」       
│𝙇𝙞𝙣𝙠 𝙎𝙘 : https://youtu.be/HXwMDWVv32I
│
│𝘿𝙤𝙣𝙖𝙨𝙞 : ketik .donasi
│
└┬────────────┈ ⳹
   │✑  𝐹𝑟𝑒𝑒 𝑁𝑜 𝐸𝑛𝑐
   │✑  𝑁𝑜 𝑅𝑒𝑛𝑎𝑚𝑒 𝑘𝑖𝑑𝑠
   │✑ 𝐿𝑖𝑛𝑘 𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑 𝑑𝑜𝑏𝑙𝑒 1
   └─────────────┈ ⳹
`
conn.sendMessage(m.chat, { image: imgs, 
caption: tqto, 
footer: author,
templateButtons: [  
{ urlButton: { displayText: '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', url: 'https://YouTube.com/' }},
{ quickReplyButton: { displayText: 'Thanks Kak\n\n Gw Sange Cuy, Mau Ga Ngewe Ma Gw ?', id: '' }}
]}, { quoted: m }) 
}
handler.command = /^(sc|esce|script)$/i
export default handler