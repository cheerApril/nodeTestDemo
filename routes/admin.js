const express = require(`express`);
const app = express();
const router = express.Router();
const adminUser = require(`../controller/adminUser.js`);


router.post(`/login`, adminUser.login);
router.post(`/test`, adminUser.test);

module.exports = router;