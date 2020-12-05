var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
function validate(){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("WT");
  dbo.collection("exp-6").find({name:"A"}).toArray(function(err, results){
  return(results.length);
});
});

};
exports.validate;