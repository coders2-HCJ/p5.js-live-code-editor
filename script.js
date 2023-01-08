var editor = ace.edit("editor");
var result = document.getElementById("result").contentWindow.document;
editor.setTheme("ace/theme/light");
editor.session.setMode("ace/mode/javascript");
editor.session.setUseWorker(false);
editor.setValue("size(400, 400);\n\ndraw = function() {\n\tbackground(220);\n};");
function showRes() {
  result.open();
  result.writeln("<!DOCTYPE html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><style>body {margin: 0; padding: 0;}</style></head><body><script src='https://cdn.jsdelivr.net/processing.js/1.4.8/processing.js'></script><script>function pjs(processing) {with(processing) {frameRate(60);" + editor.getValue() + "}}var canvas = document.createElement('canvas');document.body.appendChild(canvas);var processing = new Processing(canvas, pjs);</script></body></html>");
  result.close();
}
editor.session.on("change", showRes);
showRes();
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
document.getElementById("reload").onclick = function() {showRes();};
