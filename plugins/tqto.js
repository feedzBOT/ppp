let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    pepe = await conn.getProfilePicture('994409254719@s.whatsapp.net').catch(() => 'https://i.ibb.co/jr9Nh6Q/Thumb.jpg')
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "ππππ©π¨πΌπ₯π₯ π½π€π©",
        "description": `
*β THANKS TO*

NURUTOMO | HAIRUL LANA
ARIFFB | NEOXR | GALANG | BOCILGAMING
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
        "footerText": "ig owner https://www.instagram.com/chyangrhaa"
    }


    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m })
}
handler.help = ['tqto']
handler.tags = ['main']
handler.command = /^tqto$/m

module.exports = handler