const router = require('express').Router();
const jwtMiddleWare = require('../../service/jwt').jwtMiddleWare;

router.post('/change', jwtMiddleWare, require('./change'));
router.post('/get', require('./get'));

module.exports = router;
