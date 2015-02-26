// Import the default value from 'ember-data' into the variable `DS`
import DS from 'ember-data';

// Define the default export for _this_ model, which will be a subclass of
// DS.Model. After this class has been defined, we can import htis subclass
// thusly:
//      import Friend from 'borrowers/models/friend'
// alternatively, relative imports are valid. So from another model:
//      import Friend from './friend'

export default DS.Model.extend({
  // `DS.attr` is the standar way to define attributes with Ember-Data.
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});
