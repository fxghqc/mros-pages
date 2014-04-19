var userCtrl = require('userCtrl');
var groupCtrl = require('groupCtrl');

var Router = Backbone.Router.extend({
  
  routes: {
    ':user':    userCtrl,
    ':group':   groupCtrl
  }
  
});

module.exports = Router;