global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/Lb4Emjih98rBiCZiZoS2eM', 'https://chat.whatsapp.com/FrluVyY5kBRIhY6yKfH4DI']
global.owner = ['380945780962','6285156972228'] // Put your number here
global.mods = ['6285156972228'] // Want some help?
global.prems = ['6285156972228'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  amel: 'https://melcanz.com',
  bg: 'http://bochil.ddns.net',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://melcanz.com': 'DyotaMC05',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://api.xteam.xyz': 'c604a90a63ce36a7',
  'https://api.zeks.xyz': 'AqcH26T4ccPo3rnYzBNQ3s4mFCL',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
}

// Sticker WM
global.packname = 'wa.me/6285156972228'
global.author = 'ACUY BOT'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
