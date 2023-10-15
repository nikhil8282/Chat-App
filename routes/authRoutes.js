const express = require('express');
const { signUpHandler, loginHandler, getUser } = require('../controllers/authController');
const protectMiddleware = require('../middlewares/protectMiddleware');
const router = express.Router();

router.post('/signup',signUpHandler);
router.post('/login',loginHandler);
router.get('/user',protectMiddleware,getUser);
module.exports = router;