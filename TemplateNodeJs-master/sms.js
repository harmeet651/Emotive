const accountSid = 'AC52a6b08c1d1962ba404b7382c243dedc';
const authToken = '148be1088c0d43bac266478594d90910';
const http = require('http');
const express = require('express');
const app = express();
var fs = require('fs');
var url = require('url');
var queryString = require('querystring');
const client = require('twilio')(accountSid, authToken);

http.createServer(function(req, res)
{
    console.log("sms");
    if(req.url==="/sms")
    {
		res.writeHead(200, {"Content-Type" : "text/html"});
		fs.createReadStream("./public/sms.html", "UTF-8").pipe(res);
    }
    if(req.method === "POST")
    {
		var data = "";
        req.on("data", function(chunk)
        {
			data += chunk; 
		});
		var formData;
        req.on("end", function(chunk)
        {
			formData = queryString.parse(data);
		
        var text = Object.values(formData);
        console.log(text[0]);
        console.log(text[1]);
        client.messages
        .create(
            {
            body: text[1],
            from: '+12098035828',
            to: text[0]
            })
        .then(message => console.log(message.sid));
        });
        }
    
}).listen(1234);

  //message sent
  
  //receive message

const MessagingResponse = require('twilio').twiml.MessagingResponse;


app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});
