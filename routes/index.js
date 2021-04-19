var express = require('express');
var router = express.Router();
const userController = require("../controllers").user;

//API
router.post('/user', userController.list);
router.post('/user/register', userController.register);
router.post('/user/login', userController.login);

module.exports = router
