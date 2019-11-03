const router = require('express').Router();
const jwtMiddleWare = require('../../service/jwt').jwtMiddleWare;
const limitMiddleWare = require('../../service/limit');

router.post('/create', limitMiddleWare, require('./create'));
router.post('/get', jwtMiddleWare, require('./get'));
router.post('/delete', jwtMiddleWare, require('./delete'));

module.exports = router;
