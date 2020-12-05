var MongoClient = require('mongodb').MongoClient;
var u = "mongodb://localhost:27017/";

var dt=require('./sample_node.js');
http=require('http');
url=require('url');
var name,name1,pwd,flag;
querystring = require('querystring');
function onRequest(request,response)
{
    var query =url.parse(request.url).query;
    name1 = querystring.parse(query)["username"];
     pwd=querystring.parse(query)["pwd"];
    console.log(name1);
    console.log(pwd);
    validate();
   
  };
  function validate(){
    MongoClient.connect(u, function(err, db) {
      if (err) throw err;
      var dbo = db.db("WT");
      dbo.collection("exp-6").find({name:name1}).toArray(function(err, results){
      if(results.length==1)
       {
         console.log("Successfully");
       }
       else
       {
         console.log("Try again");
       }
    });
    });
    
    };

  http.createServer(onRequest).listen(8000);
  console.log('Server has Started…….');
 