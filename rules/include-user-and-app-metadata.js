function (user, context, callback) {
  // TODO: implement your rule
  var namespace = 'https://auth.witspry.com/';
   if (context.idToken && user.user_metadata) {
     context.idToken[namespace + 'user_metadata'] = user.user_metadata;
   }
   if (context.idToken && user.app_metadata) {
     context.idToken[namespace + 'app_metadata'] = user.app_metadata;
   }
  callback(null, user, context);
}
