const withAuth = (req, res, next) => {
  
   if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // We call next() if the user is authenticated
    next();
  }
};

module.exports = withAuth;
