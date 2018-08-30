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
      res.redirect('/menu');
    }
  );

  app.get('/api/current_user', (req, res) => {
    console.log(req.user);
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
