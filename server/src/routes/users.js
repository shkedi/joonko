const express = require('express');
const {OPEN_JOBS} = require('../constants/jobs');
const USERS = require('../constants/users');
const {domainVerify} = require('../middleware/domain-verifier')
const {userExistVerify} = require("../middleware/user-exist-verifier");
const {passwordVerify} = require("../middleware/password-checker-verifer");
const {cookieVerify} = require("../middleware/cookie-verifier");
const {getJobsByUser} = require('../service/jobs/jobs-service');
const router = express.Router();

router.post('/register', (req, res) => {
  res.status(201).send();
});

router.post('/login', domainVerify, userExistVerify, passwordVerify, ({body: {email}}, res, next) => {
  res.cookie('_user_session', {email});
  res.status(200).send();
});

router.get('/jobs', /*cookieVerify, userExistVerify,*/ ({cookies}, res, next) => {
  const email = cookies._user_session;
  const jobs = getJobsByUser(email ?? 'a@joonko.co');
  res.status(200).send({jobs});
});

module.exports = router;