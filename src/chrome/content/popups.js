/*
 * $HeadURL$
 * $LastChangedBy$
 * $Date$
 * $Revision$
 *
 */

var gPanePopups = 
{
  readEvent: function(event)
  {
    var pref = document.getElementById("dom.popup_allowed_events").value;
    if (pref==event)
    {
      return true;
    }
    if (pref.substring(0,event.length+1)==(event+" "))
    {
      return true;
    }
    if (pref.substring(pref.length-event.length-1)==(" "+event))
    {
      return true;
    }
    return (pref.indexOf(" "+event+" ")>=0);
  },
  
  writeEvents: function()
  {
    var pref = document.getElementById("dom.popup_allowed_events");
    var group = document.getElementById("eventsGroup");

    var allowed = "";
    
    var nodes = group.getElementsByTagName("checkbox");    
    for (i=0; i<nodes.length; i++)
    {
      var checkbox = nodes.item(i);
      if (checkbox.checked)
      {
        var event = checkbox.id;
        event=event.substring(0,event.length-5);
        allowed=allowed+" "+event;
      }
    }
    if (allowed.length>0)
    {
      allowed=allowed.substring(1);
    }
    return allowed;
  }
};
