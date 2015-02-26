// This is just an illustration adapter. It would ordinarilly require and import
/*global ApplicationAdapter:false*/

export default ApplicationAdapter.extend({
  // If the server uses nested urls, you might need to customize the adderss for
  // a single resource.
  buildURL: function(type, id, record) {
    return '/friends/' + record.get('friend.id') + '/articles/' + id;
  } 
});
