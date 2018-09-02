const passport = require('passport');
const _ = require('lodash');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'), // its a middleware
    (req, res) => {
      const referer = new URL(req.headers.referer);
      res.redirect(referer.pathname);
    }
  );

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/menu');
  });
};
