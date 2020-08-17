'use strict';

// Init project
var express = require('express');
var app = express();

// Enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Simple request logging
app.use((req, res, next) => {
  console.log(req.method, req.url)
  next();
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Git/Glitch syncing webhook
const gitWebhook = require('./routers/git.js');
app.use('/git', gitWebhook);

// Main API endpoint
const api = require('./routers/api.js');
app.use('/api', api);

// CHeck the database connection
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(db => {
    console.log(`Database ${db.connections[0].name} on ${db.connections[0].host} connected`);
    // Listen for requests if the database is online
    const listener = app.listen(process.env.PORT, function () {
      console.log('Your app is listening on port ' + listener.address().port);
    });
  })
  .catch(error => console.log(error));
