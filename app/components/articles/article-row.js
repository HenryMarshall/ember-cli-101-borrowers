import Ember from 'ember';

export default Ember.Component.extend({
  // This component will always be a 'tr', default is 'div'.
  tagName: 'tr',
  article: null,          // passed-in
  articleStates: null,    // passed-in
  actions: {
    saveArticle: function(article) {
      // Actions in components don't automatically bubble. So to trigger an
      // action in a Route or Controller, we'll need to bind suck action to a
      // property and then call it with `sendAction`.
      this.sendAction('save', article);
    }
  }
});
