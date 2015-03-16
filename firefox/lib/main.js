var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;
pageMod.PageMod({
	include: "*",
	attachTo: "top",
	contentScriptWhen: "end",
	contentScriptFile: [
		data.url("request.js")
	]
})