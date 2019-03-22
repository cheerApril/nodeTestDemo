const express = require(`express`);
const app = express();
const router = express.Router();

router.get('/list', user.list);


module.exports = router;