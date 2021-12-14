let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    pepe = await conn.getProfilePicture('994409254719@s.whatsapp.net').catch(() => 'https://i.ibb.co/jr9Nh6Q/Thumb.jpg')
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝘽𝙤𝙩",
        "description": `
*❏ SEWA BOT*

Untuk fitur bot bisa baca menu sampai selesai ya kak, dicoba coba dulu biar tau ( Ketik *.menu* )
Silahkan hubungi owner ( Ketik *.owner* ) jika ingin menyewa bot untuk grup chat kalian dengan biaya Rp. 15.000 per bulan

Untuk upgrade premium hanya Rp. 5.000 per bulan ( *.infopremium* )
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "Klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4696956640315324"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4696956640315324",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6283128734012@s.whatsapp.net"
        },
        "footerText": "hubungi wa.me/6285156972228"
    }


    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m })
}
handler.help = ['sewabot']
handler.tags = ['main']
handler.command = /^sewa(bot|melcanz)$/i

module.exports = handler
