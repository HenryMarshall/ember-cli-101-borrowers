import Ember from 'ember';

export default Ember.Controller.extend({

  // // Ember.Computed allows us to create function that are treated as
  // // properties.
  
  // // Ember has idiomatic helpers called `computed property macros` that can
  // // simplify this into the following code.
  // isValid: Ember.computed(

  //   'model.email',
  //   'model.firstName',
  //   'model.lastName',
  //   'model.twitter',
  //   function() {
  //     return !Ember.isEmpty(this.get('model.email')) &&
  //            !Ember.isEmpty(this.get('model.firstName')) &&
  //            !Ember.isEmpty(this.get('model.lastName')) &&
  //            !Ember.isEmpty(this.get('model.twitter'));
  //   }
  // ),

  hasEmail:       Ember.computed.notEmpty('model.email'),
  hasFirstName:   Ember.computed.notEmpty('model.firstName'),
  hasLastName:    Ember.computed.notEmpty('model.lastName'),
  hasTwitter:     Ember.computed.notEmpty('model.twitter'),
  isValid:        Ember.computed.and(
                    'hasEmail', 
                    'hasFirstName', 
                    'hasLastName', 
                    'hasTwitter'
                  ),

  // These actions may be better suited to a route. See 
  // `app/routes/articles/new` for a more detailed description.
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var _this = this;
        // `.save()` will return a promise. When it is fulfilled, the anonymous
        // function gets the `friend` as it's arg.
        this.get('model').save().then(function(friend) {
          // `transitionToRoute()` functions similarly to {{link-to}}, but 
          // within a controller.
          _this.transitionToRoute('friends.show', friend);
        });
      }
      else {
        this.set('errorMessage', 'You have to fill out all the fields');
      }

      return false;

      // // To watch the event bubble, you must return true.
      // console.log("+- save action in friends new controller");
      // // You can make the event bubble by returning true. We will handle this
      // // up through the various routes (FriendsNewController > 
      // // FriendsNewRoute > FriendsRoute > ApplicationRoute).
      // return true;
    },
    cancel: function() {
      // This will be overridden by the edit and new controllers.
      return true;
    }
  }
});
