function setupJS(event)
{
  var prefWindow = document.getElementById('BrowserPreferences');
  if ((prefWindow.style.height)&&(prefWindow.style.height=="36em"))
  {
    prefWindow.style.height="38em";
  }
};

//document.addEventListener('load',setupJS,false);
