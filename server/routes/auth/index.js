const router = require('express').Router();
const jwtMiddleWare = require('../../service/jwt').jwtMiddleWare;

const admin = require('./admin');

router.post('/register', require('./register'));
router.post('/login', require('./login'));
router.post('/refresh', require('./refresh'));

router.get('/token', jwtMiddleWare, require('./token'));

router.use('/admin', admin);

module.exports = router;
