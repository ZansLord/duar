import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ``ğğğğğ¬ğ¡ğ¢ğ¤ğ¨ğğ¨ğ­-ğğ
  ${botdate}
  
  â ğğğºğ : ${name}
  â ğğ­ğğ­ğ®ğ¬ : ${user.premiumTime > 0 ? 'Premium' : 'Free'}
  â Lğ¢ğºğ¢ğ­ : ${limit}
  â Sğğ¥ğğ¼ : Rğ© ${ğºğ¼ğ§ğğ²}
  â ğğ±ğ© : ${exp}
  â ğğ¼ğ¥ğ : ${role}
  â ğğ ğ : ${age}
  â Rğ®ğ§ğ§ğ¢ğ§ğ  Oğ§ : Pğğ§ğğ¥
  â Mğ¼ğğ : Public
`
await conn.send2ButtonDoc(m.chat, info, author, 'ğ Matikan Fitur', '.off detect', 'â¹ï¸ Menu', '.menu', fpayment, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: author,
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: logo, 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: author,
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: logo,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    thumbnailUrl: logo,
    title: 'Â© ğğğğğ¬ğ¡ğ¢ğ¤ğ¨ğğ¨ğ­'
				}
			}
	
}
handler.customPrefix = /^(tos|toss|tost)$/i
handler.command = new RegExp

export default handler