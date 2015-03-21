var http = require('http');
var browserClients = {};
var num = 0;

var browserServer = http.createServer(function(request, response) {
	console.log("新增：  " + request.headers.referer)
	var key = num + request.headers.referer;
	browserClients[key] = {};
	var t = browserClients[key];
	t.request = request;
	t.response = response;
	num++;
	console.log("当前有"+ Object.keys(browserClients).length + "个连接");
})
var notifyServer = http.createServer(function(request, response) {
	console.log("---------------------------------------------------------------")
	for (var i in browserClients) {
		console.log(Object.keys(browserClients).length)
		var c = browserClients[i]
		console.log("刷新" + i)
		c.response.end("location.reload()");
		delete browserClients[i];
	}
	response.end("success\n");
})
browserServer.listen(3391);
notifyServer.listen(3392);