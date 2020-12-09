var o = require('./module_cal');
var http = require('http');
var querystring=require('querystring');
url=require('url');

var fs = require('fs');

var qs,a,b,d;

function onRequest(request,response)
{
  response.writeHead(200, {'Content-Type': 'text/html'});
	var query =url.parse(request.url).query;
	
   var q1= querystring.parse(query)["op-1"];
   var op=(querystring.parse(query)["op"]);
   var q2=(querystring.parse(query)["op-2"]);
   
   
   if(op=="+")
      op="Add";
    else if(op=="-")
      op="Sub";
    else if(op=="*")
      op="Mul";
    else if(op=="/")
      op="Div";
      var t ="<center><h1 style='color:red'>"+(o.operation(q1,op,q2))+"</center>";
      console.log(t);
      fs.appendFileSync('./index.html', t);
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
   
   
  };
  http.createServer(onRequest).listen(7777);
  console.log('Server has Started…….');

