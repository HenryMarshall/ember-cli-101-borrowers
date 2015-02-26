import Ember from 'ember';

export default Ember.Route.extend({

  // This is an explicit writing of the default configuration. Ember knows to
  // generate this because the :dynamic_segment in app/router.js ends in `_id`.

  model: function(params) {
    return this.store.find('friend', params.friend_id);
  },

  actions: {
    delete: function(friend) {
      var _this = this;
      friend.destroyRecord().then(function() {
        _this.transitionTo('friends.index');
      });
    }
  }

});
