var checkbox = document.getElementById("enableJavaScript");
var row = checkbox.parentNode.parentNode;
var button = document.createElement("button");
button.setAttribute("label","Advanced...");
button.setAttribute("id","popupAdvancedJavascript");
row.appendChild(button);
