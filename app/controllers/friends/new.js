import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log("+- save action in friends new controller");

      // You can make the event bubble by returning true. We will handle this up
      // through the various routes (FriendsNewController > FriendsNewRoute >
      // FriendsRoute > ApplicationRoute).
      return true;
    },
    cancel: function() {
      console.log("+- cancel action in friends new controller");

      // To easily see where an event will bubble, check `Current Route Only` in
      // the Ember Inspector.
      return true;
    }
  }
});
