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

  // Values to be bound seem to be passed as the first args to `Ember.computed`
  // rather than as args to a chained `.property()` or `.observes()`. Is this a
  // change for ember in general or because the guide is talking in the context
  // of `Ember.Object.Extend`
  //    http://emberjs.com/guides/object-model/observers/
  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});
