var express = require('express');
var app = express();


// set the port of our application
var port = process.env.PORT || 3001;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/dist'));

// set the home page route
app.get('/', function(req, res) {
  // make sure index is in the right directory. In this case /app/index.html
  res.render('index');
});

app.listen(port, function() {
  console.log('Our app is running on  http://localhost:' + port);
});
