const express = require('express');
const qiniu = require('qiniu');
const app = express();

app.use('/', (req, res, next) => res.send('Hello World!') && next());

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log(`Server start successfully on http://${host}:${port}`)
})