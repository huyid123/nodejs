var express = require('express');
var router = express.Router();
const userController = require("../controllers").user;

//API
router.post('/api/user', userController.list);
router.post('/api/user/register', userController.register);
router.post('/api/user/login', userController.login);

module.exports = router
