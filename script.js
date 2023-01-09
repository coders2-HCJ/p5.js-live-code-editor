var editor = ace.edit("editor");
var result = document.getElementById("result");
editor.setTheme("ace/theme/light");
editor.session.setMode("ace/mode/javascript");
editor.setValue("function setup() {\n\tcreateCanvas(400, 400);\n}\nfunction draw() {\n\tbackground(220);\n}");
function showRes() {
  var p5 = "<!DOCTYPE html><html><head><meta charset='utf-8'><style>html, body {margin: 0; padding: 0;}</style></head><body><script src='https://cdn.jsdelivr.net/npm/p5/lib/p5.min.js'></script><script>" + editor.getValue() + "</script></body></html>";
  result.src = "data:text/html;charset=utf-8," + encodeURIComponent(p5);
}
function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", filename);
	element.style.display = "none";
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
document.getElementById("save").onclick = function() {
  download("script.js", editor.getValue());
};
document.getElementById("run").onclick = function() {showRes();};
showRes();
