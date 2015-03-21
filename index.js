var http = require('http');
var browserClients = {
	num: 0,
};

var browserServer = http.createServer(function(request, response) {
	var key = browserClients.num + request.headers.referer;
	browserClients[key] = {};
	var t = browserClients[key];
	t.request = request;
	t.response = response;
	browserClients.num++;
})
var notifyServer = http.createServer(function(request, response) {

	for (var i in browserClients) {
		var c = browserClients[i]
		if (c.response) {
			console.log(i)
			c.response.end("location.reload()");
			delete browserClients[i];
		}
	}
	response.end("success\n");
})
browserServer.listen(3391);
notifyServer.listen(3392);