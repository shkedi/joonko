const {ERROR} = require('../constants/error');
const USERS = require('../constants/users');

exports.passwordVerify = passwordVerify;
function passwordVerify({ body: { password }}, res, next) {
  if (!password) {
    console.error(`no email`);
    return res.status(400).send(ERROR["400"]);
  }
  if (!!USERS.find(({password: currPassword}) => currPassword === password)) {
    return next();
  }
  console.error(`does not exist`);
  return res.status(401).send(ERROR["401"]);
}
