const express = require('express');
const path = require('path');
const app = express();
 
app.use(function (req, res, next) {
  res.setHeader('X-Frame-Options', 'sameorigin');
  next();
});
 
app.use(express.static(path.join(__dirname, 'build')));
 
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
 
app.listen(3000, () => console.log('Listening to 3000 port'));
 