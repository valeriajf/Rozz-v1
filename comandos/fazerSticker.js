const { prefix, botName, donoName, DarkApikey, DarkUrl, emoji } = require("../dono/config.json")
const fs = require("fs");

module.exports = {
  nome: "sticker",
  descricao: "Faz uma Figurinha de uma imagem, git e video",
  comandos: ["s", "sticker", "f"],
  uso: `${prefix}s`,

handle: async ({ enviar, sender, info, lux, from, pushname, q, sendImageAsSticker2, sendVideoAsSticker2, getFileBuffer, reagir}) => {
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
const numeroBot = lux.user.id.split(":")[0]+"@s.whatsapp.net";
const packin = q ? `🕷️ 𝐏𝐚𝐜𝐨𝐭𝐞: ‘${q.split("/")[0].trim()}’` : `🤖 𝐁𝐨𝐭: ${botName}\n📲 𝐍𝐮́𝐦𝐞𝐫𝐨: ${numeroBot.split('@')[0]}`;
const author23 = q ? q.split("/")[1] ? `🎨 𝐂𝐫𝐢𝐚𝐝𝐨 𝐩𝐨𝐫: ${q.split("/")[1].trim()}` : `🎭 𝐀𝐮𝐭𝐨𝐫: 𝐃𝐞𝐬𝐜𝐨𝐧𝐡𝐞𝐜𝐢𝐝𝐨` : `\n\n💌 𝐏𝐞𝐝𝐢𝐝𝐨 𝐝𝐞: ${pushname}\n🛠️ 𝐃𝐞𝐬𝐞𝐧𝐯: Pedrozz Mods`;

if(boij2){
reagir('💭')
enviar('- *Eu, servo das trevas, atenderei ao seu pedido com obediência e diligência, mesmo que isso signifique mergulhar mais fundo nas sombras.*')
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(lux, from, owgi, info, { packname:packin, author:author23})
await fs.unlinkSync(encmediaa)
} else if(boij && boij.seconds < 11){
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(lux, from, owgi, info, { packname:packin, author:author23})
await fs.unlinkSync(encmedia)
reagir(emoji)
} else {
return enviar(`- *Marque uma foto ou o vídeo para fazer sua figurinha com o comando: ${prefix}s*`)
}
},
};