const USERS = require('../../constants/users');
const JOBS = require('../../constants/jobs');

exports.getJobsByUser = getJobsByUser;
function getJobsByUser(email) {
  const department = USERS.find(({email: currEmail}) => currEmail === email)?.departments;
  return JOBS.OPEN_JOBS.filter(({department: currDep}) => !!department.find(d => d === currDep));
}