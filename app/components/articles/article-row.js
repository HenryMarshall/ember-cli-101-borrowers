import Ember from 'ember';

export default Ember.Component.extend({
  // This component will always be a 'tr', default is 'div'.
  tagName: 'tr',
  article: null,          // passed-in
  articleStates: null,    // passed-in
  autoSave: function() {
    var article = this.get('article');
    if (!article.get('isNew')) {
      this.sendAction('save', article);
    }
  },
  stateChanged: function() {
    var article = this.get('article');
    if (article.get('isDirty') && !article.get('isSaving')) {
      Ember.run.once(this, this.autoSave);
    }
  // The `observes` method watches for changes. The check is also run on
  // initialization.
  }.on('init').observes('article.state')

  // // The `saveArticle` action was triggered by the (deprecated) save button
  // // found in `app/templates/components/articles/articles-row.hbs`.
  // actions: {
  //   saveArticle: function(article) {
  //     // Actions in components don't automatically bubble. So to trigger an
  //     // action in a Route or Controller, we'll need to bind suck action to a
  //     // property and then call it with `sendAction`.
  //     this.sendAction('save', article);
  //   }
  // }
});
