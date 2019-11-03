const router = require('express').Router();
const jwtMiddleWare = require('../../service/jwt').jwtMiddleWare;

router.post('/create', jwtMiddleWare, require('./create'));
router.post('/delete', jwtMiddleWare, require('./delete'));
router.post('/get', require('./get'));

module.exports = router;