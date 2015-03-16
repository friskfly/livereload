var http = require('http');
var browserClients = {
	num: 0,
};

var browserServer = http.createServer(function(request, response) {
	browserClients[browserClients.num] = {};
	var t = browserClients[browserClients.num];
	t.request = request;
	t.response = response;
	browserClients.num++;
	console.log(browserClients.num)
})
var notifyServer = http.createServer(function(request, response) {
	for(var i in browserClients){
		var c = browserClients[i]
		if(c.response){
			c.response.end("location.reload()");
			delete browserClients[i];
		}
	} 
	browserClients.num = 0;
	response.end("success\n");
})
browserServer.listen(3391);
notifyServer.listen(3392);