var gJSOptionsPane = {

  writeInvertedPref: function (item)
  {
    var checkbox = document.getElementById(item);
    return !checkbox.checked;
  },
  
  readInvertedPref: function (item)
  {
    var checkbox = document.getElementById(item);
    var preference = document.getElementById(checkbox.getAttribute('preference'));
    return !preference.value;
  },
  
  setGroup: function(groupbox, setting)
  {
    var items = groupbox.getElementsByTagName('checkbox');
    for (var i = 0; i<items.length; i++)
    {
      items.item(i).disabled=!setting;
    }
  },
  
  readJavascriptEnabled: function ()
  {
    var preference = document.getElementById('javascript.enabled');
    var groupWindow = document.getElementById('groupWindowOpenSettings');
    this.setGroup(groupWindow,preference.value);
    var advancedWindow = document.getElementById('groupJavascript');
    this.setGroup(advancedWindow,preference.value);
    return preference.value;
  }
};

