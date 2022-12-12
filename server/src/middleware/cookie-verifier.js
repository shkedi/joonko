const {ERROR} = require('../constants/error');
exports.cookieVerify = cookieVerify;
function cookieVerify({cookies}, res, next) {
  if (!cookies._user_session) {
    console.error(`no cookie`);
    return res.status(401).send(ERROR["401"]);
  }
  return next();
}
