exports.getLogin = (req, res, next) => {
  console.log('jjjj')
  // req.get('Cookie').split(';')[1].trim().split('=')[1]
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: req.isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  console.log('aaa')
    req.session.isLoggedIn = 'true'
    res.setHeader('Set-Cookie', 'loggedIn=true')
    res.isLoggedIn = true;
    res.redirect('/');
  };
