var express = require('express')
var app = express()
 
app.use(express.static('./'));

app.listen(8080)

console.log('server stater on port 8080');
