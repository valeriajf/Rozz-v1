const { prefix, botName, donoName, DarkApikey, DarkUrl, emoji } = require("../../dono/config.json")


module.exports = {
  nome: "menuadm",
  descricao: "menu de comandos administrativo",
  comandos: ["menuadm"],
  uso: `${prefix}menuadm`,

handle: async ({ enviar, fotomenu, reagir, menu, selo, client, sender, from, data, hora}) => {
reagir(emoji)
client.sendMessage(from, {image: {url: fotomenu}, caption: `╭═══════════════════⪩
╰╮⟪ *${botName}* ⟫
╭┤➤ ⋟ Usuário: @${sender.split("@")[0]}
┃╰══════════════════⪨
╰╦══════════════════⪨
╭┤⟪ *COMANDOS ADM* ⟫
┃│░⃟⃛🕸️༘݊➮ ${prefix}abrirgp
┃│░⃟⃛🕸️༘݊➮ ${prefix}fechargp
┃│░⃟⃛🕸️༘݊➮ ${prefix}ban
┃│░⃟⃛🕸️༘݊➮ ${prefix}menujogos
┃│░⃟⃛🕸️༘݊➮ ${prefix}auto-resposta 1/0
╰═══════════════════⪨` }, {quoted: selo})
  },
};