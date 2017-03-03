var express = require ('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()

app.set('port', (process.env.PORT || 5000))

// Process application 
app.use(bodyParser.urlencoded({extended: false}))

//Process application / JSON

app.use(bodyParser.json())

//Index route
app.get('/', function(req,res) {
    res.send('Hello world, I am Lisa, your friendly chatbot')
})


//for facebook verification

app.get('/webhook/', function (req,res) {
    if (req.query['hub.verify_token'] === 'any password you like') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token please')
})

// Spin up the server

//http.listen(app.env.PORT || 3000, function(){
//  console.log('listening on', http.address().port);
//});


app.listen(app.get('port'), function() {
   console.log('running on port', app.get('port'))
})


