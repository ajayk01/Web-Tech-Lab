var http = require('http');
var querystring=require('querystring');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var qs,name,email,pwd,num;
 http.createServer(function(req, res) {  
	var data1= '';
	req.on('data', function(chunk) {  
        data1 += chunk;   
		
	});
	req.on('end', function() {
		 qs=querystring.parse(data1);
		 console.log(qs);
	 name=qs['username'];
     email=qs['email'];
      pwd=qs['pwd'];
      num=qs['num'];
     MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("WT");
        var myobj = { name: name, email: email ,password: pwd,number :num};
        dbo.collection("exp-6").insertOne(myobj, function(err, result) {
          if (err) throw err;
          console.log("User created");
          db.close();
        });
      });


	 res.write("Hello "+name+", Your account was  registered successfully");
	res.end(); 
	});
	
	
	
}).listen(8000);

console.log("Server started");