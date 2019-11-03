const router = require('express').Router();
const jwtMiddleWare = require('../../../service/jwt').jwtMiddleWare;

router.post('/login', require('./login'));
router.get('/token', jwtMiddleWare, require('./token'));

module.exports = router;
