/*
 * $HeadURL$
 * $LastChangedBy$
 * $Date$
 * $Revision$
 *
 */

var gPaneWindows = 
{
  writeDirectories: function()
  {
    var allowed = document.getElementById("windowOpenDirectories");
    var pref1 = document.getElementById("dom.disable_window_open_feature.directories");
    pref1.value=allowed.checked;
    var pref2 = document.getElementById("dom.disable_window_open_feature.personalbar");
    pref2.value=allowed.checked;
    return allowed.checked;
  }
};
