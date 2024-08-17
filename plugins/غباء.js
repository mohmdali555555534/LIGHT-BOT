let handler = async (m, { conn, command, text }) => {
let intelligence = `*💡 نسبة الغباء 💡*
*نسبة الغباء ${text} 💡هي* *${Math.floor(Math.random() * 100)}%* *من 100%*
*ربنا يهديكم💙☁️*
`.trim()
m.reply(intelligence, null, { mentions: conn.parseMention(intelligence) })}
handler.help = ['intelligence']
handler.tags = ['fun']
handler.command = /^(غباء)$/i
export default handler
