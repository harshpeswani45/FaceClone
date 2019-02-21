var express = require('express');
var router = express.Router();
var loginController = require('../controller/index')

/* GET home page. */
router.get('/', loginController.sign);
router.get('/signup' ,loginController.signupsign)
router.post('/signup',loginController.signup)
router.get('/login',loginController.login1)
router.post('/login',loginController.login)
router.get('/logouts',loginController.logout)
router.get('/:id',loginController.false)

module.exports = router;
