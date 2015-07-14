var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

// This converts ?foo=name to {foo:'name'}
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
