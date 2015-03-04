// Import the default value from 'ember-data' into the variable `DS`
import Ember from 'ember';
import DS from 'ember-data';

// Define the default export for _this_ model, which will be a subclass of
// DS.Model. After this class has been defined, we can import htis subclass
// thusly:
//      import Friend from 'borrowers/models/friend'
// alternatively, relative imports are valid. So from another model:
//      import Friend from './friend'

export default DS.Model.extend({
  // `DS.attr` is the standar way to define attributes with Ember-Data.
  firstName:      DS.attr('string'),
  lastName:       DS.attr('string'),
  email:          DS.attr('string'),
  twitter:        DS.attr('string'),

  totalArticles:  DS.attr('number'),
  articles:       DS.hasMany('article'),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }),

  // This alernative syntax requires prototype extensions, but is otherwise a
  // matter of preference:
  fullName2: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),

  fullNameOverloaded: function(key, value, oldValue) {
    // I don't know why key or oldValue are args. Perhaps sometimes setter is
    // called according to this convention. (This shuts up JSHint)
    if (false) { console.log(key, oldValue); }

    if (arguments.length === 1) {
      // As getter
      return this.get('firstName') + ' ' + this.get('lastName');
    }
    else {
      // As setter
      var name = value.split(' ');
      this.set('firstName', name[0]);
      this.set('lastName', name[1]);

      return value;
    }
  }
});
