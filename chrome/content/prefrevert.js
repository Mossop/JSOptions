/*
 * $HeadURL$
 * $LastChangedBy$
 * $Date$
 * $Revision$
 *
 */

var prefRevert = 
{
  _prefWindow: null,
  _strBundle: null,
  
  init: function()
  {
    var strsvc = Components.classes["@mozilla.org/intl/stringbundle;1"]
                         .getService(Components.interfaces.nsIStringBundleService);
    prefRevert._strBundle = strsvc.createBundle("chrome://jsoptions/locale/prefrevert.properties");
    prefRevert._prefWindow = document.getElementById("JavascriptOptions");
    
    var hbox = document.getAnonymousElementByAttribute(prefRevert._prefWindow,"anonid","dlg-buttons");
    if (hbox)
    {
      var button = document.createElement("button");
      button.id="revertPrefs";
      button.setAttribute("label",prefRevert._strBundle.GetStringFromName("revertPrefs.label"));
      button.setAttribute("class","dialog-button");
      hbox.insertBefore(button,hbox.firstChild);
      button.addEventListener("command",prefRevert.revertPrefs,false);
      var nodes = hbox.getElementsByTagName("spacer");
      for (var i = 0; i<nodes.length; i++)
      {
        if (nodes[i].getAttribute("anonid")=="spacer")
        {
          nodes[i].hidden=false;
        }
      }
    }
    else
    {
      dump("Not Found\n");
    }
  },
  
  revertPrefs: function()
  {
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                    .getService(Components.interfaces.nsIPromptService);
    
    if (promptService.confirmEx(window,
             prefRevert._strBundle.GetStringFromName("revertConfirm.title"),
             prefRevert._strBundle.GetStringFromName("revertConfirm.description"),
             promptService.STD_YES_NO_BUTTONS,null,null,null,null,{})==0)
    {
      var pane = prefRevert._prefWindow.preferencePanes[prefRevert._prefWindow._paneDeck.getAttribute("selectedIndex")];
      var nodes = pane.getElementsByTagName("preference");

      for (var i=0; i<nodes.length; i++)
      {
        if (nodes[i].hasUserValue)
        {
          nodes[i].reset();
        }
        nodes[i]._setValue(nodes[i].valueFromPreferences,false);
      }
    }
  }
};

window.addEventListener("load",prefRevert.init,false);
