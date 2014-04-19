var apiUrl = require('apiUrl');

var User = Backbone.Model.extend({
  url: function() {
    return apiUrl('user', this.name);
  }
});

module.exports = User;