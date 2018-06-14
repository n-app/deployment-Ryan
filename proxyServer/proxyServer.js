const express = require('express');
const path = require('path');
const request = require('request');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, './')));

//Descriptions Server
app.use('/rooms/:pathname', function(req, res) {
  res.redirect(307, 'http://localhost:3001/' + req.params.pathname)
});

//Reviews Server
app.use('/reviews/:pathname', function(req, res) {
  res.redirect(307, 'http://localhost:3003/' + req.params.pathname)
});

//Filter Listings Server
app.use('/filterListings/:pathname', function(req, res) {
  res.redirect(307, 'http://localhost:3004/' + req.params.pathname)
});

app.listen(3000, () => {
  console.log(`listening on port ${port}`);
});
