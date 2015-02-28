import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // Using `modelFor()` lets us grab the model for a specified parent route.
    // Then we ask for the articles that exist for that model and reture them. 
    return this.modelFor('friends/show').get('articles');
  },

  // The `save` state action for articles bubbles up to here.
  actions: {
    save: function(model) {
      model.save();
      return false;
    }
  }
});
