const { prefix, botName, donoName, DarkApikey, DarkUrl, emoji } = require("../dono/config.json")


module.exports = {
  nome: "menu",
  descricao: "menu de comandos",
  comandos: ["menu", "help"],
  uso: `${prefix}menu`,

handle: async ({ enviar, fotomenu, reagir, menu, selo, client, sender, from, data, hora, enviarAd2, pastaLux, pushname, isDono}) => {
reagir(emoji)
await enviarAd2(pastaLux + "audio/menu.mp3")
await client.sendMessage(from, {image: {url: fotomenu}, caption: `╭═════════════⪩
╰╮⟪ *${botName}* ⟫
╭┤⋟ Nick: ${pushname}
┃│⋟ Data: ${data}
┃│⋟ Hora: ${hora}
┃│⋟ Status: ${isDono ? "Dono" : "Membro"}
╰╦════════════⪨
╭┤⟪ *MENUS* ⟫
┃│➮ ${prefix}abrirgp
┃│➮ ${prefix}ban
┃│➮ ${prefix}citar
┃│➮ ${prefix}fechargp
┃│➮ ${prefix}figurinhas (Num)
┃│➮ ${prefix}play (nome)
┃│➮ ${prefix}resposta (0/1)
┃│➮ ${prefix}s (imagem/video/gif)
┃│➮ ${prefix}stickerai (Query)
╰═════════════⪨` }, {quoted: selo})
  },
};