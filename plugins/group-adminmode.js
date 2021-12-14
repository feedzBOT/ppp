let handler  = async (m, { conn, args }) => {
	if(!args || !args[0]) { 
		conn.reply(m.chat, `*❏ ADMIN MODE*\n\nBerikan keterangan on atau off !`, m)
	} else if(args[0] == 'on') {
    global.DATABASE.data.chats[m.chat].adminMode = true
		conn.reply(m.chat, `*❏ ADMIN MODE*\n\nBot berhasil di ubah menjadi Admin Mode\n\nHanya admin yang dapat menggunakan bot di grup ini`, m)
	} else if(args[0] == 'off') {
    global.DATABASE.data.chats[m.chat].adminMode = false
		conn.reply(m.chat, `*❏ ADMIN MODE*\n\nBerhasil menonaktifkan Admin Mode\n\nSemua anggota grup bisa menggunakan bot di grup ini`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*❏ ADMIN MODE*\n\nBerikan keterangan on atau off !`, m)
	} 
}
handler.help = ['adminmode *on/off*']
handler.tags = ['admin']
handler.command = /^(adminmode)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
handler.fail = null
handler.exp = 5000
module.exports = handler