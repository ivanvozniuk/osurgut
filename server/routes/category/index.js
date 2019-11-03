const router = require('express').Router();
const jwtMiddleWare = require('../../service/jwt').jwtMiddleWare;

router.post('/create', jwtMiddleWare, require('./create'));
router.post('/get', require('./get'));
router.post('/delete', jwtMiddleWare, require('./delete'));

module.exports = router;
