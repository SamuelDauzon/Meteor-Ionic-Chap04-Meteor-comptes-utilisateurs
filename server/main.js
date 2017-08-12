import { Meteor } from 'meteor/meteor';

Accounts.onCreateUser(function (options, user) {
  check(options.profile.prenom, String);
  check(options.profile.sexe, String);
  check(options.profile.situation, String);
  check(options.profile.publicite, Boolean);

  user.prenom = options.profile.prenom;
  user.sexe = options.profile.sexe;
  user.situation = options.profile.situation;
  user.publicite = options.profile.publicite;

  if (options.email) {
    Meteor.setTimeout(function () {
      Accounts.sendVerificationEmail(user._id);
    }, 2 * 1000);
  }
  return user;
});