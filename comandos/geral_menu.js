const { prefix, botName, donoName, DarkApikey, DarkUrl, emoji } = require("../dono/config.json")


module.exports = {
  nome: "menu",
  descricao: "menu de comandos",
  comandos: ["menu", "help"],
  uso: `${prefix}menu`,

handle: async ({ enviar, fotomenu, reagir, menu, selo, client, sender, from, data, hora, enviarAd2, pastaLux, pushname, isDono}) => {
reagir(emoji)
await enviarAd2(pastaLux + "audio/menu.mp3")
await client.sendMessage(from, {image: {url: fotomenu}, caption: `╭═══════════════════⪩
╰╮⟪ *${botName}* ⟫
╭┤➤ ⋟ Nick: ${pushname}
┃│➤ ⋟ Numero: @${sender.split("@")[0]}
┃│➤ ⋟ Data: ${data}
┃│➤ ⋟ Hora: ${hora}
┃│➤ ⋟ Status: ${isDono ? "Dono" : "Membro"}
┃╰══════════════════⪨
╰╦══════════════════⪨
╭┤⟪ *MENUS* ⟫
┃│░⃟⃛🕸️༘݊➮ ${prefix}menu
┃│░⃟⃛🕸️༘݊➮ ${prefix}menudono
┃│░⃟⃛🕸️༘݊➮ ${prefix}menuadm
┃│░⃟⃛🕸️༘݊➮ ${prefix}menujogos
┃╰══════════════════⪨
╰╦══════════════════⪨
╭┤⟪ *DOWNLOADS* ⟫
┃│░⃟⃛🕸️༘݊➮ ${prefix}play (nome)
┃│░⃟⃛🕸️༘݊➮ ${prefix}playvd (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}tuna (pesquisa)
┃│░⃟⃛🕸️༘݊➮ ${prefix}tiktokquery (pesquisa)
┃│░⃟⃛🕸️༘݊➮ ${prefix}tiktok (url)
┃│░⃟⃛🕸️༘݊➮ ${prefix}insta (url)
┃╰══════════════════⪨
╰╦══════════════════⪨
╭┤⟪ *PESQUISA* ⟫
┃│░⃟⃛🕸️༘݊➮ ${prefix}ytsearch (pesquisa)
┃│░⃟⃛🕸️༘݊➮ ${prefix}filme (pesquisa)
┃│░⃟⃛🕸️༘݊➮ ${prefix}serie (pesquisa)
┃│░⃟⃛🕸️༘݊➮ ${prefix}signo (pesquisa)
┃│░⃟⃛🕸️༘݊➮ ${prefix}xvideos (pesquisa)
┃╰══════════════════⪨
╰╦══════════════════⪨
╭┤⟪ *INTELIGÊNCIAS* ⟫
┃│░⃟⃛🕸️༘݊➮ ${prefix}gemini (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}llama (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}llama2 (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}sqlcode (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}mistral (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}deepseek (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}deepseek-code (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}dalle (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}dalle2 (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}imagine (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}ghibli (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}fantasia (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}3d (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}tattoo (prompt)
┃│░⃟⃛🕸️༘݊➮ ${prefix}cartoon (prompt)
┃╰══════════════════⪨
╰╦══════════════════⪨
╭┤⟪ *RANDOM* ⟫
┃│░⃟⃛🕸️༘݊➮ ${prefix}clima (query)
┃│░⃟⃛🕸️༘݊➮ ${prefix}tradutor (query)
┃│░⃟⃛🕸️༘݊➮ ${prefix}cuttly (link)
┃│░⃟⃛🕸️༘݊➮ ${prefix}bitly (link)
┃│░⃟⃛🕸️༘݊➮ ${prefix}metadinha
┃│░⃟⃛🕸️༘݊➮ ${prefix}metadinha2
┃│░⃟⃛🕸️༘݊➮ ${prefix}travazapimg
┃│░⃟⃛🕸️༘݊➮ ${prefix}travazapimg2
┃╰══════════════════⪨
╰╦══════════════════⪨
╭┤⟪ *STICKER* ⟫
┃│░⃟⃛🕸️༘݊➮ ${prefix}attp (Query)
┃│░⃟⃛🕸️༘݊➮ ${prefix}attp2 (Query)
┃│░⃟⃛🕸️༘݊➮ ${prefix}among (Query)
┃│░⃟⃛🕸️༘݊➮ ${prefix}figubebe (Num)
┃│░⃟⃛🕸️༘݊➮ ${prefix}figucoreana (Num)
┃│░⃟⃛🕸️༘݊➮ ${prefix}figuanime (Num)
┃│░⃟⃛🕸️༘݊➮ ${prefix}figurinhas (Num)
┃╰══════════════════⪨
╰═══════════════════⪨` }, {quoted: selo})
  },
};