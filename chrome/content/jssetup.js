/*
 * $HeadURL$
 * $LastChangedBy$
 * $Date$
 * $Revision$
 *
 * A hack to change the size of the options dialog. Should only do something if the height is already set,
 * which only happens on windows machines.
 */
 
function setupJS(event)
{
  var prefWindow = document.getElementById('BrowserPreferences');
  if ((prefWindow.style.height)&&(prefWindow.style.height=="36em"))
  {
    prefWindow.style.height="38em";
  }
};

//document.addEventListener('load',setupJS,false);
