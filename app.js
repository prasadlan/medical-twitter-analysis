var path = require('path');
var express = require('express');
// var api = require('./api');
var disaster = require('./disaster');
var app = express();


app.get('/', function(req, res){
    res.sendFile(path.resolve('./index.html'));
});

app.get('/ajax/endpoint', function (req, res) {
    console.log(req.query);
    disaster.analyze(req.query.search, function(err, result){
        if (err) return res.status(500).send(err);
        res.send(result);
    });
});

console.log('localhost:8080');
app.listen(process.env.PORT || 5000);