fs = require('fs')
var watch=require('node-watch')
// fs.readFile('/Users/nayanakamerkar/changes', 'utf8', function (err,data) 
// {
//   if (err) 
//   {
//     return console.log(err);
//   }
//   console.log(data);
// });
//var c=0,p=0,d=0;
fs.watchFile('changes', function (curr,prev) 
{
 	console.log(curr);
 	console.log(prev);
 	var c = curr.size;
 	var p = prev.size;
 	var d = c-p;
 	//var l=prev.length;
  //console.log(l);
  fs.open('changes','r',function(err,fd)
  {
    var buffer=new Buffer.alloc(d);
  fs.read(fd,buffer,0,d,p,function(error,bytesRead,buffer)
    {
      var printchange=buffer.toString('ascii',0,d);
      if(err)
       {
          return console.log(err);
        }
      console.log(printchange);
    });
  });
});
