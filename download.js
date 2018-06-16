var http = require('http');
var fs = require('fs');

function startServer(landingPage) 
{
	
	var lp = landingPage;
	console.log("-> 1")
   //console.log (lp);
    http.createServer(function(request, response) 
	    {
	    	
	    	//console.log("-> 2", request.url);
	    	
	    	if(request.url != '/')
	    	{
	    		//console.log("request.url", request.url)

	    		fs.readFile('.'+ request.url, function (err, nhtml) 
	    		{
	    			if(request.url!="/favicon.ico")
	    			{

						console.log("-> 2", request.url);
	    				response.writeHeader(200, {"Content-Type": "text/html"}); 
	    				//console.log(nhtml); 
	    				
			        	response.write(nhtml);
			        	response.end(); 
			        	} 		
	    		});
	    	}
	    	else
	    	{
	    		response.writeHeader(200, {"Content-Type": "text/html"});  
	    		console.log("->3");
		        response.write(lp);
		        //console.log(lp.url);
		        response.end();  
	    	}
	    }).listen(8080);
}

function start()
{
	beforeStart(function(files) 
	{
		var arr = files;
		var indexHTMLStr = "<!DOCTYPE html> \
		<html> \
			<head> \
				<title>Hello</title> \
			</head> \
			<body>";

		var links = "";
		for(var i = 0; i < arr.length; i++)
		{
			links += "<a href=\"/"+ arr[i] +"\" download>" + arr[i] + "</a><br/> ";
		}

		indexHTMLStr += links;
		indexHTMLStr += "</body> \
		</html>";

		//console.log(indexHTMLStr);
		startServer(indexHTMLStr);
	});

}

function beforeStart(callback) 
{
	// read the directory
	var testf ='/Users/nayanakamerkar/assignment/fourthAssignment';
    fs.readdir(testf, function(err, files) {
    	callback(files);
    });
}

start();
