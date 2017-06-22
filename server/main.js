import { Meteor } from 'meteor/meteor';

Accounts.onCreateUser(function (options, user) {
  if (options.email) {
    Meteor.setTimeout(function () {
      Accounts.sendVerificationEmail(user._id);
    }, 2 * 1000);
  }
  return user;
});