import Ember from 'ember';

export default Ember.Route.extend({
  deactivate: function() {
    var model = this.modelFor('friends/edit');
    // This restores a dirty model to their initial state.
    model.rollback();
  }
});
