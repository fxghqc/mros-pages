var apiUrl = require('apiUrl');

var Project = Backbone.Model.extend({
  url: function() {
    return apiUrl('project', this.ownerName, this.name);
  }
});

module.exports = Project;