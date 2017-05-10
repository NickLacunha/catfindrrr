var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

/*
c@Findrrr API
*/
app.get('/cats/random', function (req, res) {
  // should return a random public ID from the Catabase
    
})

app.post('/cats/', function (req, res) {
  /*
  should call the cloudinary api to add the file, then store
  the public id in our mongo database so that we can retrieve it later  
  */
})

/*
Home page
*/
app.get('/home/', function (req, res) {
    // serve up the react-router spa
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})