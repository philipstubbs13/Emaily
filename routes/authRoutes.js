const passport = require('passport');

module.exports = (app) => {
    // Route handlers
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    // Log user out of application
    app.get('/api/logout', (req, res) => {
      req.logout();
      res.send(req.user);
    });

    // Current user request handler
    app.get('/api/current_user', (req, res) => {
    //   res.send(req.session);
      res.send(req.user);
    });
};