const express = require('express');
const path = require('path');
const request = require('request');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, './')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Mehods',
      'GET, POST, PUT, PATCH, DELETE',
    );
    return res.status(200).json({});
  }
  next();
});

//Descriptions Server bundle and CSS
app.use('/bookingFiles/:pathname', function(req, res) {
  res.redirect(307, 'http://localhost:3002/' + req.params.pathname)
});

//Descriptions Services
app.use('/booking/', function(req, res) {
  res.redirect(307, 'http://localhost:3002/booking' + req.url)
});

//listingDescriptionFiles Server bundle and CSS
app.use('/listingDescriptionFiles/:pathname', function(req, res) {
  res.redirect(307, 'http://localhost:3001/' + req.params.pathname)
});

//listingDescriptionFiles Services
app.use('/rooms/', function(req, res) {
  res.redirect(307, 'http://localhost:3001' + req.url)
});

//Reviews Server bundle and CSS
app.use('/reviewsFiles/:pathname', function(req, res) {
  res.redirect(307, 'http://localhost:3003/' + req.params.pathname)
});

//Reviews Services
app.use('/reviews/', function(req, res) {
  console.log(req.params.pathname)
  res.redirect(307, 'http://localhost:3003/reviews' + req.url)
});

//Filter Listings Server bundle and CSS
app.use('/filterListingsFiles/:pathname', function(req, res) {
  res.redirect(307, 'http://localhost:3004/' + req.params.pathname)
});

//Filter Listings Services
app.use('/filterListings/', function(req, res) {
  res.redirect(307, 'http://localhost:3004/filterListings' + req.url)
});

app.listen(3000, () => {
  console.log(`listening on port ${port}`);
});
