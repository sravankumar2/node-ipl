const path = require('path')
const express= require('express')
const adminController= require('../controllers/admin')
const router = express.Router();

router.get('/login', adminController.getLoginForm)
router.get('/login/auth', adminController.getAuth)
router.get('/home', adminController.getAllPlayers)

module.exports= router;