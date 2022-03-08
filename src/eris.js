const Eris = require('eris'),
      eris = new Eris(process.env.token, {
        intents: ['guilds','guildMembers','guildPresences'],
        restMode: true
      })

eris.on('ready', function () {
  console.log(`Logged in`)
})

eris.on('error', function (err) {
  console.error(err)
})

eris.connect()

module.exports = eris;