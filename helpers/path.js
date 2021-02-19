const path = require('path') 

// process is global var
// Mainmodule is the main file that start ur app 
// module.exports = path.dirname(process.main.filename)// deprecated
module.exports = path.dirname(require.main.filename);