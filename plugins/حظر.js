let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('تم حظرك من استعمال البوت يا عزيزي لانك تخالف سياسة استعماله ♥ يمكنك معرفة سياسة استخدام البوت لدى صاحبه الرعب الملكي\nمفي حساب ههه 😄!')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['بنده']
handler.tags = ['افتحه']
handler.command = /^حظر$/i

handler.owner = true

export default handler
