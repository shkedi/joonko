const {ERROR} = require('../constants/error');
exports.domainVerify = domainVerify;
function domainVerify({ body: { email }}, res, next) {
  if (!email) {
    console.error(`no email`);
    return res.status(400).send(ERROR["400"]`later`);
  }
  if (email.replace(/.+@/, '') === 'joonko.co') {
    return next();
  }
  return res.status(401).send(`later`);
}
