import Ember from 'ember';

export default Ember.Controller.extend({
  // Done this way so that 'model.description' is monitored.
  isValid: Ember.computed('model.description', function() {
    return !Ember.isEmpty(this.get('model.description'));
  }),

  actions: {
    // If it is valid, the event will bubble to the route. Otherwise
    save: function() {
      if (this.get('isValid')) {
        return true;
      } 
      else {
        this.set('errorMessage', "Article must have a description");
        return false;
      }
    }
  }
});
