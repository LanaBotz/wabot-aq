let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085728917285]
│ • Dana [088980101522]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/Nurutomo
│ • https://saweria.co/ariffb
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
