var express = require('express');
var router = express.Router();
const userController = require('../controllers').user;
const testController = require('../controllers').test;

//API
router.post('/user', userController.list);
router.post('/user/register', userController.register);
router.post('/user/login', userController.login);
router.get('/test', testController.hello)
module.exports = router
