var express = require('express');
var app = express();

// All of our paths have the Link header.
app.use(function(req, res, next) {
  res.status(200).links({
    'payment-method-manifest': 'https://d5b3b805.ngrok.io/payment-manifest.json',
  });
  return next();
});

app.use('/', express.static('public'));

app.listen(5999, function() {
  console.log('Example app listening on port 5999!');
});
