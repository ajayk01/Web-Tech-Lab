
const { create } = require('domain');
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var u = "mongodb://localhost:27017/";
var querystring=require('querystring');
url=require('url');

var qs,a,b,d;

function onRequest(request,response)
{

	var query =url.parse(request.url).query;
   var q1= querystring.parse(query)["func"];
   console.log(q1);
   if(q1=="create")
   {
       var n =  querystring.parse(query)["name"];
       var e= querystring.parse(query)["email"];
       var num= querystring.parse(query)["number"];
       var dob= querystring.parse(query)["dob"];
       var g= querystring.parse(query)["gender"];
       c(n,e,num,dob,g);
   }
   else if(q1=="update")
   {
    var n =  querystring.parse(query)["name"];
    var e= querystring.parse(query)["email"];
    console.log(e);
      if(e!="")
       {
           update(n,"email",e);
       }
    var num= querystring.parse(query)["number"];
    if(num!="")
       {
           update(n,"number",num);
       }
    var dob= querystring.parse(query)["dob"];
    if(dob!="")
       {
           update(n,"dob",dob);
       }
    var g= querystring.parse(query)["gender"];
   }
   else if(q1=="delete")
   {
    var n =  querystring.parse(query)["name"];
       del(n);
   }
   else if(q1=="dis")
   {
       display();
   }
  };

  function c(n,e,num,dob,g)
  {
    MongoClient.connect(u, function(err, db) {
        if (err) throw err;
        var dbo = db.db("WT");
        var myobj = { name: n,email: e,number:num,dob:dob,gender:g};
        dbo.collection("ex-7-curd").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
  };

  function update(n,e,v)
  {
    MongoClient.connect(u, function(err, db) {
        if (err) throw err;
        var dbo = db.db("WT");
        var myquery = {name:n};
        var newvalues;
        
        if(e=="email")
           {
          newvalues = {$set: {email:v} };
           }
        else if(e=="number")
         {
            newvalues = {$set: {number:v} };
         }
         else if(e=="dob")
         {
            newvalues = {$set: {dob:v} };
         }
        dbo.collection("ex-7-curd").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
      });
  };


  function del(n)
  {
    MongoClient.connect(u, function(err, db) {
        if (err) throw err;
        var dbo = db.db("WT");
        var myquery = {name:n};
         dbo.collection("ex-7-curd").deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            db.close();
          });
      });
  };

  function display()
  {
    MongoClient.connect(u, function(err, db) {
        if (err) throw err;
        var dbo = db.db("WT");
        dbo.collection("ex-7-curd").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
      });
  };
  http.createServer(onRequest).listen(8000);
  console.log('Server has Started…….');

