var http = require('http');
var querystring=require('querystring');
var qs,a,b,d;

exports.operation=function(a, b,d) {  
	var data1= '';
	
	   if(d=='Add')
	   {
		 c=Number.parseInt(a)+Number.parseInt(b);
		 return("sum of two numbers is "+c);
	   }
	   if(d=='Sub')
	   {
		 c=Number.parseInt(a)-Number.parseInt(b);
		 return("sub of two numbers is" +c);
	   }
	   if(d=='Mul')
	   {
		 c=Number.parseInt(a)*Number.parseInt(b);
		 return("sum of two numbers is "+c);
	   }
	   if(d=='Div')
	   {
		 c=Number.parseInt(a)/Number.parseInt(b);
		 return("sum of two numbers is "+c);
	   }
	 
	 res.end(); 
	console.log(d);
	};	



