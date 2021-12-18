var funReqRes = function ReqRes(req, res){
    res.writeHead(200, {'Content-type':'text/plain'});
    // res.end("Hello.....");
    res.end();
    var ip = req.headers['x-forwarded-for'] || req.connect
}

var HttpService  = require('http');
var MyServer = HttpService.createServer(funReqRes);
MyServer.listen(8888,'127.0.0.1',()=>{
    console.log("Server is running...");
}); 