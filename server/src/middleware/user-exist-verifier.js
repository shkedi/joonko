const USERS = require('../constants/users');
const {ERROR} = require('../constants/error');
exports.userExistVerify = userExistVerify;
function userExistVerify({ body: { email }}, res, next) {
  if (!email) {
    console.error(`no email`);
    return res.status(400).send(ERROR["400"]);
  }
  if (!!USERS.find(({email: currEmail}) => currEmail === email)) {
    return next();
  }
  console.error(`does not exist`);
  return res.status(404).send(ERROR["404"]);
}
