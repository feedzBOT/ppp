let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  try {
    pp = await conn.getProfilePicture(m.sender)
  } catch (e) {

  } finally {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let money = global.DATABASE._data.users[m.sender].money
    let level = global.DATABASE._data.users[m.sender].level
    let exp = global.DATABASE._data.users[m.sender].exp
    let warn = global.DATABASE._data.users[m.sender].warn
    let str = `
 ❏  *P R O F I L E - U S E R*
 ›  Name: *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*
 ›  Number: +${m.sender.split`@`[0]}
 ›  Uang: *Rp ${money}-,*
 ›  Level: *${level}*
 ›  Exp: *${exp}*
 ›  Warn: *${warn}*
 ›  Banned: *No*
`.trim()
    let mentionedJid = [m.sender]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile']
handler.tags = ['rpg']
handler.command = /^(profile|profil|pp|propile|propil)$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)