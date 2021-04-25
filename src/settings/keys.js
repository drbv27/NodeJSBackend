let host        =  'btxijzlnnljflax-mongodb.services.clever-cloud.com'
let db          =    'btxijzlnnljflax'
let user        =  'u5kxsmb03mtp9wuo70vm'
let port        =  27017
let password    ='aMSyZv3fCaQCaahKCrCo'

const database = `mongodb://${user}:${password}@${host}:${port}/${db}`;

export {database};