const express = require('express');
const path = require('path');
const request = require('request');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, './dist')));

app.get('/filterListing/:pathname', function(req, res) {
  // console.log(' --------------------', req.params.pathname)

  request('http://localhost:3004/' + req.params.pathname, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred and handle it
    
      if (req.params.pathname[req.params.pathname-2] === 's') {
        res.setHeader("Content-Type", "text/css"); 
      }
      console.log('----------', response)
      res.send(body)
    });
});

app.listen(3000, () => {
  console.log(`listening on port ${port}`);
});
