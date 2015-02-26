import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log("+--- save action bubbled up to friends route");
      return true;
    }, 
    cancel: function() {
      console.log("+--- cancel action bubbled up to friends route");
      return true;
    },

    delete: function(friend) {
      var _this = this;
      friend.destoryRecord().then(function() {
        // If already there (because the action was called from friends.index),
        // then the transition will "behave like a no-op".
        _this.transitionTo('friends.index');
      });
    }
  }
});
