const express = require('express');
const path = require('path');
const request = require('request');

const app = express();
const port = process.env.port || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Mehods',
      'GET, POST, PUT, PATCH, DELETE'
    );
    return res.status(200).json({});
  }
  next();
});

//Title Gallery Server bundle and CSS
app.use('/titleGallery/:pathname', function(req, res) {
  res.redirect(307, 'http://airbnb-title-galley.us-west-1.elasticbeanstalk.com/' + req.params.pathname)
});

// Title Gallery Services
app.use('/headerphotos/', function(req, res) {
  res.redirect(307, 'http://airbnb-title-galley.us-west-1.elasticbeanstalk.com/headerphotos' + req.url)
});

//Booking Server bundle and CSS
app.use('/bookingFiles/:pathname', function(req, res) {
  res.redirect(307, 'http://booking-service-logan.us-west-1.elasticbeanstalk.com/' + req.params.pathname)
});

//Booking Services
app.use('/booking/', function(req, res) {
  res.redirect(307, 'http://booking-service-logan.us-west-1.elasticbeanstalk.com/booking' + req.url)
});

//listingDescriptionFiles Server bundle and CSS
app.use('/listingDescriptionFiles/:pathname', function(req, res) {
  res.redirect(307, 'http://nappbnb-env-1.yykbu3dn27.us-east-1.elasticbeanstalk.com/' + req.params.pathname)
});

//listingDescriptionFiles Services
app.use('/rooms/', function(req, res) {
  res.redirect(307, 'http://nappbnb-env-1.yykbu3dn27.us-east-1.elasticbeanstalk.com' + req.url)
});

//Reviews Server bundle and CSS
app.use('/reviewsFiles/:pathname', function(req, res) {
  res.redirect(307, 'http://nappbnbreviews.us-west-1.elasticbeanstalk.com/' + req.params.pathname)
});

//Reviews Services
app.use('/reviews/', function(req, res) {
  console.log(req.params.pathname)
  res.redirect(307, 'http://nappbnbreviews.us-west-1.elasticbeanstalk.com/reviews' + req.url)
});

//Filter Listings Server bundle and CSS
app.use('/filterListingsFiles/:pathname', function(req, res) {
  res.redirect(307, 'http://nappfilterlistingryan-env.n93dfz3d6f.us-west-1.elasticbeanstalk.com/' + req.params.pathname)
});

//Filter Listings Services
app.use('/filterListings/', function(req, res) {
  res.redirect(307, 'http://nappfilterlistingryan-env.n93dfz3d6f.us-west-1.elasticbeanstalk.com/filterListings' + req.url)
});

app.use('/', express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

