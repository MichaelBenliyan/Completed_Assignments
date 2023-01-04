const deniedObj = require('./denied');

module.exports = function(req, res, next) {
  if (req.headers.authorization != 'Basic secret_key') {
    return next({
      log: 'authController',
      message: deniedObj
    })
  }
  else {
    console.log(req.headers);
    console.log(req.headers.authorization)
    
    return next()
  }
}
