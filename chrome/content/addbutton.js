/*
 * $HeadURL$
 * $LastChangedBy$
 * $Date$
 * $Revision$
 *
 * This script is currently unused. It may in the future be used to move the JavaScript options back
 * to being a button on the content pane.
 */

var checkbox = document.getElementById("enableJavaScript");
var row = checkbox.parentNode.parentNode;
var button = document.createElement("button");
button.setAttribute("label","Advanced...");
button.setAttribute("id","popupAdvancedJavascript");
row.appendChild(button);
