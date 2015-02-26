import Ember from 'ember';

export default Ember.Route.extend({

  // This is an explicit writing of the default configuration. Ember knows to
  // generate this because the :dynamic_segment in app/router.js ends in `_id`.

  model: function(params) {
    return this.store.find('friend', params.friend_id);
  }

  // The delete action has been refactored into the shared (between show and
  // index) `/app/routes/friends.js`. The event bubbles there after not finding
  // an action here.

});
