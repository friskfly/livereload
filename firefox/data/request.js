var head = document.getElementsByTagName('head')[0];
function insertScript() {
	var script = document.createElement("script")
	script.async = true;
	script.defer = true;
	script.id = "livereload_3391"
	script.src = "http://127.0.0.1:3391";
	head.appendChild(script);
	setTimeout(function() {
		var s = document.getElementById("livereload_3391");
		s.parentNode.removeChild(s);
		insertScript();
	}, 60000)
}
window.onload = insertScript();