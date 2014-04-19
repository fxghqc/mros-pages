var apiUrl = require('apiUrl');

var Group = Backbone.Model.extend({
  url: function() {
    return apiUrl('group', this.name);
  }
});

module.exports = Group;