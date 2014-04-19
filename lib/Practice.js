var apiUrl = require('apiUrl');

var User = Backbone.Model.extend({
  url: function() {
    return apiUrl('owner', this.onwerName, this.name);
  }
});

module.exports = User;