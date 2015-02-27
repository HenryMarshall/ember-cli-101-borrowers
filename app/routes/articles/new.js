import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('article', {
      // The `defaultValue` for `state` is set in `app/models/articles.js`
      friend: this.modelFor('friends/show')
    });
  },

  // Actions can be put in the controller OR the route. The rule of thumb is to
  // put anything that modifies application state in the route, and use the
  // controllersas decorators for our templates.
  actions: {
    save: function() {
      var _this = this;
      // This gets the model set by the above model hook.
      var model = this.modelFor('articles/new');

      model.save().then(function() {
        _this.transitionTo('articles');
      });
    },

    cancel: function() {
      // I think, we know to transitionTo `this` friend's articles.
      this.transitionTo('articles');
    }
  }
});