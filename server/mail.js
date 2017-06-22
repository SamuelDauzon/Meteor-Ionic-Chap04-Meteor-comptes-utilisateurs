Meteor.startup(function () {
  serveurSmtp = {
    username: 'envoimail',
    password: 'envoimail!?7NsR',
    host: 'smtp.webfaction.com',
    port: 587
  };
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(serveurSmtp.username) +
        ':' + encodeURIComponent(serveurSmtp.password) + '@' +
        encodeURIComponent(serveurSmtp.host) + ':' + serveurSmtp.port;
});