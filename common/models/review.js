'use strict';

module.exports = function(Review) {
  //Disable endpoint methods
  Review.disableRemoteMethod("count", true);
  Review.disableRemotemethod("exists", true);
  Review.disableRemoteMethod("findOne", true);
  Review.disableRemoteMethod('createChangeStream', true);
  Review.disableRemoteMethod("updateAll", true);

};
