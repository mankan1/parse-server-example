// Example express application adding the parse-server module to expose Parse
// compatible API routes.
//var azure = require('azure');
var express = require('express');
var ParseServer = require('parse-server').ParseServer;

//var notificationHubService = azure.createNotificationHubService("OneTaxiCabs", "Endpoint=sb://usersidecars.servicebus.windows.net/;SharedAccessKeyName=DefaultListenSharedAccessSignature;SharedAccessKey=JNlMSVdM1L0XR9mhINW8FSPdakSCdz9LIYU8+ds+FJ8=");

var databaseUri = process.env.DATABASE_URI || process.env.MONGOLAB_URI

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
  databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || '32ypRKDpwMEwsIgEMxjwXYXQ126pF78NkdHpO5fe',
  masterKey: process.env.MASTER_KEY || 'xcM6bh8evgQX0M4A9SxUBw6zJ7pfZf4Aw35IEK2t',
  clientKey: 'aRL2Mi1T0unTjtWLK0Uls53jwezxV9A5B6hVgpyH', //Add your master key here. Keep it secret!
  dotNetKey: 'jGoLsg4Ln56EeTfT8DBg5d1hnKDQAAxxlzCchR0p',
push: {
    android: {
      senderId: '33781838442', // The Sender ID of GCM
      apiKey: 'AIzaSyCYec5hqYS5vf4kT68jSty10Cc1jKFkdhs' // The Server API Key of GCM
    }
  }
});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('I dream of being a web site.');
});

var port = process.env.PORT || 1337;
app.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});
