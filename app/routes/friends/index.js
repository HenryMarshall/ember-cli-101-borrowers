import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // You can search for a record by id thusly:
    //      return this.store.find('friend', 782);
    // which requests `/api/friends/1`. This will return a single object, so 
    // corresponding modifications must be made to the template.

    // You can query for a subset thusly:
    //      return this.store.findQuery('friend', { active: true });
    // which requests `/api/friends?active=true`

    // I am unsure about the difference between the executed command and:
    //      return this.store.find('friend');

    return this.store.findAll('friend');

    // Weirdly, I am now struggling to run the above manually with `$E`. I have
    // tried the ApplicationRoute, FriendsRoute and FriendsIndexRoute.
  }

  
  // The delete action has been refactored into the shared (between show and
  // index) `/app/routes/friends.js`. The event bubbles there after not finding
  // an action here.

});
