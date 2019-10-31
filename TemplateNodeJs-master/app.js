var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var url = require('url');
var queryString = require('querystring');

const Client = require('pg').Client
const connectionString = 'postgres://postgres:harmeet@localhost:5432/TestData';
const client = new Client({
    connectionString: connectionString
});

client.connect();

app.get('/', function (req, res, next) {
	client.query('INSERT INTO public."Emotive"(text, message) VALUES ($1,$2) ',['hello', 'done done'], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
		res.status(200).send(result.rows);
    });
});

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});

//http.createServer(function(req, res){
	// if(req.url==="/index"){
	// 	res.writeHead(200, {"Content-Type" : "text/html"});
	// 	fs.createReadStream("./public/index.html", "UTF-8").pipe(res)
	// }
	// if(req.method === "GET"){
	// 	var inp = url.parse(req.url, true).query;
	// 	console.log(inp);
	// }
	// else if(req.method === "POST"){
	// 	var data = "";
	// 	req.on("data", function(chunk){
	// 		data += chunk; 
	// 	});
	// 	req.on("end", function(chunk){
	// 		var formData = queryString.parse(data);
	// 		console.log(formData);
	// 	});
	// }  
//}).listen(8888);