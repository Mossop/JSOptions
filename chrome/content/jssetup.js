/*
 * $HeadURL$
 * $LastChangedBy$
 * $Date$
 * $Revision$
 *
 */

var JSOptions = 
{
  showJSOptions: function()
  {
    openDialog("chrome://jsoptions/content/jsoptions.xul", "JavaScript Options", "chrome,titlebar,centerscreen,modal");
    return false;
  },

  toggleButton: function()
  {
    var button = document.getElementById("popupAdvancedJavascript");
    var checkbox = document.getElementById("enableJavaScript");
    button.disabled=!checkbox.checked;
    return false;
  },
  
  setupJS: function()
  {
    var checkbox = document.getElementById("enableJavaScript");
    checkbox.addEventListener("CheckboxStateChange",JSOptions.toggleButton,false);
    var row = checkbox.parentNode.parentNode;
    var vbox = document.createElement("vbox");
    row.appendChild(vbox);
    var button = document.createElement("button");
    button.setAttribute("label","Advanced...");
    button.setAttribute("id","popupAdvancedJavascript");
    vbox.appendChild(button);
    button.addEventListener("command",JSOptions.showJSOptions,false);
    JSOptions.toggleButton();
    return false;
  },

  registerEventListener: function()
  {
    var content = document.getElementById("paneContent");
    if (content.loaded)
    {
      JSOptions.setupJS();
    }
    else
    {
      content.addEventListener('paneload',JSOptions.setupJS,false);
    }
    return false;
  }
};

window.addEventListener("load",JSOptions.registerEventListener,false);
