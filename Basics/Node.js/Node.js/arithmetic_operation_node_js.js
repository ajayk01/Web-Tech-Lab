var op = require('./arithmetic_operation_node_js_module');
var http = require('http');
var querystring=require('querystring');
var qs,a,b,d;

 http.createServer(function(req, res) {  
	var data= '';
	req.on('data', function(chunk) {   
		data += chunk;
        qs=querystring.parse(data);
	    a=qs['1'];
        b=qs['2'];
        d=qs['a'];
        res.write("<p>"+op.operation(a,b,d));
	});	
}).listen(7777);

console.log("Server started");


