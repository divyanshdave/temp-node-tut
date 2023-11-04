const names = require('./3_names')
const sayHi= require('./4_utils')
const data = require('./6_alternative_sytax')
console.log(data)
require('./7_mind_grenade')


// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)


const { log } = require('console')
const os = require('os')

// info about  current user
const user = os.userInfo()
console.log(user)

// method returns system runtime in sec

console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOs)