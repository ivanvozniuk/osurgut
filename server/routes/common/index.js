const router = require('express').Router();
// const jwtMiddleWare = require('../../service/jwt').jwtMiddleWare;

router.post('/weather', require('./weather'));

module.exports = router;
