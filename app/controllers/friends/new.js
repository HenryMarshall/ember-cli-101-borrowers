// Here we extend the functionality of a shared (with edit) base controller.
// `FriendsBaseController` is just a variable name for the default export value.
import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    // Here we override the cancel action, with new specific behavior.
    cancel: function() {
      this.transitionToRoute('friends');
      return false;

      // // To watch the event bubble you must return true.
      // console.log("+- cancel action in friends new controller");
      // // To easily see where an event will bubble, check `Current Route Only` in
      // // the Ember Inspector.
      // return true;
    }
  }
});
