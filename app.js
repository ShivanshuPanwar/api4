var express = require('express');
var app = express();

var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

var book = require('./routes/book');

app.use('/book',book);
app.get('/', function(req,res) {
    res.send('Welcome to Book API');
});


const port = process.env.PORT || 3001;

app.listen(port, async () => {
    try {
        console.log('Running server on port 3001');
    } catch (error) {
        console.log(error);
    }
});