import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('friends', function() {
    this.route('new');

    // `:friend_id` is a dynamic path, it is available to the model under the
    // namespace `params`.

    // If the dynamic path ends in `_id`, the model path is auto-generated.
    this.route('show', { path: ':friend_id' });
    this.route('edit', { path: ':friend_id/edit' });
  });
});

export default Router;
