require('browser-env')()
const hook = require('require-extension-hooks')
hook('vue').plugin('vue').push()
hook(['vue','js']).plugin('babel').push()