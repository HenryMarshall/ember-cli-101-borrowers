import Ember from 'ember';

export default Ember.Controller.extend({
  // Ember.Computed allows us to create function that are treated as properties.
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    function() {
      return !Ember.isEmpty(this.get('model.email')) &&
             !Ember.isEmpty(this.get('model.firstName')) &&
             !Ember.isEmpty(this.get('model.lastName')) &&
             !Ember.isEmpty(this.get('model.twitter'))
    }
  ),
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
