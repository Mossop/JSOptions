var gJSOptionsPane = {

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

