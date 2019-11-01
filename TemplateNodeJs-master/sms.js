// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC52a6b08c1d1962ba404b7382c243dedc';
const authToken = '148be1088c0d43bac266478594d90910';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hello Pajji',
     from: '+12098035828',
     to: '+12132756590'
   })
  .then(message => console.log(message.sid));

const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
