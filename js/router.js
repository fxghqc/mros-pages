var Router = Backbone.Router.extend({
  
  routes: {
    ':user':    'userPage',
    ':group':   'groupPage'
  },

  user: function(user) {
    // fetch user info and render
  },

  group: function(group) {
    // fetch group info and render
  }

});