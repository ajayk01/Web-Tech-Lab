var http = require('http');
var querystring=require('querystring');
var c;

exports.operation=function(a,d,b) {  
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
		 return("Mul of two numbers is "+c);
	   }
	   if(d=='Div')
	   {
		 c=Number.parseInt(a)/Number.parseInt(b);
		 return("div of two numbers is "+c);
	   }
	 

	console.log(c);
	};	
