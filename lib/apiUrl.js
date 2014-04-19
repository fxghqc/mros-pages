var URLs = {
  user: function(name) {
    return "/" + name;
  },
  
  group: function(name) {
    return "/" + name;
  },
  
  project: function(owner, name) {
    return "/" + owner + "/" + name;
  },
  
  practice: function(owner, name) {
    return "/" + owner + "/" + name;
  }
};

var apiUrl = function(type) {
  return URLs[type] ?
    URLs[type].apply(this, [].slice.call(arguments, 1)) :
    undefined;
};

module.exports = apiUrl;