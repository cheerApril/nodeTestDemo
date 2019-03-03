const express = require('express');
const router = express.Router();
const user = require('../controller/user.js');

router.get('/list', user.list);
router.post('/create', user.create);
router.put('/update', user.update);
router.delete('/delete', user.delete);

module.exports = router;

