var userCtrl = require('./userCtrl.js');
var groupCtrl = require('./groupCtrl.js');

var Router = Backbone.Router.extend({
  
  routes: {
    ':user':    userCtrl,
    ':group':   groupCtrl
  }
  
});